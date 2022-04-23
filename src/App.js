import './App.css';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products} from './components/Products'
import { Cart } from './components/Cart'

function App() {
  return (

  <div className ="App">
   {/* <Navbar/>  */}
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/cart" element={< Cart/>} />
          </Routes>
        </BrowserRouter>

  </div>

   
  );
}

export default App;
