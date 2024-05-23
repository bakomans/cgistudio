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

  const linkStyle = {
    fontSize: '1.5rem',
    marginRight: '1.5rem',
    color: '#333',
    textDecoration: 'none',
    transition: 'color 0.3s ease', // Dodajemy płynny przejście dla zmiany koloru
  };

  const pinkHover = {
    color: 'pink', // Zmieniamy kolor na różowy po najechaniu myszką
  };

  return (
    <header className="text-gray-600 body-font" data-aos="fade-down" style={navbarStyle}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-10 h-10 text-white m-4 bg-white-500 rounded-full" /> 
          <span className="ml-4 text-xl">CGI-STUDIO</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" style={linkStyle} activeStyle={pinkHover}>Home</Link>
          <Link to="/projects" style={linkStyle} activeStyle={pinkHover}>Projects</Link>
          {user ? (
            <>
              <Link to="/user-panel" style={linkStyle} activeStyle={pinkHover}>User Panel</Link>
              <button onClick={handleLogout} className="text-white px-4 bg-purple-500 rounded-md">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={linkStyle} activeStyle={pinkHover}>Login</Link>
              <Link to="/register" style={linkStyle} activeStyle={pinkHover}>Registration</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
