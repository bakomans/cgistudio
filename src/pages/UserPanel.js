import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import zdjęć miniatur
import miniatura1 from '../Assets/homepage/dom1/A.png';
import miniatura2 from '../Assets/homepage/dom1/C.png';
import miniatura3 from '../Assets/homepage/dom3/A.png';

const UserPanel = () => {
  const [user, setUser] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedOption, setSelectedOption] = useState('projects');
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // Tablice projektów
  const projects = [
    {
      id: 1,
      title: "TAPE A – VIRION HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house. The ground floor welcomes you with a spacious entrance hall featuring a convenient WC. Enjoy cozy evenings by the fireplace in the inviting living room. The modern kitchen diner and utility room offer both style and functionality. Upstairs, you'll find four double bedrooms, including a luxurious master bedroom with its own en-suite bathroom. The family bathroom provides ample space for everyone. All this can be yours for just £288.98!",
      price: 288.98,
      image: miniatura1
    },
    {
      id: 2,
      title: "TAPE B – EAGLE HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house. The ground floor welcomes you with a spacious entrance hall featuring a convenient WC. Enjoy cozy evenings by the fireplace in the inviting living room. The modern kitchen diner and utility room offer both style and functionality. Upstairs, you'll find four double bedrooms, including a luxurious master bedroom with its own en-suite bathroom. The family bathroom provides ample space for everyone. All this can be yours for just £288.98!",
      price: 288.98,
      image: miniatura2
    },
    {
      id: 3,
      title: "TAPE C – DORIAN HOUSE",
      description: "Welcome to explore this charming home featuring a spacious living room, kitchen with dining area, and a cozy fireplace, perfect for enjoyable evenings. Upstairs, you'll find two cozy bedrooms and a modern family bathroom. All this is available at an incredibly attractive price - just 188.98 pounds! Why not invest in the comfort and convenience of your new home today",
      price: 188.98,
      image: miniatura3
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const loggedInUser = localStorage.getItem('user');
    const storedProjects = localStorage.getItem('selectedProjects');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    if (storedProjects) {
      setSelectedProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    // Obliczanie całkowitej ceny po każdej zmianie w wybranych projektach
    const projectTotal = selectedProjects.reduce((total, project) => total + project.price, 0);
    setTotalPrice(projectTotal);
  }, [selectedProjects]);

  // Funkcje do obsługi wyboru i usuwania projektów
  const handleProjectSelect = (project) => {
    const updatedProjects = [...selectedProjects, project];
    setSelectedProjects(updatedProjects);
    localStorage.setItem('selectedProjects', JSON.stringify(updatedProjects));
  };

  const handleProjectRemove = (projectId) => {
    const updatedProjects = selectedProjects.filter(project => project.id !== projectId);
    setSelectedProjects(updatedProjects);
    localStorage.setItem('selectedProjects', JSON.stringify(updatedProjects));
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased" data-aos="fade-right">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 flex">
        <div className="w-1/4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <ul className="space-y-4">
            <li className={`cursor-pointer text-lg font-medium ${selectedOption === 'projects' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => handleOptionSelect('projects')}>My Projects</li>
          </ul>
        </div>
        <div className="w-3/4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow ml-4">
          {user && (
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200">
                Welcome, {user.email}
              </h3>
            </div>
          )}
          {selectedOption === 'projects' && (
            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Available Projects:</h4>
              <ul className="divide-y divide-gray-200">
                {projects.map((project) => (
                  <li
                    key={project.id}
                    className="py-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    onClick={() => handleProjectSelect(project)}
                  >
                    <div className="flex items-center">
                      <img src={project.image} alt={project.title} className="w-32 h-32 mr-4 object-cover rounded-lg" />
                      <div>
                        <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300">{project.title}</h5>
                        <p className="text-gray-900 dark:text-gray-200">{project.description}</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-gray-200">£{project.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-10">
            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">My Cart:</h4>
            <ul className="divide-y divide-gray-200">
              {selectedProjects.length > 0 ? (
                selectedProjects.map((project, index) => (
                  <li key={index} className="py-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={project.image} alt={project.title} className="w-32 h-32 mr-4 object-cover rounded-lg" />
                      <div>
                        <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300">{project.title}</h5>
                        <p className="text-gray-900 dark:text-gray-200">{project.description}</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-gray-200">£{project.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button
                      className="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition-all duration-300"
                      onClick={() => handleProjectRemove(project.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-gray-700 dark:text-gray-300">No items in the cart.</p>
              )}
            </ul>
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={handleGoToCart}
              className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
            >
              Go to Cart
            </button>
          </div>
          <div className="text-center mt-6">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-200">Total Price: £{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPanel;
