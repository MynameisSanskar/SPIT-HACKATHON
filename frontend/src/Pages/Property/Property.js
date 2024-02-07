import React from "react";

import '../../CSS/index.css';
import axios from 'axios';
import Card from '../../components/Card'
import Video from '../../components/List';
import Chart from '../../components/Charts'
import Gallery from '../../components/Airedirect'
import Navbar from '../../components/Navbar';
import Map from '../../components/Map'
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import ChatBot from "../../components/chatbot";
// import ProductDetail from './Productdetail';
// import PropertyForm from '../../components/PropertyForm'
import { usePropetiesContext } from '../../hooks/usePropertyContext';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../hooks/useSearch";

function Property(){
    const {property,dispatch}=usePropetiesContext()
    const [users, setUsers] = useState([]);
    const [button1,setButton]=useState(true)  
    const [button2,setButton2]=useState(true)  
    const [button3,setButton3]=useState(false)  
    const [result,setResult]=useState()
    const {SearchData,searchdispatch}=useSearchContext();
    
    const navigate=useNavigate()
  // for getting more details of property enlarged card
    const handleCard=async(id)=>{
    //   alert(id);
    //   try {
    //     const response =await fetch(`http://localhost:3001/${id}`)
    //     const json =await response.json()
    //     if(response.ok)
    //     { 
           
    //       dispatch({type:'SET_PROPERTY',payload:json})
  
    //     } 
    //   } catch (error) {
    //     console.log("Error while getting Card by Id",error);
    //   }
      navigate(`/properties/${id}`)
    };
  
  
  
    // useEffect(() => {
  
    //   const fetchUsers = async () => {
    //     try {
          
    //       const response = await fetch("http://localhost:3001");
    //       const json = await response.json();
    //       if (response.ok) {
    //         console.log(property);
    //         setUsers(json)
    //         dispatch({type:'SET_PROPERTIES',payload:json}) // Assuming the 'data' key holds the user information
    //       }
    //     } catch (error) {
    //       console.error("Error fetching users:", error);
    //     }
    //   };
   
    //   handlebutton1()
    //   handlebutton2()
    //   handlebutton3()
    //  fetchUsers()
   
    // }, []);
  
  // const handleButtonClick = async () => {
  //     console.log('Button clicked');
  //   try {
  //     await axios.post('http://localhost:3000/');
  //     console.log('Button click sent to the backend');
  //   } catch (error) {
  //     console.error('Error sending button click to the backend:', error);
  //   }
  // };
  const handlebutton1=()=>{
    setButton(!button1)
  }
  const handlebutton2=()=>{
    setButton2(!button2)
  }
  const handlebutton3=()=>{
    setButton3(!button3)
  }
return(



    <>
    
 
    <div className="App">
    
    
  
    
    <Search  />
    
    
    <div class="flex">
    <div class="flex flex-row flex-wrap w-3/4 items-start justify-start">
        {property && property.map((user) => {
            return (
              <div onClick={()=>handleCard(user._id)}>
             
              <Card
               button={"Contact"}
               key={user._id}
                name={user.name}
                location={user.location}
                img={user.img.img1}
                area={user.area}
                tag={user.tag}
                star={user.star}
                price={user.price}
                               
              />
              </div>
            );
          })}
    
    {/* {property && property.map((user) => {
            return (
              <div onClick={()=>handleCard(user._id)}>
             
              <Card
               button={"Contact"}
               key={user._id}
                name={user.name}
                location={user.location}
                img={user.img.img1}
                area={user.area}
                tag={user.tag}
                star={user.star}
                price={user.price}
                               
              />
              </div>
            );
          })} */}
        
         
    </div>  
    
    <div class="flex drop-shadow-slate-50 hover:opacity-100 w-1/4 flex-col pr-4">
    
    
    
    
     
    
     
      <div  id="map" class="flex justify-end items-start mt-4  shadow-xl rounded-xl overflow-hidden">
    <Map/>
      </div>
      
    
    
      <div id="video" class="flex justify-end items-start mt-8 h-100 shadow-xl overflow-hidden ">
      <Video/>
    </div>
    <div id="chart" class=" mt-6 shadow-xl flex justify-end items-center overflow-hidden">
      <Chart/>
    </div>
    <div id="gallery" class=" mt-5 shadow-xl md-2 flex justify-end items-center overflow-hidden">
    <ChatBot/>
    </div>
    
    
    
    
    </div>
    </div>
    
    
    
    <div class="mt-3">
 
    </div>
    
    
    
    </div>
    
    
    </>

)



}

export default Property 