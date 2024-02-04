import React from 'react'
import { usePropetiesContext } from '../hooks/usePropertyContext';
import { useEffect, useState } from 'react';
import Card from './Card'


function DeleteAdmin() {
    const {property,dispatch}=usePropetiesContext()
    const Deleteproperty=async(id)=>{
      try {
          const response = await fetch(`http://localhost:3001/${id}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              }
          });
      
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const responseData = await response.json();
          console.log('Server response:', responseData);
      } catch (error) {
          console.error('Error:', error.message);
      }
  //  alert("Succesfully")
   }



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
   Deleteproperty()
  },[]);



  return (
    <div class="flex flex-row flex-wrap  items-start justify-start">
    
    
    {property && property.map((user) => {
            return (
              <div onClick={()=>{Deleteproperty(user._id)}}>
             
              <Card
               
                key={user._id}
                name={user.name}
                location={user.location}
                img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mqKsr4Mlz-ozDfwieaDz-HHT3kuGT1Mow&usqp=CAU"}
                area={user.area}
                tag={user.tag}
                star={user.star}
                price={user.price}
                button="Delete"

              />
           
              
              </div>
              
            );
          })}
        
         
    </div>
  )
}

export default DeleteAdmin