import React from 'react'
import { usePropetiesContext } from '../../hooks/usePropertyContext';
import { useEffect, useState } from 'react';
import Card from '../../components/Card'

function DashBoard(){
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
     
      }, []);
    


return(
<div class="flex flex-row flex-wrap  items-start justify-start">
    
    
    {property && property.map((user) => {
            return (
              <div>
             
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
        
         
    </div>




)

}


export default DashBoard;