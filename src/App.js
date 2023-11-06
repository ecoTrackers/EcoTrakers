import React from "react";
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './pages/index';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Logup from "./pages/logup";
import Home from "./pages/home";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/logup" element={<Logup />} />
          <Route path="/home" element={<Home />} />
          {/* Otras rutas */}
        </Routes>
      </Router>
  );
}

export default App;
