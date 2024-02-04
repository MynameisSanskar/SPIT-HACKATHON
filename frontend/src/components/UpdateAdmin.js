import React from 'react'
import { usePropetiesContext } from '../hooks/usePropertyContext';
import { useEffect, useState } from 'react';
import Card from './Card'
import { useNavigate } from "react-router-dom";

function UpdateAdmin() {
 
  const {property,dispatch}=usePropetiesContext()

 

  useEffect(() => {
  
    const fetchUsers = async () => {
      try {
        
        const response = await fetch("http://localhost:3001");
        const json = await response.json();
        if (response.ok) {
          console.log(property);
          
          dispatch({type:'SET_PROPERTIES',payload:json}) // Assuming the 'data' key holds the user information
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      
    };
    fetchUsers()
  
  },[]);

  const navigate=useNavigate()
const handleCard=async(id)=>{
 navigate(`./updateForm/${id}`)
}

  return (




    <div class="flex flex-row flex-wrap  items-start justify-start">
    
    
    {property && property.map((user) => {
            return (
              <div onClick={()=>handleCard(user._id)}>
             
              <Card
               button={"Contact"}
               key={user._id}
                name={user.name}
                location={user.location}
                img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mqKsr4Mlz-ozDfwieaDz-HHT3kuGT1Mow&usqp=CAU"}
                area={user.area}
                tag={user.tag}
                star={user.star}
                price={user.price}
               
              />
              </div>
            );
          })}
        
         
    </div>  
  )
}

export default UpdateAdmin