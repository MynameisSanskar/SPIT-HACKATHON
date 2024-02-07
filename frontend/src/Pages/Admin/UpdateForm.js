import react, { useEffect } from "react"
import { useState } from "react"
import Image from '../../components/Image'
import '../../CSS/Formstyle.css'
import {json, useParams} from 'react-router-dom';
function PropertyForm(){

    const[name,setName]=useState('')
    const[img,setImg]=useState('')
    const[location,setLocation]=useState('')
    const[area,setArea]=useState('')
    const[star,setStar]=useState('')
    const[tags,setTags]=useState('')
    const[price,setPrice]=useState(0)
    const [desc,setDesc]=useState('')
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true);
    const [details,setDetails]=useState({});
    const [uploadedImages, setUploadedImages] = useState([]);
    const {id}=useParams()


    const handleImageUpload = (newImages) => {
        setUploadedImages(newImages);
      };

    useEffect(() => {
    
        const fetchData = async () => {
          
          try {
            console.log(id);
            const response = await fetch(`http://localhost:3001/${id}`);
            const json = await response.json();
            
            if (response.ok) {
              //   dispatch({ type: 'SET_PROPERTY', payload: json });
              console.log(json);
              setDetails(json);
              setName(json.name);
              setImg(json.img);
              setLocation(json.location);
              setStar(json.star);
              setArea(json.area);
              setTags(json.tag.toString());
            
              setDesc(json.description);
              setPrice(json.price);
              setLoading(false);
            
            }
          } catch (error) {
            console.error('Error while fetching data:', error);
          }
        };
        console.log("Details :", json);
        fetchData();
      }, []);
      // console.log(details.img.img1);
      // const { img: { img1, img2, img3, img4, img5 } } = details;
      
      
      if(loading){
        return(<h1>Loading....</h1>)
      }
    const handleClick=async(e)=>{

        e.preventDefault()
      console.log(desc);
        let tag=tags.split(',');
        const card = { name, location, area, star, tag, price, desc,img:{img1:uploadedImages[0],img2:uploadedImages[1],img3:uploadedImages[2],img4:uploadedImages[3], img5:uploadedImages[4]}};
        const response=await fetch(`http://localhost:3001/${id}`,{
            method:'PATCH',
            body:JSON.stringify(card),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json =await response.json()
        if(!response.ok){
    setError(json.error)
        }
        if(response.ok){
            setError(null)
         
            console.log('new property added',json);
        }
    }
    
    
    
    
        return (
            <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                <form action="#">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <input onChange={(e)=>{setLocation(e.target.value)}} value={location} type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                        </div>
                        <div class="w-full">
                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Tags</label>
                        <input onChange={(e)=>{setTags(e.target.value)}} value={tags} type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product Tags" required=""/>
                    </div>
                        <div class="w-full">
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input onChange={(e)=>{setPrice(e.target.value)}} value={price} type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              
                                
                             
                                value={star}
                                onChange={(e) => setStar(e.target.value)}
                                
                                >
                                <option value="1">*</option>
                                <option value="2">**</option>
                                <option value="3">***</option>
                                <option value="4">****</option>
                                <option value="5">*****</option>
                                </select>
    
                            
                        </div>
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
                            <input onChange={(e)=>{setArea(e.target.value)}} value={area} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type area" required=""/>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea  onChange={(e)=>{setDesc(e.target.value)}} value={desc} id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>
                    </div>
                    
                    <Image onImageUpload={handleImageUpload}  img={img} />
      
                  <button onClick={handleClick} type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-blue bg-slate-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Add product
        </button>
                </form>
                
            </div>
          </section>
          )
    
    }
    export default PropertyForm