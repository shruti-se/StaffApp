
import { useState } from 'react';
import '../App.css';
import Cardlist from '../Cardlist';
import Header from '../Header';
import '../header.css'
import { Link, Outlet } from 'react-router-dom';

function Homepage(){
    
 let [searchTerm, setsearchterm] =useState('')
  function handlechange(event){
  setsearchterm(event.target.value)

  }
return(<div>
<div className='head'>
   <Header 
   heading = 'Staff List SIT313'
   />
   <input 
   type='text'
   placeholder='search the staff'
   onChange ={handlechange}
   />
   </div>

  <Cardlist 
  searchstaff= {searchTerm}
   />

</div>
)


}
export default Homepage;