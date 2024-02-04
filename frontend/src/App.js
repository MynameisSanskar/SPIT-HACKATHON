
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Property from './components/Property';
import ProductDetail from './components/Productdetail';
import PropertyForm from './components/PropertyForm';
import Admin from './components/Admin'
import Cards from './components/DashBoard';
import DeleteAdmin from './components/DeleteAdmin';
import UpdateAdmin from './components/UpdateAdmin';
import UpdateForm from './components/UpdateForm';
function App() {


  return(
    
<Routes>
<Route path='/properties'
 element={<Property/>}></Route>
 <Route path='/properties/:id' element={<ProductDetail/>}></Route>
<Route path="admin" element={<Admin/>}>


<Route path="Dashboard" element={<Cards/>}> </Route>
 <Route path="listproperty" element={<PropertyForm/>}></Route>
 <Route path="DeleteProperty" element={<DeleteAdmin/>}></Route>
 <Route path="update" element={<UpdateAdmin/>}></Route>
 <Route path="update/updateForm/:id" element={<UpdateForm/>}></Route>
 </Route>

 
 </Routes>

)

};




export default App;




