import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Loginpage } from "./LoginPage";

function AllRoutes() {
  return (
    <>
      <div style={{margin: "20px auto", background: "#757c88", padding: "20px"}}>
        <Link to={"/"} style={{ margin: "20px" }} style={{color: "black", textDecoration: "none", fontSize: "20px",  margin: "20px"}}>
          Tasks
        </Link>
        <Link to={"/login"} element={<Loginpage />} style={{color: "black", textDecoration: "none", fontSize: "20px", margin: "20px"}}>
          Login
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/" element={<h3>error</h3>}></Route>
      </Routes>
    </>
  );
}

export { AllRoutes };
