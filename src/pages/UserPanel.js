/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import zdjęć miniatur
import miniatura1 from '../Assets/homepage/dom1/A.png';
import miniatura2 from '../Assets/homepage/dom1/C.png';
import miniatura3 from '../Assets/homepage/dom3/A.png';
import makeMySitePlanImage from '../Assets/ziemia.jpg'; // Poprawna ścieżka do obrazka

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
      title: "TYPE A – VIRION HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house. The ground floor welcomes you with a spacious entrance hall featuring a convenient WC. Enjoy cozy evenings by the fireplace in the inviting living room. The modern kitchen diner and utility room offer both style and functionality. Upstairs, you'll find four double bedrooms, including a luxurious master bedroom with its own en-suite bathroom. The family bathroom provides ample space for everyone. All this can be yours for just £288.98!",
      price: 288.98,
      image: miniatura1
    },
    {
      id: 2,
      title: "TYPE B – EAGLE HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house. The ground floor welcomes you with a spacious entrance hall featuring a convenient WC. Enjoy cozy evenings by the fireplace in the inviting living room. The modern kitchen diner and utility room offer both style and functionality. Upstairs, you'll find four double bedrooms, including a luxurious master bedroom with its own en-suite bathroom. The family bathroom provides ample space for everyone. All this can be yours for just £288.98!",
      price: 288.98,
      image: miniatura2
    },
    {
      id: 3,
      title: "TYPE C – DORIAN HOUSE",
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
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        {user && (
          <div className="text-center mb-6">
            <h3 className="text-3xl font-semibold text-blue-900 dark:text-blue-200">
              Welcome, {user.email}
            </h3>
          </div>
        )}
        <div className="flex">
          <div className="w-1/4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <ul className="space-y-4">
              <li className={`cursor-pointer text-lg font-medium ${selectedOption === 'projects' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => handleOptionSelect('projects')}>My Projects</li>
              <li className={`cursor-pointer text-lg font-medium ${selectedOption === 'makeSitePlan' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => handleOptionSelect('makeSitePlan')}>Make my site plan</li>
            </ul>
          </div>
          <div className="w-3/4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow ml-4">
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
{selectedOption === 'makeSitePlan' && (
<div>
<p className="text-gray-900 dark:text-gray-200">All downloaded plans are prepared as per application requirements. That includes Floor Plans and Elevation Drawings: These orthogonal (2d) drawings that illustrate the layout of the building and external appearance of the building from different angles. They show the height, shape and design details. Whole set of planning drawings is saved on A4 paper size and scale 1:100. Before downloading your drawings please ensure that your drawings will meet the required quality standards set by Local Planning Authority (LPA).</p>
<p className="text-gray-900 dark:text-gray-200">The only thing missing to have a full set ready for application is a Site Plan showing the proposed property in scale 1:500 or 1:200 and a Location Plan in scale 1:1250. A location plan provides an overview of the site’s location within the wider area. It includes nearby roads, landmarks, and relevant features.</p>
<p className="text-gray-900 dark:text-gray-200">You can download a CAD/DWG version of your plot from the website at the following link:</p>
<a href="https://www.requestaplan.co.uk/?gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpRQZ73imV_ouEX7syimF-poE6oBah-cAwWKAdnXCDogZFyhJxCK8YcaAvX8EALw_wcB" className="text-blue-600 cursor-pointer underline" target="_blank">ReQuestaPlan</a>
<p className="text-gray-900 dark:text-gray-200">Please use the option “Make my site plan”, and I’ll prepare your final drawing. You will need to send me the CAD/DWG version of your plot with the type of building you’ve purchased from C-GI studio, and I’ll send you back a site plan with the building positioned to the required scale and a location plate set to scale 1:1250.</p>
<p className="text-gray-900 dark:text-gray-200">Price: £68</p>
<div className="flex items-center mt-4">
<img src={makeMySitePlanImage} alt="Make my site plan" className="w-20 h-20 mr-4 object-cover rounded-lg" />
<div>
<p className="text-lg font-bold text-gray-900 dark:text-gray-200">Make my site plan for £68</p>
<button
className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover
focus
focus
focus
dark:focus
transition-all duration-300"
onClick={() => handleProjectSelect({
id: 4,
title: "Make my site plan",
description: "Make my site plan for £68",
price: 68.00,
image: makeMySitePlanImage
})}
>
Add to Cart
</button>
</div>
</div>
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
className="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover
focus
focus
focus
dark:focus
transition-all duration-300"
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
</div>
</section>
);
};

export default UserPanel;
