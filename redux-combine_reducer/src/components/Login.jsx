import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getToken } from '../Redux/Auth/action'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState({})
    const navigate = useNavigate()

    const {token} = useSelector((state) => state.AuthState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleLogin = () => {
        fetch("https://reqres.in/api/login", {
            method : "POST",
            body : JSON.stringify(form),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(res => res.json()).then(res => {
            dispatch(getToken(res.token))
            navigate("/")
        })
    }
    return (
        <div style={{marginTop: "100px"}}>
            <div style={{margin: "3px auto"}}>
                <input style={{width: "300px", fontSize: "16px", padding: "3px"}} type="text" placeholder='Enter Email' name='email' onChange={(e) => handleChange(e)}/></div>
           <div style={{margin: "3px auto"}}>
               <input style={{width: "300px", fontSize: "16px", padding: "3px"}} type="text" placeholder='Enter password' name='password' onChange={(e) => handleChange(e)}/></div>
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default Login