import pic1 from "../../asssets/features1.avif"
import pic2 from "../../asssets/features2.avif"
import pic3 from "../../asssets/features3.avif"

function Services(){

    return(
        <div className=" text-center" style={{backgroundImage:"url('https://img.freepik.com/free-vector/abstract-blue-watercolor-decorative-background-design_1055-13405.jpg?size=626&ext=jpg&ga=GA1.1.1255800410.1704448219&semt=ais')" ,backgroundSize: 'cover'
}}>         <div style={{padding:'40px'}}>
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Key Features</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
          </div>

            <div class="grid gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3" style={{marginRight:'30px', marginLeft:'30px',gap:'3rem', marginTop:'15px'}}>


              <div class="max-w-sm bg-white border border-red-600  shadow dark:bg-gray-800 dark:border-gray-700" style={{borderWidth:'4px'}}>
                  <a href="#">
                  <img class="rounded-t-lg" src={pic1} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology               acquisitions of 2021 so far, in reverse chronological order.</p>
                   </div>
              </div>
              <div class="max-w-sm bg-white border border-blue-600  shadow dark:bg-gray-800  " style={{borderWidth:'4px'}}>
                  <a href="#">
                  <img class="rounded-t-lg" src={pic2} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology               acquisitions of 2021 so far, in reverse chronological order.</p>
                   </div>
              </div>
              <div class="max-w-sm bg-white border border-yellow-300 shadow dark:bg-gray-800 dark:border-yellow-400" style={{borderWidth:'4px'}}>
                  <a href="#">
                  <img class="rounded-t-lg" src={pic3} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology               acquisitions of 2021 so far, in reverse chronological order.</p>
                   </div>
              </div>

            </div>

            <div>
                <div style={{padding:'40px', alignContent:"center"}}>
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Other Services</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
          </div>
          <div className="flex justify-center items-center" style={{marginBottom:'25px', marginRight:'300px'}}>
          <section class=" bg-yellow-100 border  rounded-lg  shadow dark:bg-gray-800  " style={{width:'900px',borderColor:'black', borderWidth:'2px'}}>
    <div class=" flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 ">
        <div class=" place-self-center" style={{marginRight:'30px'}}>
            <h1 class="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            
        </div>
        <div class=" lg:mt-0 ">
            <img src="https://cdn-icons-png.flaticon.com/128/6676/6676612.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="mockup"/>
        </div>                
    </div>
</section>
</div>
          <div className="flex justify-center items-center" style={{marginBottom:'25px', marginLeft:'300px'}}>
          <section class=" bg-red-200 border border-blue-600 rounded-lg  shadow dark:bg-gray-800  " style={{width:'900px',borderColor:'black', borderWidth:'2px'}}>
    <div class=" flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 ">
        <div class=" place-self-center" style={{marginRight:'30px'}}>
            <h1 class="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            
        </div>
        <div class=" lg:mt-0 ">
            <img src="https://cdn-icons-png.flaticon.com/128/1040/1040988.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="mockup"/>
        </div>                
    </div>
</section>
</div>
          <div className="flex justify-center items-center" style={{marginBottom:'25px', marginRight:'300px'}}>
          <section class=" bg-green-200 border border-blue-600 rounded-lg  shadow dark:bg-gray-800  " style={{width:'900px',borderColor:'black', borderWidth:'2px'}}>
    <div class=" flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 ">
        <div class=" place-self-center" style={{marginRight:'30px'}}>
            <h1 class="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            
        </div>
        <div class=" lg:mt-0 ">
            <img src="https://cdn-icons-png.flaticon.com/128/1725/1725397.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="mockup"/>
        </div>                
    </div>
</section>
</div>
          <div className="flex justify-center items-center" style={{marginBottom:'25px', marginLeft:'300px'}}>
          <section class=" bg-purple-300 dark:bg-amber-300 border  rounded-lg  shadow  " style={{width:'900px', borderColor:'black', borderWidth:'2px'}}>
    <div class=" flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 ">
        <div class=" place-self-center" style={{marginRight:'30px'}}>
            <h1 class="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            
        </div>
        <div class=" lg:mt-0 ">
            <img src="https://cdn-icons-png.flaticon.com/128/3751/3751966.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="mockup"/>
        </div>                
    </div>
</section>
</div>
          <div className="flex justify-center items-center" style={{paddingBottom:'45px', marginRight:'300px'}}>
          <section class=" bg-pink-300 border border-blue-600 rounded-lg  shadow dark:bg-gray-800  " style={{width:'900px',borderColor:'black', borderWidth:'2px'}}>
    <div class=" flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 ">
        <div class=" place-self-center" style={{marginRight:'30px'}}>
            <h1 class="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            
        </div>
        <div class=" lg:mt-0 ">
            <img src="https://cdn-icons-png.flaticon.com/128/3523/3523278.png?ga=GA1.1.1255800410.1704448219&semt=ais" alt="mockup"/>
        </div>                
    </div>
</section>
</div>
            </div>

        </div>
    )
}
export default Services