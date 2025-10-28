import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";  
import ForgotPassword from "./pages/ForgotPassword";
import Menu from "./pages/Menu";
import Tokens from "./pages/Tokens";
import Payment from "./pages/Payment";
import Setting from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pricing" element={<Pricing />} /> 
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/tokens" element={<Tokens />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/settings" element={<Setting />} />
    </Routes>
  );
}

export default App;
