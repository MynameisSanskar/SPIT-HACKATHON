
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { usePropetiesContext } from '../hooks/usePropertyContext';
import { useSearchContext } from '../hooks/useSearch';
// export default Search;
function Search(){
    // State to manage visibility
    const {SearchData,searchdispatch}=useSearchContext();
    const {property,dispatch}=usePropetiesContext()
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [result,setResult] = useState({});
  const [bhks,setbhk]=useState('')
  // const [searchData,setSearchData]=useState('');
  const navigate = useNavigate();
  console.log(SearchData)
  // const location = useLocation();
  // console.log(location.state);

// code for search related
const fetchData=async(value)=>{
  const response= await fetch("http://localhost:3001/")
  const json=await response.json();
   value=value.toString()
  const results=json.filter((user)=>{
    return (
      user &&
      user.name && (
        user.name.toLowerCase().includes(value) ||
        user.location.toLowerCase().includes(value) ||
        user.star.includes(value) ||
        user.area.toLowerCase().includes(value) ||
        user.tag.some(tag => tag.toLowerCase().includes(value)) ||
        (user.price && user.price.toString().includes(value))||
        user.bhk.toLowerCase()||user.bhk.includes(value)
        )
      )
      })
  
  console.log(property,"properrvrvrty");
  searchdispatch({type:'SET_SEARCH',payload:value})
  setResult(results);
  dispatch({type:'SET_PROPERTIES',payload:results})
  
}

const handleSubmit=(e)=>{
  e.preventDefault();
 
 

  navigate("/properties");

}

  // Function to toggle visibility
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleClick2 = () => {
    setIsVisible2(!isVisible2);
  };

      console.log('isVisible:', isVisible); // Check in the console if this log changes on click
  return(

<div style={{padding:'4rem 7rem 7rem 7rem'}}>
<form class="relative">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button onClick={handleClick} id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>

       {isVisible && <div id="dropdown" class="absolute left-0 z-20  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" style={{top:'62px'}}>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rental</a>
            </li>
            <li>
                <a  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PG</a>
            </li>
            <li>
                <a  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Studio</a>
            </li>
            
            </ul>
        </div>}
        <div class="relative w-full">
            <input type="search" id="search-dropdown"  class="block p-5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" onChange={(e)=>{fetchData(e.target.value)}} value={SearchData} required/>
            
            <Link to="/properties" type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-4 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg></Link>
        </div>



    </div>
<div class="flex">
<ul class="block md:flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:text-white" style={{padding:'5px'}}>
    <li class="w-25 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="horizontal-list-radio-license" type="radio" onChange={(e)=>{setbhk(e.target.value)}} value="1" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-license" class="w-20 py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" >1 BHK </label>
        </div>
    </li>
    <li class="w-25 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="horizontal-list-radio-id" type="radio" onChange={(e)=>{setbhk(e.target.value)}} value="2" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-id" class="w-20 py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">2 BHK</label>
        </div>
    </li>
    <li class="w-25 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="horizontal-list-radio-military" type="radio" onChange={(e)=>{setbhk(e.target.value)}} value="3" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="horizontal-list-radio-military" class="w-20 py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3 BHK</label>
        </div>
    </li>
    <li class="w-25 dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="horizontal-list-radio-passport" type="radio" onChange={(e)=>{setbhk(e.target.value)}} value="4" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="horizontal-list-radio-passport" class="w-20 py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">4+ BHK</label>
        </div>
    </li>
    <form class=" max-w-sm" style={{marginLeft:'2rem', marginRight:'2rem', width:'300px'}}>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Budget" required/>
</form>


<button onClick={handleClick2} id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-8" type="button">Dropdown checkbox <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

{/* <!-- Dropdown menu --> */}
{isVisible2 && <div id="dropdownBgHover" class=" absolute z-10 w-48 bg-white rounded-lg shadow dark:bg-gray-700">
    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Fully Furnished</label>
        </div>
      </li>
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Semi Furnished</label>
        </div>
      </li>
      
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-6" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Unfurnished</label>
        </div>
      </li>
    </ul>
</div>
}

</ul>


</div>
</form>
</div>
  )
}
export default Search
