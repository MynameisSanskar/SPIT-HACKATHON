import { useState } from "react";
import bg from "../asssets/reminderposttit.png";
import ReminderLottie from '../lotties/reminder.js'
const schedule=require('node-schedule')
// const mongoose=require('mongoose')





export default function Reminder(){
    // const dbURL='mongodb+srv://keshav:november2004@cluster0.po8iolt.mongodb.net/node-tuts?retryWrites=true&w=majority'
    // mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})

    const [isVisible,setIsVisible]= useState(false)

    schedule.scheduleJob('m-job','*/10 * * * * *',()=>{
    // console.log('hi i am running')
    // setIsVisible(true)
})
    return (
      <div
        className="flex items-center justify-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjItbWluZC0xNl8xLmpwZw.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div class="grid grid-cols-3 gap-6 ">
            <div
              class="p-6"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center center",
                width: 370,
                height: 350,
              }}
            >
              <div style={{ marginTop: 65 }}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                  Monthly
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{ backgroundColor: "#0290d2" }}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <!-- Modal toggle --> */}
            <button
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{ margin: 35 }}
            >
              <svg
                class="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add Reminder
            </button>

            {/* <!-- Main modal --> */}
            <div
              id="crud-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Create New Reminder
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="crud-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <form class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-2">
                      <div class="col-span-2">
                        <label
                          for="name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Reminder
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type reminder"
                          required=""
                        />
                      </div>

                      <div class="col-span-2 sm:col-span-1">
                        <label
                          for="category"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Period
                        </label>
                        <select
                          id="category"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          <option selected="">Monthly</option>
                          <option value="TV">Annually</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{ marginTop: 15, marginBottom: 15 }}
                    >
                      <svg
                        class="me-1 -ms-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Add new Reminder
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isVisible && (
          <div
            id="popup-modal"
            tabindex="-1"
            class=" flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  onClick={() => {
                    setIsVisible(false);
                  }}
                  type="button"
                  class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                  <ReminderLottie />
                  <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Due: Rent
                  </h3>
                  {/* <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}