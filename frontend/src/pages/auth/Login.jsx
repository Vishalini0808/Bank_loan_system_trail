import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../api";





const Login = () => {

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleLogin = async()=> {
  try {
    const res = await api.post("/authlog/login", {
      email,
      password
    });

    
// to store in local storage
const {token, role} = res.data;

localStorage.setItem("token",token);
localStorage.setItem("role", role);


//role based access:
if(role === "CUSTOMER") {
  navigate("/customer/dashboard")
}else if( role === "EMPLOYEE") {
  navigate("/employee/dashboard")
}
  }catch(err){
    alert(err.response?.data?.message || "Login failed");
  }
}




  return (
    
   <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-mint to-softgreen px-4">
  <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
       


        {/* Header */}
    <div className="bg-linear-to-r from-teal to-deepblue p-6 text-white">
      <h1 className="text-2xl font-bold">🏦 SecureBank</h1>
      <p className="text-sm opacity-90">
        Smart & Secure Loan Management System
      </p>
    </div>


      <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-navy">
        Login to your account
      </h2>

        <input 
        className="input mb-4" 
        placeholder="Email" 
        onChange={ (e) => setEmail(e.target.value)}
        />

        <input 
        className="input mb-4" 
        type="password" 
        placeholder="Password" 
        onChange={ (e) => setPassword(e.target.value)}
        />

        <button 
        onClick={handleLogin}
        className="btn-primary w-full">
          Login
        </button>

         <p 
         className="text-sm text-center mt-4">
          New user?{" "}
          <Link to="/register" 
          className="text-teal font-medium">
            Register
          </Link>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Login
