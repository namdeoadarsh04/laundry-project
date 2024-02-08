import React, { useEffect, useState } from 'react'
import "./login.css"
import { ToastContainer,toast } from 'react-toastify';
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
        try{
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
        }else{
            toast(res?.msg,{
                type:"error",
                position:"top-center",
                autoClose:2000
            })
        }
    }catch(e){
        toast(e.message,{
            type:"error",
            position:"top-center",
            autoClose:2000
        })
    }

    }

    console.log(user);
    useEffect(() => {
        localStorage.removeItem('user')
    }, [])
    return (
        <>
            <form onSubmit={Log} >
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label htmlFor="uname">
                        <b>Username</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="email" onChange={getInput} required />
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={getInput}
                        required
                    />
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
                        Remember me
                    </label>
                </div>
                {/* <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn">
                        Cancel
                    </button>
                    <span className="psw">
                        Forgot <a href="#">password?</a>
                    </span>
                </div> */}
            </form>
            <ToastContainer />
        </>
    )
}

export default LoginPage