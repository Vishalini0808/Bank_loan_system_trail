import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import CustomerDashboard from "./pages/customer/Dashboard"
import EmployeeDashboard from "./pages/employee/Dashboard"
import ProtectedRoute from "./pages/routes/ProtectedRoutes"
// import AppRoutes from "./pages/routes/AppRoutes"

function App() {
  
  
  return (
   <BrowserRouter>
         <Routes>

             <Route path="/login" element = {<Login/>}/>
             <Route path="/register" element={<Register />} />

              {/* Default route */}
             <Route path="/" element={<Login />} />

             <Route path="/customer/dashboard" element={ <ProtectedRoute> <CustomerDashboard /> </ProtectedRoute>} />
{/*              <Route path="/customer/applyloan" element={<ApplyLoan />} /> */}

             <Route path="/employee/dashboard" element={<ProtectedRoute> <EmployeeDashboard/> </ProtectedRoute>} />

         </Routes>       
         </BrowserRouter>
  )
}

export default App
