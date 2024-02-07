import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
// import Reviews from "/Users/keshavdhanuka01/Desktop/myapp/src/ReviewsPage/Reviews.js"
import data from './data2.js'


function Reviews(){
    const navigate = useNavigate();

  const handleClick=(event)=>{
    event.preventDefault()
    navigate('reviews')
  }
  const [index, setIndex] = useState(0);
  const { stars,image,name,title,quote } = data[index];
  const items=[];
  let i=stars;
  while(i>0){
    items.push(<svg key={i} class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>)
    i--
  }
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
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
 return(

 
<div class=" flex flex-col items-center pb-10">
  {/* <Link to="reviews">hello</Link> */}
    <h1 class="font-extrabold text-4xl text-center p-5" style={{margin:'5px'}}>Reviews</h1>
    
  <div className="w-full justify-center items-center flex relative  bg-blue-700 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ margin: '8px', maxWidth: '1000px' }}>
          <button
          onClick={prevProperty}
            className='prev-btn'
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
          onClick={nextProperty}
            className='next-btn'
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



<button onClick={event=>handleClick(event)} class="max-w-screen-md justify-center" style={{marginTop:'35px', marginBottom:'25px'}}>
    
        <p class="text-2xl font-semibold text-white dark:text-white">{quote}</p>
    
    <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse" style={{marginBottom:'2rem'}}>
        <img class="w-10 h-10 rounded-full" src={image} alt="profile picture"/>
        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700 ">
            <cite class="pe-3 font-medium text-blue-100 dark:text-white">{name}</cite>
            <cite class="ps-3 text-sm text-gray-200 dark:text-gray-400">{title}</cite>
        </div>
    </figcaption>
    <div class="flex items-center mb-4 text-yellow-300">
      {items}
    </div>
</button>


</div>

</div>


 )
}
export default Reviews