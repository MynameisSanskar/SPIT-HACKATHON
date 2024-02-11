import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState, useEffect } from "react";
import products from "./prdoucts.js"
function Name(){
      const [index, setIndex] = useState(0);
        const [transition, setTransition] = useState(true);

      useEffect(() => {
    const intervalId = setInterval(() => {
      nextProduct();
    }, 6000); // Change to 10000 milliseconds (10 seconds)

    return () => clearInterval(intervalId);
  }, [index]);
  const { heading,subtext,path,img } = products[index];
  const checkNumber = (number) => {
    if (number > products.length - 1) {
      return 0;
    }
    if (number < 0) {
      return products.length - 1;
    }
    return number;
  };
  const nextProduct = () => {
        setTransition(true);

    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevProduct = () => {
        setTransition(true);

    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
   const handleTransitionEnd = () => {
    setTransition(false);
  };

  const transitionStyles = {
    transition: transition ? "background 1s ease-in-out" : "none",
  };
return(
 
    
    
    
  
 
          <div className=" flex justify-center w-full relative bg-whiterounded-lg shadow dark:bg-gray-800" style={{ transitionStyles,backgroundImage: `url(${img})`,backgroundSize:'cover',backgroundPosition:'center',height:560 }}  onTransitionEnd={handleTransitionEnd}>
          <button
            className='prev-btn'
            onClick={prevProduct}
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
            onClick={nextProduct}
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


<div class=" align-middle max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{margin:'35px',marginTop:180, alignContent:'center',height:'fit-content'}}>
    
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white " style={{textAlign:'center'}}>{heading}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{textAlign:'center'}}>{subtext}</p>
        <div className='flex justify-center'><a href={path} class=" align-middle inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a></div>
        
    </div>
</div>


</div>



)
}
export default Name