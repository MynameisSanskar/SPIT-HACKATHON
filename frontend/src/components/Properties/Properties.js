import property from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from "react";

function Properties(){
    const [index, setIndex] = useState(0);
  const { location,bhk,img,img2 } = property[index];
  const checkNumber = (number) => {
    if (number > property.length - 1) {
      return 0;
    }
    if (number < 0) {
      return property.length - 1;
    }
    return number;
  };
  const nextProperty = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevProperty = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  console.log({location})
  

    return(
        
   <div>
    
    <h1 class="font-extrabold text-4xl text-center p-5" style={{margin:'5px'}}>Properties Available</h1>
    <div class="flex">
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{margin:'15px'}}>
    <a href="#">
        <img class="rounded-t-lg" src="https://static.vecteezy.com/system/resources/previews/017/294/054/non_2x/densely-populated-urban-settlement-illustration-in-outline-design-style-isolated-on-white-background-suitable-for-use-as-a-property-logo-design-or-as-a-marketing-property-element-vector.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Best Sellers in India
</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Our freshly brewed list of the best residential projects from top rated builders in the country, backed by our award-winning start-to-finish services.

</p>
        <a href="/properties" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View all
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
 
          <div className=" w-full relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ margin: '18px', backgroundImage: `url(${img2})` }}>
          <button
            className='prev-btn'
            onClick={prevProperty}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.7)',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '1.5em',
              fontWeight: 'bold',
            }}
          >
            <FaChevronLeft />
          </button>

          <button
            className='next-btn'
            onClick={nextProperty}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.7)',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '1.5em',
              fontWeight: 'bold',
            }}
          >
            <FaChevronRight />
          </button>


<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{margin:'35px', alignContent:'center'}}>
    <a href="#">
        <img class="rounded-t-lg" src={img} alt="" style={{height:'250px'}} />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{location}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{bhk}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


</div>
</div>

</div>

)
}
export default Properties