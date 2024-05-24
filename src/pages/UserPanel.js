import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UserPanel = () => {
  const [user, setUser] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedOption, setSelectedOption] = useState('projects');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "TAPE A – OAK FRAME HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house. The ground floor welcomes you with a spacious entrance hall featuring a convenient WC. Enjoy cozy evenings by the fireplace in the inviting living room. The modern kitchen diner and utility room offer both style and functionality. Upstairs, you'll find four double bedrooms, including a luxurious master bedroom with its own en-suite bathroom. The family bathroom provides ample space for everyone. All this can be yours for just £288.98!",
      price: 288.98
    },
    {
      id: 2,
      title: "TAPE B – OAK FRAME HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house. The ground floor welcomes you with a spacious entrance hall featuring a convenient WC. Enjoy cozy evenings by the fireplace in the inviting living room. The modern kitchen diner and utility room offer both style and functionality. Upstairs, you'll find four double bedrooms, including a luxurious master bedroom with its own en-suite bathroom. The family bathroom provides ample space for everyone. All this can be yours for just £288.98!",
      price: 288.98
    },
    {
      id: 3,
      title: "TAPE C – OAK FRAME HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house. The ground floor welcomes you with a spacious entrance hall featuring a convenient WC. Enjoy cozy evenings by the fireplace in the inviting living room. The modern kitchen diner and utility room offer both style and functionality. Upstairs, you'll find four double bedrooms, including a luxurious master bedroom with its own en-suite bathroom. The family bathroom provides ample space for everyone. All this can be yours for just £288.98!",
      price: 288.98
    }
  ];

  const services = [
    {
      id: 1,
      name: "Service 1",
      description: "Detailed architectural consultation.",
      price: 99.99
    },
    {
      id: 2,
      name: "Service 2",
      description: "Personalized interior design service.",
      price: 149.99
    },
    {
      id: 3,
      name: "Service 3",
      description: "Landscape design package.",
      price: 199.99
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const loggedInUser = localStorage.getItem('user');
    const storedProjects = localStorage.getItem('selectedProjects');
    const storedServices = localStorage.getItem('selectedServices');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    if (storedProjects) {
      setSelectedProjects(JSON.parse(storedProjects));
    }
    if (storedServices) {
      setSelectedServices(JSON.parse(storedServices));
    }
  }, []);

  const handleProjectSelect = (project) => {
    const updatedProjects = [...selectedProjects, project];
    setSelectedProjects(updatedProjects);
    localStorage.setItem('selectedProjects', JSON.stringify(updatedProjects));
  };

  const handleServiceSelect = (service) => {
    const updatedServices = [...selectedServices, service];
    setSelectedServices(updatedServices);
    localStorage.setItem('selectedServices', JSON.stringify(updatedServices));
  };

  const handleProjectRemove = (projectId) => {
    const updatedProjects = selectedProjects.filter(project => project.id !== projectId);
    setSelectedProjects(updatedProjects);
    localStorage.setItem('selectedProjects', JSON.stringify(updatedProjects));
  };

  const handleServiceRemove = (serviceId) => {
    const updatedServices = selectedServices.filter(service => service.id !== serviceId);
    setSelectedServices(updatedServices);
    localStorage.setItem('selectedServices', JSON.stringify(updatedServices));
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
            <li className={`cursor-pointer text-lg font-medium ${selectedOption === 'services' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => handleOptionSelect('services')}>My Services</li>
            <li className={`cursor-pointer text-lg font-medium ${selectedOption === 'files' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => handleOptionSelect('files')}>My Files</li>
          </ul>
        </div>
        <div className="w-3/4 p-4 bg-blue-100 dark:bg-blue-800 rounded-lg shadow ml-4">
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
                    <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300">{project.title}</h5>
                    <p className="text-gray-900 dark:text-gray-200">{project.description}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-200">£{project.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedOption === 'services' && (            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Available Services:</h4>
              <ul className="divide-y divide-gray-200">
                {services.map((service) => (
                  <li
                    key={service.id}
                    className="py-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    onClick={() => handleServiceSelect(service)}
                  >
                    <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300">{service.name}</h5>
                    <p className="text-gray-900 dark:text-gray-200">{service.description}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-200">${service.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedOption === 'files' && (
            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Purchased Files and Services:</h4>
              <ul className="divide-y divide-gray-200">
                <li className="py-4 text-lg text-gray-700 dark:text-gray-300">File 1 - Download Link</li>
                <li className="py-4 text-lg text-gray-700 dark:text-gray-300">Service 1 - Access Link</li>
              </ul>
            </div>
          )}
          <div className="mt-10">
            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">My Cart:</h4>
            <ul className="divide-y divide-gray-200">
              {selectedProjects.length > 0 ? (
                selectedProjects.map((project, index) => (
                  <li key={index} className="py-4 flex justify-between items-center">
                    <div>
                      <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300">{project.title}</h5>
                      <p className="text-gray-900 dark:text-gray-200">{project.description}</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-gray-200">£{project.price.toFixed(2)}</p>
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
              {selectedServices.length > 0 && selectedServices.map((service, index) => (
                <li key={index} className="py-4 flex justify-between items-center">
                  <div>
                    <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300">{service.name}</h5>
                    <p className="text-gray-900 dark:text-gray-200">{service.description}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-200">${service.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition-all duration-300"
                    onClick={() => handleServiceRemove(service.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
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
        </div>
      </div>
    </section>
  );
};

export default UserPanel;

           
