import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPanel from './pages/UserPanel';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects'; // Import dla komponentu Projects
import ProjectGallery from './pages/ProjectGallery'; // Import dla komponentu ProjectGallery
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user-panel" element={<UserPanel />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/projects" element={<Projects />} /> {/* Ścieżka dla komponentu Projects */}
        <Route path="/projects/:id" element={<ProjectGallery />} /> {/* Ścieżka dla komponentu ProjectGallery 
        */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
