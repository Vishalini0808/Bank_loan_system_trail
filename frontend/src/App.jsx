import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import CustomerDashboard from "./pages/customer/Dashboard"
import EmployeeDashboard from "./pages/employee/Dashboard"
import LoanApplicationForm from "./pages/customer/LoanApplicationForm"
import AddBankAccount from "./pages/customer/addBankAccount"
import LoanView from "./pages/employee/LoanReview"
import LoanStatus from "./pages/customer/loanStatus"
function App() {
  
  
  return (
   <BrowserRouter>
         <Routes>
            
             <Route path="/" element={<Login />} />
             <Route path="/login" element = {<Login/>}/>
             <Route path="/register" element={<Register />} />

             <Route 
             path="/customer/dashboard" 
             element={ 
               <CustomerDashboard /> 
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
             path="/customer/loan-status"
             element={
              <LoanStatus />
             }/>

             <Route 
             path="/employee/dashboard" 
             element={ 
              <EmployeeDashboard/> 
            } />

            <Route 
             path="/employee/applications/:id" 
             element={ 
              <LoanView/> 
            } />

         </Routes>       
         </BrowserRouter>
  )
}

export default App
