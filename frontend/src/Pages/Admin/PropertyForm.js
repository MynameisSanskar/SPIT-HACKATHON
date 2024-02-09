// import { useState } from "react"
// import Img from './Image'
// import '../CSS/Formstyle.css'

// const PropertyForm=()=>{
// const[name,setName]=useState('')
// const[img,setImg]=useState('')
// const[location,setLocation]=useState('')
// const[area,setArea]=useState('')
// const[star,setStar]=useState('')
// const[tag,setTag]=useState('')
// const[price,setPrice]=useState('')
// const[description,setDescription]=useState('')
// const[error,setError]=useState(null)

// const handleClick=async(e)=>{
//     e.preventDefault()
//     const card={name, img, location,area,star,tag,price,description}
//     const response=await fetch('http://localhost:3001',{
//         method:'POST',
//         body:JSON.stringify(card),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     })
//     const json =await response.json()
//     if(!response.ok){
// setError(json.error)
//     }
//     if(response.ok){
//         setError(null)
//         setName('')
//         setArea('')
//         setPrice('')
//         setStar('')
//         setTag('')
//         setImg('')
//         setLocation('')
//         setDescription('')
//         console.log('new property added',json);
//     }
// }

//     return (
//         <section class="bg-white dark:bg-gray-900">
//         <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
//             <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
//             <form action="#">
//                 <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                     <div class="sm:col-span-2">
//                         <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Name</label>
//                         <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
//                     </div>
//                     <div class="w-full">
//                         <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property location</label>
//                         <input onChange={(e)=>{setLocation(e.target.value)}}type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
//                     </div>
//                     <div class="w-full">
//                         <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
//                         <input onChange={(e)=>{setPrice(e.target.value)}} type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
//                     </div>
//                     <div>
//                         <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
//                         <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

//                             value={star}
//                             onChange={(e) => setStar(e.target.value)}

//                             >
//                             <option value="1">*</option>
//                             <option value="2">**</option>
//                             <option value="3">***</option>
//                             <option value="4">****</option>
//                             <option value="5">*****</option>
//                             </select>

//                     </div>
//                     <div>
//                         <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
//                         <input   onChange={(e)=>{setArea(e.target.value)}} type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
//                     </div>
//                     <div class="sm:col-span-2">
//                         <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
//                         <textarea  onChange={(e)=>{setDescription(e.target.value)}} id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
//                     </div>
//                 </div>

//               <Img/>

//               <button onClick={handleClick} type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-blue bg-slate-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
//         Add product
//     </button>
//             </form>

//         </div>
//       </section>
//       )

// }
// export default PropertyForm
import React, { useState } from "react";
import Image from "../../components/Image.js";
import "../../CSS/Formstyle.css";

const PropertyForm = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [img, setImg] = useState([]);
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [star, setStar] = useState("");
  //   const [tag, setTag] = useState('');
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  let [tags, setTags] = useState("");
  const [bhks, setBhks] = useState("");
  const [amenities, setamenities] = useState("");
  const [error, setError] = useState(null);

  // State for uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);

  // Handler to receive uploaded images from the Image component
  const handleImageUpload = (newImages) => {
    setUploadedImages(newImages);
  };

  // Handler to handle form submission
  const handleClick = async (e) => {
    e.preventDefault();
    let tag = tags.split(" ");
    console.log(tag);
    // img1=
    // img2=uploadedImages[1];
    // img2=uploadedImages[2];
    // img4=uploadedImages[3];
    // img5=uploadedImages[4];
    const card = {
      bhks,
      name,
      location,
      area,
      star,
      tag,
      price,
      description,
      img: {
        img1: uploadedImages[0],
        img2: uploadedImages[1],
        img3: uploadedImages[2],
        img4: uploadedImages[3],
        img5: uploadedImages[4],
      },
    };

    try {
      const response = await fetch("http://localhost:3001", {
        method: "POST",
        body: JSON.stringify(card),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      console.log(uploadedImages);
      if (!response.ok) {
        setError(json.error);
      } else {
        setError(null);
        // Reset form fields
        setBhks("");
        setName("");
        setArea("");
        setPrice("");
        setStar("");
        setTags("");
        setImg("");
        setLocation("");
        setDescription("");
        setamenities("");
        setUploadedImages([]); // Clear uploaded images
        console.log("New property added", json);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
                type="text"
                name="brand"
                id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Property Tags
              </label>
              <input
                onChange={(e) => {
                  setTags(e.target.value);
                }}
                value={tags}
                type="text"
                name="brand"
                id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Tags"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="brand"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Property Bhks
              </label>
              <input
                onChange={(e) => {
                  setBhks(e.target.value);
                }}
                value={bhks}
                type="text"
                name="brand"
                id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Bhks"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                value={price}
                type="number"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required=""
              />
            </div>

            <div class="flex justify-between ">
  <div class="w-full ">
    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Category
    </label>
    <select id="category" style={{width:"308px"}}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
      <option value="1">*</option>
      <option value="2">**</option>
      <option value="3">***</option>
      <option value="4">****</option>
      <option value="5">*****</option>
    </select>
  </div>

  <div class="w-full ml-6">
    <label for="amenities" class="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Amenities
    </label>
    <select id="amenities" style={{width:"308px"}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
      <option value="1">Electricity</option>
      <option value="2">Cleaning</option>
      <option value="3">Washing</option>
      <option value="4">Cook</option>
      <option value="5">Gas</option>
    </select>
  </div>
</div>   
              <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Area
              </label>
              <input
                onChange={(e) => {
                  setArea(e.target.value);
                }}
                value={area}
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type area"
                required=""
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                id="description"
                rows="8"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>

          <Image onImageUpload={handleImageUpload} img={img} />

          <button
            onClick={handleClick}
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-blue bg-slate-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default PropertyForm;
