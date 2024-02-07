import pic from "../asssets/concept-house-searching-landing-page_52683-25530__1_-removebg-preview.png"
function Rent(){
    return(
    <div class=" w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{margin:'25px'}}>
    <section class="bg-white dark:bg-gray-900" >
    <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={pic} alt="mockup" style={{width:'500px', height:'400px'}}/>
        </div>                
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Landlord Tenant interface</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">our website establishes a seamless and transparent communication channel between property owners and tenants. This user-friendly feature streamlines rent payments, facilitates maintenance requests, and ensures efficient collaboration, enhancing the overall rental experience.</p>
          
           
        </div>
    </div>
</section>
</div>
    )
}
export default Rent;