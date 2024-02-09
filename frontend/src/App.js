import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Home from "./Pages/Homepage/Home.js";
import About from "./Pages/AboutUs/page.js";
import Contact from "./Pages/ContactUs/contact.js";
import Reviews from "./Pages/ReviewsPage/Reviews.js";
import Services from "./Pages/Services/services.js";
import Profile from "./Pages/Profile/Profile.js";
import Terms from "./Pages/Terms&Condition/page.js";
import Login from "./Pages/Login.js";
import Page from "./Pages/page.js";
import Signup from "./Pages/Signup.js";
import { useAuthContext } from "./hooks/useAuthContext.js";
// import Admin from "./Pages/Adminpage.js";
import Chatmiddleware from "./Pages/ChatHandler/Chatmiddleware.js";
import { useEffect, useState } from "react";
import ChatsPage from "./Pages/ChatHandler/chatsPage.js";

import Property from './Pages/Property/Property.js';
import ProductDetail from './Pages/Property/Productdetail';
import PropertyForm from './Pages/Admin/PropertyForm';
import Admin from './Pages/Admin/Admin'
import Cards from './Pages/Admin/DashBoard';
import DeleteAdmin from './Pages/Admin/DeleteAdmin';
import UpdateAdmin from './Pages/Admin/UpdateAdmin';
import UpdateForm from './Pages/Admin/UpdateForm';
import Reminder from "./Pages/scheduler.js";

export default function App(){
  
  const [chatUser, setchatUser] = useState({});
  const { user } = useAuthContext();
  
console.log(user);



  return(
    
   <div  className="App">
  
    
      
      
      <BrowserRouter>
    
      <Routes>
       <Route path="/" element={<Page/>}>
        {(user && user.userType==="Admin")?(<Route index element={<Admin/>}/>):<Route index element={<Home/>}/>} 
       <Route path="reminder" element={<Reminder/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="reviews" element={<Reviews/>}/>
       <Route path="services" element={<Services/>}/>
       {user && <Route path="profile" element={<Profile/>}/>}
      
       {!user && <Route path="signup" element={<Signup  onAuth={(chatUser)=>{setchatUser(chatUser)}}/>}/>}
       <Route path="terms&condition" element={<Terms/>}/>
      
       <Route path='properties' element={<Property/>}></Route>
      <Route path='properties/:id' element={<ProductDetail/>}></Route>
     
      {/* {(user && user.userType==="Admin")&& <Route path="reminder" element={<Reminder/>}/>} */}

      {(user && user.userType==="Admin") &&
      <Route path='/' element={<Admin/>}>
      <Route path="Dashboard" element={<Cards/>}> </Route>
      <Route path="listproperty" element={<PropertyForm/>}></Route>
      <Route path="delete" element={<DeleteAdmin/>}></Route>
      <Route path="update" element={<UpdateAdmin/>}></Route>
      <Route path="update/updateForm/:id" element={<UpdateForm/>}></Route></Route>}

       </Route>
       
       {!user && <Route path="login" element={<Login/>}/>}
      
       {user && <Route path="chat" element={<Chatmiddleware chatUser={user} setchatUser={setchatUser}/>}/>}
       {user && <Route path="chatsPage" element={<ChatsPage />}/>}
    

      {/* <Route path="admin" element={<Admin/>}> */}


     
    
  
       
 

     
    </Routes>

    
    
    
    </BrowserRouter>
    
    </div>
    
      
   
    
      


    

  )
}