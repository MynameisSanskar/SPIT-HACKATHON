
import { createContext, useReducer } from "react";
import Search from "../components/Search";

export const SearchContext =createContext()

export const SearchReducer=(state,action)=>{
        switch(action.type){
            case 'SET_SEARCH':
                return{
               
                   SearchData:action.payload
                }
          
            default:
                return state
        }
}


export const SearchContextProvider=({children})=>{
    const [state,searchdispatch]=useReducer(SearchReducer,{SearchData:''})



    return(
        <SearchContext.Provider value={{...state,searchdispatch}}>
            {children}
       </SearchContext.Provider>
    )
}