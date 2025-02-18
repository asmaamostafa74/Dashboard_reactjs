import { Route, Routes } from 'react-router'
import './App.css'
import DashboradLayout from './pages/DashboradLayout'
import Billing from './pages/Billing/Billing.jsx'
import Tables from "./pages/Tables/Tables.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<DashboradLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
