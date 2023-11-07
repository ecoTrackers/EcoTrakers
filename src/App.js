import React, {useState} from "react";
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './pages/index';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Logup from "./pages/logup";
import Home from "./pages/home";
import ShoppingCart from "./pages/ShoppingCart";
import Inventario from "./pages/inventario";

function App() {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    setProductosSeleccionados([...productosSeleccionados, product]);
  };

  return (

        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/logup" element={<Logup />} />
            <Route
              path="/home"
              element={
                <Home 
                  cartCount={cartCount} 
                  setCartCount={setCartCount}
                  onAddToCart={handleAddToCart} />}
            />
            <Route 
              path="/cart" 
              element={
                <ShoppingCart 
                  productosSeleccionados={productosSeleccionados} 
                  setProductosSeleccionados={setProductosSeleccionados} />} />
            
            <Route path="/inventario" element={<Inventario />} />
            {/* Otras rutas */}
          </Routes>
        </Router>
      
  );
}

export default App;
