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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mint to-softgreen px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">

      <div className="bg-linear-to-r from-teal to-deepblue p-6 text-white rounded-t-2xl">
      <h1 className="text-2xl font-bold">🏦 SecureBank</h1>
      <p className="text-sm opacity-90">
        Open your digital banking account
      </p>
    </div>

     <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-navy">
        Register
      </h2>
        <input
        className="input mb-4"
        placeholder="Name"
        onChange={ (e) => setForm ({ ...form, name :e.target.value})}
        />

         <input
        className="input mb-4"
        placeholder="Email"
        onChange={ (e) => setForm ({ ...form, email :e.target.value})}
        />

         <input
        className="input mb-4"
        placeholder="Password"
        type="password"
        onChange={ (e) => setForm ({ ...form, password :e.target.value})}
        />

        <button
        onClick={handleRegister}
        className="btn-primary w-full"
        >
            Register
        </button>

        </div>
      </div>
      </div>
    )
}

export default Register;