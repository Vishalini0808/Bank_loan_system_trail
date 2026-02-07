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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input 
        className="border w-full p-2 mb-3" 
        placeholder="Email" 
        onChange={ (e) => setEmail(e.target.value)}
        />

        <input 
        className="border w-full p-2 mb-3" 
        type="password" 
        placeholder="Password" 
        onChange={ (e) => setPassword(e.target.value)}
        />

        <button 
        onClick={handleLogin}
        className="bg-blue-600 text-white w-full py-2 rounded">
          Login
        </button>

         <p 
         className="text-sm text-center">
          New user?{" "}
          <Link to="/register" 
          className="text-blue-600 underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
