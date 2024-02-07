import AuthPage from "./Chatlogin.js";
import ChatsPage from "./chatsPage";
import Signup from "../Signup.js";
import { useAuthContext } from "../../hooks/useAuthContext.js";
import { useEffect, useState } from "react";
import Login from "../Login.js";

function Chatmiddleware({ chatUser, setchatUser }) {
   

    if (!chatUser) {
        return <Login/>;
    } else {
        return <ChatsPage chatUser={chatUser} />;
    }
  
}

export default Chatmiddleware;
