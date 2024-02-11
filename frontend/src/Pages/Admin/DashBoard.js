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
                img={"https://images.unsplash.com/photo-1536266305399-b367feb671f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
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