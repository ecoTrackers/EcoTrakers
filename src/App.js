import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './pages/index';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Logup from "./pages/logup";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/logup" element={<Logup />} />
          {/* Otras rutas */}
        </Routes>
      </Router>
  );
}

export default App;
