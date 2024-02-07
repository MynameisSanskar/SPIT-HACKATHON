import {PropertyContext} from '../context/PropertyContext'
import { useContext } from 'react'


export const usePropetiesContext=()=>{
    const context=useContext(PropertyContext)
    if(!context){
        throw Error('usePropertiesContext must be used inside an PropertiesContextProvider')
    }
    return context
}