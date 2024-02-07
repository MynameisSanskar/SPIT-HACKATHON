import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { error } from "jquery";

const ChatsPage = () => {
  const {user}= useAuthContext();
  // const location = useLocation();

  // console.log(location.state);


console.log(user)
// console.log(user.email)
// console.log(user.token)
const {email,secret}=user;
console.log(email)
let  username=user.email.split('@')
    username=username[0]
  
  // let secret=user.secret;
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId="331fc169-7ad0-43aa-946d-9e37e9dc55c8"
        username={username} // adam
        secret={secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
     
  );
};

export default ChatsPage;
