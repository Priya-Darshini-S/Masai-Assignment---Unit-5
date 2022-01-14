import React from "react";
import { AuthContext } from "../Context/Auth";

function Navbar() {
  const { isAuth, toggleAuth } = React.useContext(AuthContext);
  const [token, setToken] = React.useState(1);
  const [show, setShow] = React.useState(false);

  const [text, setText] = React.useState();
  
  const handelChange = (e) => {

    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handelSubmit = (e) => {
   
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(text),
    })
      .then((response) => response.json())
      .then((res) => {
        setToken(res.token);
        console.log('token:', token);
        console.log('body:', text);
        toggleAuth();
      });
  };
  

 
  return (
    <div>
      <button onClick={() => setShow(true)}>{isAuth}</button>
      {show === true ? (
        <form onSubmit={handelSubmit}>
          <div><input
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={handelChange}
          /></div>
         <div> <input
            name="password"
            placeholder="Enter password"
            type="text"
            onChange={handelChange}
          /></div>
          <div><input type="submit" /></div>
        </form>
      ) : null}
      {isAuth === "Logout" ? <div>Your login Token is {token}</div> : null}
     
    </div>
  );
}
export default Navbar;