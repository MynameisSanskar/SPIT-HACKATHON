import house from "../asssets/list-icon.png"
import map from "../asssets/maps-icon.png"
import finance from "../asssets/finance-icon.png"
import chat from "../asssets/chat-icon.png"
import filter from "../asssets/filter-icon.png"
import account from "../asssets/account-icon.png"

function Features() {
  return (
    <section class=" bg-blue-300 dark:bg-gray-900 my-10">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
      <div class="max-w-screen-md mb-8 :mb-16" style={{marginBottom:'2rem'}}>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Features that we offer</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Discover the unparalleled convenience of our platform with features crafted for landlords and tenants alike. From hassle-free listings to transparent communication, our offerings redefine the standards in property management</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
          <div className="bg-white  border-2  rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl hover:bg-gray-300 dark:hover:bg-gray-600 hover:to-blue-800 transition duration-300 ease-in-out" style={{  padding: '20px' }}>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={house}/>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white">Propety Listing</h3>
              <p class="text-gray-500 dark:text-gray-400">Provide comprehensive details about each property, including images, specifications, and amenities, allowing users to make informed decisions.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl  hover:bg-gray-300 dark:hover:bg-gray-600  transition duration-300 ease-in-out" style={{ padding: '20px' }}>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={map}/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Interactive Maps</h3>
              <p class="text-gray-500 dark:text-gray-400">Integrate maps to help users visualize the property's location, nearby amenities, and neighborhood details, enhancing their understanding of the property's surroundings</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl  hover:bg-gray-300 dark:hover:bg-gray-600  transition duration-300 ease-in-out" style={{ padding: '20px' }}>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={account}/>                   
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Accounts and Profiles</h3>
              <p class="text-gray-500 dark:text-gray-400">Offer user accounts for both landlords and tenants, allowing them to manage property listings, save favorites, track inquiries, and maintain a personalized profile.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl   hover:bg-gray-300 dark:hover:bg-gray-600  transition duration-300 ease-in-out" style={{ padding: '20px' }}>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={finance}/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Finance</h3>
              <p class="text-gray-500 dark:text-gray-400">Under Budget properties of users liking in quick easy steps.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl  hover:bg-gray-300 dark:hover:bg-gray-600  transition duration-300 ease-in-out" style={{ padding: '20px' }}>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={chat}/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Communication Tools</h3>
              <p class="text-gray-500 dark:text-gray-400">Provide messaging or inquiry features to facilitate communication between landlords and potential tenants, creating a seamless platform for property transactions.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-2xl  hover:bg-gray-300 dark:hover:bg-gray-600  transition duration-300 ease-in-out" style={{ padding: '20px' }}>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img src={filter}/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white"> Filters and Advanced Search Options</h3>
              <p class="text-gray-500 dark:text-gray-400">nable users to refine their property search based on specific criteria such as location, price range, property type, and more, facilitating a tailored search experience.</p>
          </div>
      </div>
  </div>
</section>
  )
}
export default Features