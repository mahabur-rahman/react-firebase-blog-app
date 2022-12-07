import React from "react";
import { auth, provider } from "../firebase-config";

import { getIdTokenResult, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  // google signIn
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", "true");

        navigate("/");
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="loginPage">
        <p>Sign in with Google to continue</p>

        <button onClick={signInWithGoogle}>SignIn with Google</button>
      </div>
    </>
  );
};

export default Login;
