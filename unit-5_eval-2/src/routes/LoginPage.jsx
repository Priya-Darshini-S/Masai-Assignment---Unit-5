import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login } from "../components/Login";
import { loginFailure, loginRequest, loginSuccess } from "../redux/Auth/action";

function Loginpage() {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );

  const handleLogin = ({ email, password }) => {
    const requestAction = loginRequest();
    dispatch(requestAction);

  

    if (email === "admin" && password === "admin") {
      const action = loginSuccess("fakeToken");
      // console.log("action:", action);
      dispatch(action);
    } else {
      const action = loginFailure("Wrong credential");
      // console.log("action:", action);
      dispatch(action);
    }
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}

export { Loginpage };
