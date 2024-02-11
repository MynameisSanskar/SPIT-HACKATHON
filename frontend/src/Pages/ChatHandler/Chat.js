import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "../../components/Message/Message.js";
import { useState } from "react";
import Conversation from "../../components/Conversation/Conversations.js";

export default function ChatBot() {
  // const [isVisible,setIsVisible]=useState(false)
  // console.log("chatbot rendered")
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/4 bg-gray-200">
        {/* Conversation takes up 1/4 of the screen */}
        <Conversation />
      </div>
      <div className="w-3/4 flex flex-col" style={{borderLeft:'3px solid'}}>
        {/* Message div takes up 3/4 of the screen */}
        <div className="flex  " style={{ backgroundColor: 'black'}}>
          <img style={{ width: 75, height: 75, padding: 10 }} src="https://cdn-icons-png.freepik.com/256/4712/4712235.png?ga=GA1.1.1255800410.1704448219&semt=ais" />
          <div style={{ marginLeft: 15, marginTop: 5, marginBottom: 5 }}>
            <h1 className=" font-semibold size-12 text-white" style={{ fontSize: 'xx-large' }}>TextBot</h1>
            <h2 style={{ color: '#22ea0f' }}>Online</h2>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto" style={{backgroundImage:"url('https://img.freepik.com/free-vector/memphis-style-black-gold-dots-pattern-background_1017-27576.jpg?size=626&ext=jpg&ga=GA1.1.1255800410.1704448219&semt=ais')",backgroundSize:'cover',backgroundPosition:'center',backgroundBlendMode:'lighten'}}>
          <Message />
          <Message own={true} />
          <Message />
        </div>
        <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
          <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <FontAwesomeIcon icon={faPaperPlane} />
            <span class="sr-only">Send message</span>
          </button>
        </div>
      </div>
    </div>
  );
}
