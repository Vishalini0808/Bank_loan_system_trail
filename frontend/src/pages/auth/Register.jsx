import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../api";

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleRegister = async() => {
        try {
            await api.post("/authreg/register", form);
            alert("Registered Successfully");
            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.message || "Register Failed")
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              
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

                {/* Register Card */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200">
                    {/* Card Header - Teal Blue */}
                    <div className="p-6 bg-linear-to-r from-teal-600 to-blue-600 rounded-t-lg">
                        <h2 className="text-lg font-semibold text-white text-center">Create Your Account</h2>
                    </div>

                    {/* Register Form */}
                    <div className="p-6">
                        <div className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                                    placeholder="Enter your full name"
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                                    placeholder="Enter your email"
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                                    type="password"
                                    placeholder="Create a password"
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                />
                            </div>

                            {/* Register Button - Teal Blue */}
                            <button
                                onClick={handleRegister}
                                className="w-full bg-linear-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-sm hover:shadow-md"
                            >
                                Create Account
                            </button>

                            {/* Login Link */}
                            <div className="pt-4 border-t border-gray-100">
                                <p className="text-center text-gray-600 text-sm">
                                    Already have an account?{" "}
                                    <Link to="/login" className="font-medium text-teal-600 hover:text-teal-800">
                                        Login
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

export default Register;