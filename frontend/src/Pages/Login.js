import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

import Loginlottie from "../lotties/Loginlottie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    
  };

  return (
    <div className="flex items-center justify-center " style={{backgroundImage:"url('https://img.freepik.com/premium-photo/high-angle-view-toy-against-blue-sky_1048944-25355017.jpg?size=626&ext=jpg&ga=GA1.1.1255800410.1704448219&semt=ais')",backgroundSize:'cover'}}>
    <div className="w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ margin: '45px',width:'70%' }}>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col-reverse lg:flex-row max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0" style={{margin:50}}>
          <div className="lg:flex lg:mt-0">
            
            <Loginlottie/>
          </div>
          <div className="lg:col-span-7 mr-auto place-self-center" style={{width:'30%', margin:60}}>
              <h2 class=" mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" style={{marginBottom:40}}>Login</h2>
            <form className="mx-auto"
            onSubmit={handleSubmit}
            >
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                     onChange={(e) => setEmail(e.target.value)}
              value={email}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                    onChange={(e) => setPassword(e.target.value)}
              value={password}
                />
              </div>
              <div style={{marginBottom:10}}>
                <a href="/signup" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
    New Member?- Signup
    <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    </a>
    
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // disabled={isLoading}
              >
                Login in
              </button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Login;
