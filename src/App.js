import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/forgotPassword" element={<ForgotPassword />} />
          {/* Otras rutas */}
        </Routes>
      </Router>
  );
}

export default App;
