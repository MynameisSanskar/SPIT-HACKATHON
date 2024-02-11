import React, { useEffect, useState } from "react";
import { json, useMatch, useParams } from "react-router-dom";
import Map from "../../components/Map";
import { usePropetiesContext } from "../../hooks/usePropertyContext";
// import video from '../pexels_videos_2646392 (1080p).mp4'

function ProductDetail() {
  // const { property, dispatch } = usePropetiesContext();
  // const [details, setDetails] = useState({});
  // const [loading, setLoading] = useState(true);
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log(id);
  //       const response = await fetch(`http://localhost:3001/${id}`);
  //       const json = await response.json();

  //       if (response.ok) {
  //         //   dispatch({ type: 'SET_PROPERTY', payload: json });
  //         console.log(json);
  //         setDetails(json);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.error("Error while fetching data:", error);
  //     }
  //   };
  //   console.log("Details :", json);
  //   fetchData();
  // }, []);
  // // console.log(details.img.img1);
  // // const { img: { img1, img2, img3, img4, img5 } } = details;
  const items = [];
  // let i = details.star;
  let i=5;
  while (i > 0) {
    items.push(
      <svg
        className="w-5 h-5 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
    i--;
  }

  // if (loading) {
  //   return <h1>Loading....</h1>;
  // }

  return (
    <div>
      <section
        className="overflow-hidden h-full py-11 font-poppins dark:bg-gray-800"
        style={{ backgroundSize: "cover",backgroundImage:"url('https://www.gaurikohli.com/cdn/shop/articles/India_Handicraft_Exporters-A_6.jpg?v=1679305506&width=2560')" }}
      >
        <div
          className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 w-fitbg-white border border-gray-200 bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg shadow dark:bg-gray-800"
          style={{ marginTop: "40px",backgroundImage:"url('https://img.freepik.com/free-photo/vintage-grunge-paper-background_1048-10911.jpg?size=626&ext=jpg&ga=GA1.1.1255800410.1704448219&semt=ais')",backgroundSize: "cover" }}
        >
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4 md:w-1/2 ">
              <div class="sticky top-0 z-50 overflow-hidden ">
                {/* {details.img.img1 && ( */}
                  <div c lassName="relative mb-6 rounded-full lg:mb-10 lg:h-2/4 overflow-hidden group ">
                    <img
                      // src={details.img.img1}
                      src="https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg"
                      alt=""
                      style={{width:450,height:450,marginLeft:30}}
                      className="object-cover rounded-full  w-full lg:h-full transition-transform transform scale-100 group-hover:scale-105"
                    />
                  </div>
                {/* )} */}
                {/* <div class="flex-wrap hidden md:flex ">
                  <div class="w-1/2 p-2  sm:w-1/4 rounded-md">
                    <a href="#" class="block">
                      <img
                        src={details.img.img2}
                        alt=""
                        class="object-cover w-full lg:h-20 rounded-md"
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4 rounded-md">
                    <a href="#" class="block">
                      <img
                        src={details.img.img3}
                        alt=""
                        class="object-cover w-full lg:h-20 rounded-md"
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4 rounded-md">
                    <a href="#" class="block">
                      <img
                        src={details.img.img4}
                        alt=""
                        class="object-cover w-full lg:h-20 rounded-md"
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4 rounded-md">
                    <a href="#" class="block">
                      <img
                        src={details.img.img5}
                        alt=""
                        class="object-cover w-full lg:h-20 rounded-md"
                      />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2  ">
              <div>
                <div
                  // class="mb-8  rounded-lg shadow "
                  style={{ padding: "20px" }}
                >
                  {/* <span class="text-lg font-medium text-rose-500 dark:text-rose-200">
                    New
                  </span> */}
                  <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {}
                  </h2>

                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    {/* {items} */}
                    
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {/* {Math.floor(details.star)} */}
                      5
                      <span>.0</span>
                    </span>
                  </div>

                  <p className=" font-extrabold max-w-md mb-2 text-gray-700 dark:text-gray-400  text-4xl pt-5">
                    {/* {details.name} */}
                    Name
                  </p>

                  <p class="font-semibold py-6 text-2xl">
                    {/* {details.area} */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quia voluptatum officiis sint libero iusto ullam atque ipsum ducimus voluptate!</p>
                  
                  {/* <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{details.tag[0]}</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{details.tag[1]}</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{details.tag[2]}</span> */}
                  

                  <div className="max-w-md mb-4 mt-2">
                    <p className="text-4xl font-bold text-gray-700 dark:text-gray-400 transition-transform transform hover:scale-105">
                      {/* <span>₹{details.price}</span> */}
                      <span>₹500</span>
                      <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400"></span>
                    </p>
                  </div>

<form class="max-w-xs mb-3">
    <label for="counter-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center">
        <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="counter-input" data-input-counter class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder=""  required/>
        <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
</form>
   <a href="/" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Add to cart
</a>





                  
                </div>
                
                <div class="flex flex-wrap items-center -mx-4 ">
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
