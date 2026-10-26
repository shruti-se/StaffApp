import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './header.css'
import { signinwithGoogle, createUserDoc, loginwithemailandpassword } from "./utils/firebase";
import MyProfile from "./MyProfile";
function Login() {

    const navigate = useNavigate();

    let [contact, setcontact] = useState({
        email: '',
        password: ''
    })


    const { email, password } = contact

    async function userlogin() {
        const { user } = await signinwithGoogle();
        console.log("inlogin", user)
        const r = createUserDoc(user)

        navigate('/MyProfile')

    }


    // async function loginuser() {

    //     try {
    //         const response = await loginwithemailandpassword(email, password)
    //         console.log(response)
    //     }
    //     catch (error) {
    //         console.log("error in login", error.message)
    //     }
    // }

    async function loginuser() {
        try {
            const response = await loginwithemailandpassword(email, password);

            console.log("Login successful:", response.user);

            navigate('/MyProfile');
        }
        catch (error) {
            console.log("Error in login:", error.code, error.message);
            alert(error.message);
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





    function handleChange(event) {

        const { name, value } = event.target


        setcontact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })



    }





    return (
        <div className="head">

            <Input
                name='email'
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
            <button
                onClick={loginuser}
                type='submit'>
                Login
            </button>
            <br></br>
            <br></br>
            <Button
                onClick={userlogin}
                type='submit'
                text='Continue with Google'
            />

            <br></br>
            <br></br>
            <Link to='/signup' style={{ color: 'white' }}>
                Signup
            </Link>
        </div>

    )

}
export default Login;