
import { createContext, useReducer } from "react";

export const PropertyContext=createContext()

export const propertyReducer=(state,action)=>{
        switch(action.type){
            case 'SET_PROPERTIES':
                return{
               
                    property:action.payload
                }
            case 'CREATE_PROPERTY':
                return{
                    property:[action.payload,...state.property]
                }
            case 'SET_PROPERTY':
                return{
                    property:action.payload
                }
            default:
                return state
        }
}


export const PropertyContextProvider=({children})=>{
const [state,dispatch]=useReducer(propertyReducer,{Property:null})



    return(
        <PropertyContext.Provider value={{...state,dispatch}}>
            {children}
       </PropertyContext.Provider>
    )
}