import loc from "../../asssets/location.png";
import call from "../../asssets/callus.png";
import email from "../../asssets/emial.png";
import ContactLottie from "../../lotties/contactus.js";
function Contact() {
  return (
    <>
      <div
        class=" w-fitbg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ margin: "25px" }}
      >
        <section
          class="bg-white dark:bg-gray-900"
          style={{ backgroundColor: "aliceblue" }}
        >
          <h1
            class="font-extrabold text-4xl text-center p-5"
            style={{ margin: "5px" }}
          >
            Contact Us
          </h1>
          <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div
              class="mr-auto place-self-center lg:col-span-7"
              style={{ width: "500px", marginLeft: "60px" }}
            >
              <form class="max-w-sm mx-auto" style={{ marginBottom: "20px" }}>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    for="large-input"
                    class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex">
              <ContactLottie />
            </div>
          </div>
        </section>
      </div>

      <div
        class=" w-fitbg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ margin: "25px" }}
      >
        <section
          class="bg-white dark:bg-gray-900"
          style={{ backgroundColor: "aliceblue" }}
        >
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center  lg:px-6">
            <div
              class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
              style={{ paddingTop: "5px" }}
            >
              <div class="text-center text-gray-500 dark:text-gray-400">
                <img
                  class="mx-auto mb-4 rounded-full"
                  src={loc}
                  alt="Location"
                  style={{ width: "6rem", height: "6rem" }}
                />
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Location</a>
                </h3>
                <p>Veermata Jijabai Technological Institute,</p>
                <p>Matunga-East,</p>
                <p>Mumbai-400064</p>
              </div>
              <div class="text-center text-gray-500 dark:text-gray-400">
                <img
                  class="mx-auto mb-4  rounded-full"
                  src={call}
                  alt="Bonnie Avatar"
                  style={{ width: "6rem", height: "6rem" }}
                />
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Call Us</a>
                </h3>
                <p>+91 9820797452</p>
                <p>+91 8473964926</p>
              </div>
              <div class="text-center text-gray-500 dark:text-gray-400">
                <img
                  class="mx-auto mb-4 rounded-full"
                  src={email}
                  alt="Bonnie Avatar"
                  style={{ width: "6rem", height: "6rem" }}
                />
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Email</a>
                </h3>
                <p>xyz124@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Contact;
