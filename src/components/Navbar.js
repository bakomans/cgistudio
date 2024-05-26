import React, { useEffect } from 'react';
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
    transition: 'color 0.3s ease',
  };

  const pinkHover = {
    color: 'pink',
  };

  const activeLinkStyle = {
    ...linkStyle,
    ...pinkHover,
  };

  return (
    <header className="text-gray-600 body-font" data-aos="fade-down" style={navbarStyle}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" style={linkStyle} activeStyle={activeLinkStyle} exact>
          <img src={logo} alt="logo" className="w-10 h-10 text-white m-4 bg-white-500 rounded-full" /> 
          <span className="ml-4 text-xl">CGI-STUDIO</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" style={linkStyle} activeStyle={activeLinkStyle} exact>Home</NavLink>
          <NavLink to="/projects" style={linkStyle} activeStyle={activeLinkStyle}>Projects</NavLink>
          <NavLink to="/gallery" style={linkStyle} activeStyle={activeLinkStyle}>Gallery</NavLink>
          {user ? (
            <>
              <NavLink to="/user-panel" style={linkStyle} activeStyle={activeLinkStyle}>User Panel</NavLink>
              <button onClick={handleLogout} className="text-white px-4 bg-purple-500 rounded-md">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" style={linkStyle} activeStyle={activeLinkStyle}>Login</NavLink>
              <NavLink to="/register" style={linkStyle} activeStyle={activeLinkStyle}>Registration</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
