import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Pay() {
  const [status, setStatus] = useState("INIT");

  const { state } = useLocation();
 const {id} = useParams();
const [emi,setEmi] =useState({});

useEffect(()=>{
const resp = async()=>{
    const data = await fetch(`http://localhost:3000/api/pay/${id}`);
    const res = await data.json();
    setEmi(res);
    console.log(res);
    
    
}
resp();
},[])

  const totalAmount = emi.Interest + emi.penalty;

  const handlePayNow = async () => {
    setStatus("PROCESSING");

    setTimeout(() => {
      setStatus("SUCCESS");
    }, 2000);
    try{
      const resp = await fetch(`http://localhost:3000/api/pay/${id}`,
        {
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            status:"PAID",
          })
        }
      );
      const data = await resp.json();
      console.log(data);
    }catch(e){
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">

        <h2 className="text-xl font-bold text-gray-800 mb-1">
          EMI Payment
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          EMI ID: <span className="font-medium">{emi._id}</span>
        </p>

        <div className="bg-gray-50 border rounded-lg p-4 mb-3">
          <p className="text-sm text-gray-500">EMI Amount</p>
          <p className="text-xl font-bold text-gray-900">₹{emi.Interest}</p>
        </div>

        <div className="bg-gray-50 border rounded-lg p-4 mb-3">
          <p className="text-sm text-gray-500">Penalty</p>
          <p className="text-xl font-bold text-red-500">₹{emi.penalty}</p>
        </div>

        <div className="bg-indigo-50 border rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-600">Total Payable</p>
          <p className="text-2xl font-bold text-indigo-700">
            ₹{emi.totalAmout}
          </p>
        </div>

        {status === "PROCESSING" && (
          <div className="text-center py-6">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Processing EMI payment...</p>
          </div>
        )}

        {status === "SUCCESS" && (
          <div className="text-center py-6">
            <div className="text-green-600 text-4xl mb-2">✔</div>
            <h3 className="text-lg font-semibold text-green-600">
              EMI Paid Successfully
            </h3>
          </div>
        )}

        {status === "INIT" && (
          <button
            onClick={handlePayNow}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Pay EMI ₹{totalAmount}
          </button>
        )}
      </div>
    </div>
  );
}