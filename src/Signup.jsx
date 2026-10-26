import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import './header.css'
import {signupwithemailandpassword,createUserDoc} from "./utils/firebase";

function Signup(){

let [contact, setcontact] =useState({
displayName:'',
 email:'',
 password:'',
 confirmPassword:''
})

const {displayName,email,password, confirmPassword} =contact

console.log(contact)

async function usersignup(){
if (password!== confirmPassword){
    alert("Passwords do not match")
return;}
try{
 const {user}=   await signupwithemailandpassword(email, password)
 console.log(user)
await createUserDoc(user, {displayName})
}
catch(error){
console.log("error in creating user", error.message)
}
}


    

// //... spread operator

// const a =['this','is','sit313']
// const b= [...a,'at','deakin']
// console.log(a)
// console.log(b)
// console.log(...a)

// //
//  const profile={
//    firstname:'abc',
//    uni:"chitkara"
//  }
//  const info={
//     ...profile,
//     city:'CHD'
//  }
// console.log(info)





function handleChange(event){

 const{name,value} = event.target
 console.log(name,value)
  
 setcontact((preValue)=>{
    return{
        ...preValue,
        [name] : value
    }
 })



}
    




return(
<div className="head">  
<Input  
name ='displayName'
type="text"
placeholder="name"
onChange={handleChange}
/>
<br></br>
<br></br>

<Input  
name ='email'
type="email"
placeholder="email"
onChange={handleChange}
/>
<br></br>
<br></br>
<Input  
name='password'
type="password"
placeholder="password"
onChange={handleChange}
/>
<br></br>
<br></br>
<Input  
name='confirmPassword'
type="password"
placeholder="confirm password"
value={contact.confirmPassword}
onChange={handleChange}
/>
<br></br>
<br></br>
<button 
onClick={usersignup}
type='submit'>
 SignUp
</button>

<br></br>
<br></br>
<Link to='/login' style={{color:'white'}}>
Login
</Link>
</div> 

)

}
export default Signup;