import React, { useEffect, useState } from 'react'
import "./login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function getInput(e) {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    async function Log(e) {
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:8082/api/v1/admin/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            res = await res.json()
            if (res.status) {
                localStorage.setItem('user', res.data.token)
                navigate("/payment")
            } else {
                toast(res?.msg, {
                    type: "error",
                    position: "top-center",
                    autoClose: 2000
                })
            }
        } catch (e) {
            toast(e.message, {
                type: "error",
                position: "top-center",
                autoClose: 2000
            })
        }

    }

    console.log(user);
    useEffect(() => {
        localStorage.removeItem('user')
    }, [])
    return (
    <>
   <div class="wrapper">
         <div class="title">
            Login Form
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required/>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required/>
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
               </div>
               <div class="pass-link">
                  <a href="#">Forgot password?</a>
               </div>
            </div>
            <div class="field">
               <input type="submit" value="Login"/>
            </div>
            <div class="signup-link">
               Not a member? <a href="#">Signup now</a>
            </div>
         </form>
      </div>
      <ToastContainer />
        </>
    )
}

export default LoginPage