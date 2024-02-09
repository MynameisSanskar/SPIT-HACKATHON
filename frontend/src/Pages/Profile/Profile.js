import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { json } from "react-router-dom";

export default function Profile() {
  const [buttonText, setText] = useState("Edit profile");
  const { user } = useAuthContext();
  const [curs, setCursor] = useState();
  const [type, setType] = useState(true);
  const [Profile, setProfile] = useState({
    img: "",
    email: "",
    gender: "",
    address: "",
    mobile: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response) {
        console.log("error ");
      }
      const json = await response.json();

      setProfile({
        img: json.img,
        email: json.email,
        mobile: json.mobile,
        address: json.address,
        gender: json.gender,
      });
      console.log(Profile);
    };
    fetchData();
  }, [user.token]);

  const onChange = (e) => {
    setProfile({ ...Profile, [e.target.name]: e.target.value });
  };
  const onChangeImg = async (event) => {
    console.log(event.target.files[0]);

    let file = event.target.files[0];

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "chatapp");
    data.append("cloud_name", "dogndfmt0");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dogndfmt0/image/upload",
        {
          method: "post",
          body: data,
        }
      );

      const cloudinaryData = await response.json();
      console.log("Cloudinary URL:", cloudinaryData.url);
      setProfile({ img: cloudinaryData.url });
      console.log(Profile);
      // Use the Cloudinary URL as needed (e.g., save it to state or perform other actions)
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const handleClick = () => {
    if (buttonText === "Edit profile") {
      setText("Save");
    } else {
      setText("Edit profile");
    }
    if (curs === "pointer") {
      setCursor();
    } else {
      setCursor("pointer");
    }
    setType(!type);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/profile/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ ...Profile }),
    });
    if (!response) {
      console.log("error");
    }
    const json = await response.json();
    console.log(json);
  };
  // let username=Profile.email.split('@')
  // username=username[0]
  return (
    <div
      className="flex"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/vector-illustration-eps-10-skyscrapers-with-copy-space_554888-974.jpg?size=626&ext=jpg&ga=GA1.1.1255800410.1704448219&semt=ais')",
        justifyContent: "center",
      }}
    >
      <div
        class=" w-full max-w-screen-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <div class="flex justify-end px-4 pt-4"></div>
        <div
          class="flex flex-col items-center "
          style={{ justifyContent: "center" }}
        >
          {Profile.img && (
            <div>
              <img
                class="mb-3 rounded-full shadow-lg"
                alt="not found"
                // width={"250px"}
                style={{ width: "12rem", height: "12rem", margin: "15px" }}
                src={Profile.img}

                // Adjust the radius value as needed
              />
              <br />
              <button
                class="text-white block  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900 "
                style={{ width: "100px", marginBottom: "20px",alignItems:'center' }}
                onClick={() => setProfile({ img: null })}
              >
                Remove
              </button>
            </div>
          )}

          <br />
          <br />

          <input type="file" name="myImage" onChange={onChangeImg} />
          <h5 class="mb-1 text-2xl font-semibold text-gray-900 dark:text-white"></h5>
          {/* <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
        </div>

        <form onSubmit={onSubmit} class="max-w-md mx-auto">
          <label
            htmlFor="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            style={{ marginTop: "1.5rem" }}
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            value={Profile.email}
            onChange={onChange}
            id="disabled-input"
            aria-label="disabled input"
            class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{ cursor: curs }}
          />
          <label
            htmlFor="mobile"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            style={{ marginTop: "1.5rem" }}
          >
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            value={Profile.mobile}
            onChange={onChange}
            id="disabled-input"
            aria-label="disabled input"
            class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{ cursor: curs }}
          />
          <label
            htmlFor="gender"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            style={{ marginTop: "1.5rem" }}
          >
            Gender
          </label>
          <input
            type="text"
            name="gender"
            value={Profile.gender}
            onChange={onChange}
            id="disabled-input"
            aria-label="disabled input"
            class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            style={{ cursor: curs }}
          />
          <div class="mb-5">
            <label
              htmlFor="adress"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              value={Profile.address}
              onChange={onChange}
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              href="#"
              class="text-white block  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
              style={{ width: "200px", marginBottom: "20px" }}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// const UploadAndDisplayImage = () => {

//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div>
//       <h1>Upload and Display Image usign React Hook's</h1>

//       {selectedImage && (
//         <div>
//           <img
//             alt="not found"
//             width={"250px"}
//             src={URL.createObjectURL(selectedImage)}
//           />
//           <br />
//           <button onClick={() => setSelectedImage(null)}>Remove</button>
//         </div>
//       )}

//       <br />
//       <br />

//       <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           console.log(event.target.files[0]);
//           setSelectedImage(event.target.files[0]);
//           setProfile({img:event.target.files[0]})
//         }}
//       />
//     </div>
//   );
// };

// export default UploadAndDisplayImage;
