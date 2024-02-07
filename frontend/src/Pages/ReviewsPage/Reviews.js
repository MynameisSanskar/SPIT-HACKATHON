import { useState } from 'react'
import data from '../ReviewsPage/data.js'
function Reviews(){
  
    const [hoveredIndex,setHoveredIndex]=useState(null)
    
    return(
       <section class="bg-white dark:bg-gray-900" style={{backgroundImage:"url('https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?w=1480&t=st=1704698522~exp=1704699122~hmac=480734032febe7ca8d2264f967847ac8af43ea9acdc2af84b06f3916c507a8e5')"}}>
  <div class=" px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6" style={{paddingTop:'3rem', paddingBottom:'3rem'}}>
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Reviews</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    
    {data.map((data,index) => (
        
                
  <div
  key={index}
  onMouseOver={() => setHoveredIndex(index)}
  onMouseOut={() => setHoveredIndex(null)}
  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400 overflow-hidden"
  style={{
    padding: '2rem',
    height: hoveredIndex === index ? 'auto' : '300px',
    transition: 'height 0.3s ease',
  }}
>
    <>
      <img
        class="mx-auto mb-4 w-36 h-36 rounded-full"
        src={data.image}
        alt="Bonnie Avatar"
      />
      <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#" style={{ textTransform: 'capitalize' }}>{data.name}</a>
      </h3>
      <p style={{ textTransform: 'capitalize', paddingBottom:'5px' }}>{data.title}</p>
    </>
    {hoveredIndex === index && (
    <>
      <p style={{ textTransform: 'capitalize' }}>{data.quote}</p>
      <figure className="max-w-screen-md justify-center" style={{ margin: '45px' }}>
        <div className="flex items-center mb-4 text-yellow-300" style={{ justifyContent: 'center' }}>
          {Array.from({ length: data.stars }).map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
      </figure>
    </>
  )}
  </div>
))}

             </div>
             

    </div>
        </section>
    )
}

export default Reviews
