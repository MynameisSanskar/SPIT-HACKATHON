import { useState } from "react";

import "../../CSS/Login.css";
import axios from "axios";
import Loginlottie from "../../lotties/Loginlottie";
import { useNavigate } from "react-router-dom";


const Chatlogin = (props) => {
    const navigate = useNavigate();
  // let [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  // const [first_name, setFirstName] = useState();
  // const [last_name, setLastName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // username=username.split('@')


       let  username=email.split('@')
         username=username[0]
         
        //  setUsername(username);
         console.log(username,secret);
       
        axios
        .post("http://localhost:3001/chat/login", { username, secret })
        .then((r) => {
          console.log("working");
          props.onAuth({ ...r.data, secret }); // NOTE: over-ride secret
          navigate("/chatsPage",{state:{username, secret}});
          console.log("not working");
        })
        .catch((e) => console.log(JSON.stringify(e.response.data)));
      
  };


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const { login, error, isLoading } = useLogin();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await login(email, password);
    
  // };

  return (


    <div style={{display:"flex"}}>
      <Loginlottie />
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>

        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setSecret(e.target.value)}
          value={secret}
        />

        <button type="submit">Log in</button>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
  );
};

export default Chatlogin;
