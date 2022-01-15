import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div style={{border: "2px solid black", margin: "auto", 
        width: "80%", marginBottom: "4px", padding: "10px", textAlign: "center",
        backgroundColor: "red"}} >
            <Link to="/" style={{margin:'10px'}}>Home</Link>
            <Link to="/products" style={{margin:'10px'}}>Products</Link>
        </div>
    )
};