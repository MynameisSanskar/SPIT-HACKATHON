import { useState } from "react";
import { BrowserRouter,Route,Routes,Router,Link,NavLink } from "react-router-dom";
import About from '../Pages/AboutUs/page.js';
import Home from '../Pages/Homepage/Home.js';
import Contact from "../Pages/ContactUs/contact";
import Reviews from "../Pages/ReviewsPage/Reviews.js";
import Services from "../Pages/Services/services";
import Profile from "../Pages/Profile/Profile";
import logo from "../asssets/logo.png"
import Terms from "../Pages/Terms&Condition/page.js";
import { useAuthContext } from "../hooks/useAuthContext.js";
import { type } from "@testing-library/user-event/dist/type/index.js";
import { useLogout } from "../hooks/useLogout.js";


export default function Navbar(){
  const [isVisible, setIsVisible] = useState(false);
  const { user, dispatch} = useAuthContext();
  // Function to toggle visibility
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

 const {logout} = useLogout();

      console.log('isVisible:', isVisible);
    return(
    
        <nav class="bg-white border-gray-200 dark:bg-gray-800 z-50">
  <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-12" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  {user  && <div className=" justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
      <button
        onClick={handleClick}
        type="button"
        className="relative text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded={isVisible}
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        style={{position:'relative'}}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          alt="user photo"
        />
      </button>
      {isVisible && (
        <div className="absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"   style={{ position: 'absolute', top: '100%', left: 0 }}
>
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">{user.username}</span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link to="profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Profile
              </Link>
            </li>
            
            <li>
              <Link to="/login" onClick={logout} class="block px-4 py-2 items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{margin:'8px'}}>
            Log out
             
        </Link>
            </li>
          </ul>
        </div>
      )}
      <button
        data-collapse-toggle="navbar-user"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-user"
        aria-expanded={isVisible}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>}
  {!user && <div className=" justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
      <button
        onClick={handleClick}
        type="button"
        className="relative text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded={isVisible}
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        style={{position:'relative'}}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          alt="user photo"
        />
      </button>
      {isVisible && (
        <div className="absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown"   style={{ position: 'absolute', top: '100%', left: 0 }}
>
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link to="login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Profile
              </Link>
            </li>
            
            <li>
              <Link to="/login" class="block px-4 py-2 items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{margin:'8px'}}>
            Log in/Sign in
             
        </Link>
            </li>
          </ul>
        </div>
      )}
      <button
        data-collapse-toggle="navbar-user"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-user"
        aria-expanded={isVisible}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>}
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/home" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" activeClassName="text-blue-500">Home</Link>
      </li>
      <li>
        <Link to="/properties" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" activeClassName="text-blue-500">Properties</Link>
      </li>
      <li>
        <Link to="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" activeClassName="text-blue-500">About</Link>
      </li>
      
      <li>
        <Link to="services" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link to="contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
      <li>
        <Link to="chat" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Chat</Link>
      </li>
    </ul>
  </div>
  </div>
  <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

</nav>
 
)
}