import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";


 const Register = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState( {
        name :"",
        email : "",
        password : ""
    });

    const handleRegister = async() => {
        try {
            await api.post("/authreg/register",form);
            alert("Registered Successfully");
            navigate("/login");
        } catch (error) {
            alert (error.response?.data?.message || "Register Failed")
        }
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">

        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
        className="border w-full p-2 mb-3"
        placeholder="Name"
        onChange={ (e) => setForm ({ ...form, name :e.target.value})}
        />

         <input
        className="border w-full p-2 mb-3"
        placeholder="Email"
        onChange={ (e) => setForm ({ ...form, email :e.target.value})}
        />

         <input
        className="border w-full p-2 mb-3"
        placeholder="Password"
        type="password"
        onChange={ (e) => setForm ({ ...form, password :e.target.value})}
        />

        <button
        onClick={handleRegister}
        className="bg-green-600 text-white w-full py-2 rounded"
        >
            Register
        </button>

      </div>
      </div>
    )
}

export default Register;