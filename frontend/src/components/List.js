import React from "react";
const url = "https://youtu.be/SE7iJGXWxTI?si=DVrM9WIi5ZduBBW2";

function Video() {
  
  return (

<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 transition duration-300">
<div className="transition-transform duration-300 transform-gpu hover:scale-105">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Overview</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
       { new Date().toLocaleDateString()}
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://static.squareyards.com/diwidgets/sales-transactions.svg" alt="Neil image"></img>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Sales Transactions
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    114,965
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://static.squareyards.com/diwidgets/gross-value.svg" alt="Bonnie image" />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Gross Sales Value
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹ 139,100 Cr.
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://static.squareyards.com/diwidgets/avg-rate.svg" alt="Michael image" />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Current Rate/Sq.ft
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ₹ 21,436
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://static.squareyards.com/diwidgets/changes.svg" alt="Lana image" />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           Price Movement
                        </p>
                        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p> */}
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    +₹ 214

                    </div>
                </div>
            </li>
           
        </ul>
   </div>
   </div>
</div>
);
}

export default Video;
