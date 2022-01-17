import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
    const [form, setForm] = useState({});
    const { handleToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const setToken = () => {
        handleToken("adsas");
        navigate("/dashboard");
    }

    return <div>
        <div>
        <input name='email' onChange={handleChange} type='text' placeholder='Enter Email' 
        style={{width: "300px", margin: " 10px auto", border: "2px solid black", fontSize: "15px", padding: "4px"}}/>
        </div>
        <div>
        <input name='password' onChange={handleChange} type='text' placeholder='Enter Password' 
        style={{width: "300px", margin: " 10px auto", border: "2px solid black", fontSize: "15px", padding: "4px"}}/>
        </div>
        <button onClick={setToken}
        style={{width: "100px", margin: " 10px auto", border: "2px solid black", fontSize: "20px", padding: "2px"}}>Sign In</button>
    </div>
}
