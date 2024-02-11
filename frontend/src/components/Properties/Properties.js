import property from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from "react";

function Properties(){
    return(
      <div style={{backgroundImage:"url('https://img.freepik.com/free-vector/elegant-banner-with-mandala-design_1048-16238.jpg?size=626&ext=jpg&ga=GA1.1.1255800410.1704448219&semt=ais')",backgroundSize:'cover'}}>
        <div class="  flex justify-center p-10">
          <h2 class=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Products</h2>
          
      </div> 
      <div className="gridgap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid p-10">


<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300">
    <div class="flex justify-end px-4 pt-4">
        
        
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class=" mb-7 rounded-full shadow-lg object-cover object-center" src="https://plantlane.com/cdn/shop/files/1481_G_4_533x.png?v=1702102293" alt="Bonnie image" height={300} width={300}/>
        <h5 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">Clay Pots & Utensils</h5>
        
    </div>
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300">
    <div class="flex justify-end px-4 pt-4">
        
        
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class=" mb-7 rounded-full shadow-lg" src="https://im.whatshot.in/img/2023/Feb/vertical-1677142394.jpg" alt="Bonnie image" height={300} width={300}/>
        <h5 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">Toys & Sculptures</h5>
        
    </div>
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300">
    <div class="flex justify-end px-4 pt-4">
        
        
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class=" mb-7 rounded-full shadow-lg" src="https://www.itokri.com/cdn/shop/products/MG_8685_07ecc0b9-6ef3-41b4-8834-af99ad1cab0c.jpg?v=1654174795&width=400" alt="Bonnie image" height={300} width={300}/>
        <h5 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">Clothes</h5>
        
    </div>
</div>

      </div>
      </div>
    )
}
export default Properties