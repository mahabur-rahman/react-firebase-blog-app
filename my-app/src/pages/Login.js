import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const signInWithGoogle = () => {};

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
