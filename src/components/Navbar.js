import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, logout } from '../services/auth'; 
import logo from '../Assets/logo.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import tlo from '../Assets/homepage/tlo.jpg'; // Importuj obraz tła

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true 
    });
  }, []);

  const navigate = useNavigate();
  const { user } = useAuth(); 

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate('/'); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const navbarStyle = {
    backgroundImage: `url(${tlo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <header className="text-gray-600 body-font" data-aos="fade-down" style={navbarStyle}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-10 h-10 text-white m-4 bg-white-500 rounded-full" /> 
          <span className="ml-4 text-xl">CGI-STUDIO</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/projects" className="mr-5 hover:text-gray-900">Projects</Link>
          {user ? (
            <>
              <Link to="/user-panel" className="mr-5 hover:text-gray-900">User Panel</Link>
              <button onClick={handleLogout} className="text-white px-4 bg-purple-500 rounded-md">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link>
              <Link to="/register" className="mr-5 hover:text-gray-900">Registration</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
