import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <div className="bg-richblack-900 w-[100vw] h-[100vh] flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              {/* this is done cause hum login bina kre dashboard pr jaa rhe the to isliye jb tk login ni krenge tb tk signup ni show hona chahiye isliye y kiya gya hai */}
              <Dashboard/>
            </PrivateRoute>} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
