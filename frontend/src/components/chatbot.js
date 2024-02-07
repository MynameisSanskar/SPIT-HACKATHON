import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "./Message/Message";
import { useState } from "react";

export default function ChatBot(){
    const [isVisible,setIsVisible]=useState(false)
    console.log("chatbot rendered")
    return(
        <div className="fixed bottom-0 right-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
 style={{margin:'15px',width:'fit-content',backgroundColor:'aliceblue'}}>
           {!isVisible && <div className="flex"><img className="rounded-full" src="https://cdn-icons-png.freepik.com/256/8943/8943377.png?ga=GA1.1.1255800410.1704448219&semt=ais" style={{width:75,height:75,margin:10}}/>
            <button onClick={()=>{setIsVisible(true)}} className=" text-xl flex justify-items-center  rounded-xl" style={{backgroundColor:'#5094f5',border:'solid 2px black',margin:20,borderRadius:'1.5rem',padding:10}}>Start Chat</button></div>}
            <div>
            
        </div>
        {isVisible && <div>
        <div className="flex rounded-t-lg " style={{backgroundColor:'black',marginBottom:10}}>
            <img style={{width:75,height:75,padding:10}} src="https://cdn-icons-png.freepik.com/256/8943/8943377.png?ga=GA1.1.1255800410.1704448219&semt=ais" />
            <div style={{marginLeft:15,marginTop:5,marginBottom:5}}>
            <h1 className=" font-semibold size-12 text-white" style={{fontSize:'xx-large'}}>ChatBot</h1>
            <h2 style={{color:'#22ea0f'}}>Online</h2>
            </div>
            <button onClick={()=>{setIsVisible(false)}} type="button" class="ms-auto  justify-center items-center flex-shrink-0 text-gray-400 hover:text-white rounded-lg  p-1.5  inline-flex h-10 w-10 dark:text-gray-500 dark:hover:text-white" data-dismiss-target="#toast-message-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" style={{height:'1rem'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
        </div>
            <Message/>
            <Message own={true}/>
            <Message/>
            <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700" style={{marginTop:10}}>
                <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                </svg>
                <span class="sr-only">Send message</span>
                </button>
            </div>
            </div>}
        </div>
        
    )
    
}