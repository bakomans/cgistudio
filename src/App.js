import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPanel from './pages/UserPanel';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user-panel" element={<UserPanel />} />
        <Route path="/checkout" element={<CheckoutPage />} /> {/* Corrected path */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
};

export default App;
