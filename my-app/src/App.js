import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  // const [isAuth, setIsAuth] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  // logout
  const logoutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);

      window.location.pathname = "/login";
    });
  };

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/create-post">Create Post</Link>
              <Link onClick={logoutUser}>Logout</Link>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/create-post" element={<CreatePost isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
