import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth, logout } from '../services/auth'; 
import logo from '../Assets/logo.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import tlo from '../Assets/homepage/tlo.jpg'; 

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true 
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarStyle = {
    backgroundImage: `url(${tlo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const linkStyle = "block mt-4 md:inline-block md:mt-0 md:ml-6 text-lg text-black-900 dark:text-black-300 hover:text-pink-500";

  return (
    <header className="text-black-600 body-font" data-aos="fade-down" style={navbarStyle}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-10 h-10 text-white m-4 bg-white-500 rounded-full" /> 
          <span className="ml-4 text-xl">CGI-STUDIO</span>
        </NavLink>
        <button 
          className="md:hidden text-black-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        <nav className={`md:ml-auto md:flex md:items-center md:justify-center w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block text-center`}>
          <NavLink to="/" className={linkStyle} exact>Home</NavLink>
          <NavLink to="/projects" className={linkStyle}>Projects</NavLink>
          <NavLink to="/gallery" className={linkStyle}>Gallery</NavLink>
          {user ? (
            <>
              <NavLink to="/user-panel" className={linkStyle}>User Panel</NavLink>
              <button onClick={handleLogout} className="block mt-4 md:inline-block md:mt-0 md:ml-6 text-lg text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkStyle}>Login</NavLink>
              <NavLink to="/register" className={linkStyle}>Register</NavLink>
            </>
          )}
          <NavLink to="/contact-us" className={linkStyle}>Contact CGI</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
