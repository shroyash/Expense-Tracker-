import { Route, Routes } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import VeiwTransaction from "../Pages/VeiwTransaction"
import AddIncome from "../Pages/AddIncome"
import AddExpenses from "../Pages/AddExpenses"
import Login from "../Pages/Login"
import SignUp from "../Pages/Register"

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/VeiwTransaction" element={<VeiwTransaction/>}/>
            <Route path="/AddIncome" element={<AddIncome/>}/>
            <Route path="/AddExpenses" element={<AddExpenses/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      
    </div>
  )
}

export default Router
