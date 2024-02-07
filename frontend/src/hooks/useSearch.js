import {SearchContext} from '../context/searchContext'
import { useContext } from 'react'


export const useSearchContext=()=>{
    const context=useContext(SearchContext)
    if(!context){
        throw Error('useSearchContext must be used inside an PropertiesContextProvider')
    }
    return context
}