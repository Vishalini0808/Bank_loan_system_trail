import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Bank Logo and Branding */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-12 bg-linear-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">CapitalTrust Bank</h1>
              <p className="text-gray-500 text-sm">Loans & Banking Solutions</p>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          {/* Card Header - Teal Blue */}
          <div className="p-6 bg-linear-to-r from-teal-600 to-blue-600 rounded-t-lg">
            <h2 className="text-lg font-semibold text-white text-center">Login to Your Account</h2>
          </div>

          {/* Login Form */}
          <div className="p-6">
            <div className="space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  
                </div>
                <input 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  type="password" 
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Login Button - Teal Blue */}
              <button 
                onClick={handleLogin}
                className="w-full bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-sm hover:shadow-md"
              >
                Login
              </button>

              {/* Register Link */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-center text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <Link to="/register" className="font-medium text-teal-600 hover:text-teal-800">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  )
}

export default Login