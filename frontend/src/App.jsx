import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import CustomerDashboard from "./pages/customer/Dashboard"
import EmployeeDashboard from "./pages/employee/Dashboard"
// import ProtectedRoute from "./pages/routes/ProtectedRoutes"
import ApplyLoan from "./pages/customer/ApplyLoan"
import LoanApplicationForm from "./pages/customer/LoanApplicationForm"
import AddBankAccount from "./pages/customer/addBankAccount"
// import AppRoutes from "./pages/routes/AppRoutes"

function App() {
  
  
  return (
   <BrowserRouter>
         <Routes>

             {/* Default route also login only  */}
             <Route path="/" element={<Login />} />
             <Route path="/login" element = {<Login/>}/>
             <Route path="/register" element={<Register />} />

             

             <Route 
             path="/customer/dashboard" 
             element={ 
               <CustomerDashboard /> 
              } />

             <Route 
             path="/customer/apply-loan" 
             element={
              <ApplyLoan />
             } />

             <Route
             path="/customer/add-account"
             element={
              <AddBankAccount />
             }/>

             <Route
             path="/customer/loan-form"
             element={
              <LoanApplicationForm />
             }/>


             <Route 
             path="/employee/dashboard" 
             element={ 
              <EmployeeDashboard/> 
            } />




         </Routes>       
         </BrowserRouter>
  )
}

export default App
