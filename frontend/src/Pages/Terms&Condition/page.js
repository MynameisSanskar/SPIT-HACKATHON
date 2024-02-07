import img from "../../asssets/t&c.avif"
export default function Terms(){
    return(
    //     <div>
    // <div class=" w-fitbg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{margin:'45px',width:'70%'}}>
    <div className="flex" style={{backgroundImage:`url(${img})`, justifyContent:'center',backgroundSize:'cover'}}>
             

<div class=" w-full max-w-screen-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginTop:'40px', marginBottom:'40px'}}>
    
    <div class="flex flex-col items-center " style={{justifyContent:'center'}}>
        <h1 class="font-bold  text-center  text-3xl " style={{padding:'30px'}} >Terms & Condition</h1>
        <ul className="list-none">
        <li>
            <h2 class="mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">Acceptance of Terms</h2>
            <p class="mb-2 text-center font-normal text-gray-700 dark:text-gray-400">By accessing and using this website, you agree to comply with and be bound by these terms and conditions. If you do not agree, please refrain from using the website.
</p>
        </li>
        
        <li>
            <h2 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Accuracy of Information:</h2>
            <p class="mb-2 text-center font-normal text-gray-700 dark:text-gray-400">While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, accuracy, or reliability of any content on the website. Users are encouraged to verify information independently.
</p>
        </li>
        <li>
            <h2 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Property Listings:</h2>
            <p class="mb-2 text-center font-normal text-gray-700 dark:text-gray-400">Property listings on the website are subject to change without notice. We do not guarantee the availability, pricing, or features of any listed property. Users should contact the respective real estate agents or sellers for the most current information.
</p>
        </li>
        <li>
            <h2 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">User Conduct:</h2>
            <p class="mb-2 text-center font-normal text-gray-700 dark:text-gray-400">Users agree to use the website for lawful purposes only and in a manner consistent with applicable laws and regulations. Any use that disrupts, damages, or impairs the website's functionality is strictly prohibited.
</p>
        </li>
        <li>
            <h2 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Privacy Policy:</h2>
            <p class="mb-2 pb-6 text-center font-normal text-gray-700 dark:text-gray-400">Our Privacy Policy outlines how we collect, use, and protect user information. By using the website, you consent to the terms of our Privacy Policy.

</p>
        </li>
        </ul>
    </div>
    </div>
    </div>
    )
}