import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Billing } from "./components/Billing";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { UserDetails } from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/user" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
