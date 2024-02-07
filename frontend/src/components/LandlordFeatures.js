import img from "../asssets/select-house-concept-illustration_114360-4437-removebg-preview.png"
import bg from "../asssets/abstract-bright-light-background_23-2148897536.avif"

function Landlord(){
    return(
    <div class=" w-fitbg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{margin:'25px'}}>
    <section class="bg-white dark:bg-gray-900" style={{backgroundImage:`url(${bg})`}}>
    <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Property Listing made easy</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Take the hassle out of property listing as a landlord; our intuitive tools make it easy to present your space attractively and connect with prospective tenants seamlessly.</p>
          
            <a href="/landlord" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Get Started
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={img} alt="mockup"/>
        </div>                
    </div>
</section>
</div>
    )
}
export default Landlord;