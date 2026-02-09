import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import CustomerDashboard from "./pages/customer/Dashboard"
import EmployeeDashboard from "./pages/employee/Dashboard"
import ProtectedRoute from "./pages/routes/ProtectedRoutes"
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
             element={ <ProtectedRoute 
             role = "CUSTOMER" >
               <CustomerDashboard /> 
               </ProtectedRoute>
              } />

             <Route 
             path="/customer/apply-loan" 
             element={<ProtectedRoute 
             role="CUSTOMER">
              <ApplyLoan />
            </ProtectedRoute>
             } />

             <Route
             path="/customer/add-account"
             element={
             <ProtectedRoute role="CUSTOMER">
              <AddBankAccount />
              </ProtectedRoute>
             }/>

             <Route
             path="/customer/loan-form"
             element={<ProtectedRoute 
             role="CUSTOMER">
              <LoanApplicationForm />
            </ProtectedRoute>
             }/>


             <Route 
             path="/employee/dashboard" 
             element={<ProtectedRoute
             role = " EMPLOYEE" > 
              <EmployeeDashboard/> 
              </ProtectedRoute>
            } />




         </Routes>       
         </BrowserRouter>
  )
}

export default App
