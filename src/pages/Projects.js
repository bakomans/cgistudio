import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../Assets/projects/projekt1/FRONT ELEVATION.png';
import img2 from '../Assets/projects/projekt1/LARGE FF.png';
import img3 from '../Assets/projects/projekt1/LARGE GF.png';
import img4 from '../Assets/projects/projekt1/LEFT ELEVATION.png';
import img5 from '../Assets/projects/projekt1/REAR ELEVATION.png';
import img6 from '../Assets/projects/projekt1/RIGHT ELEVATION.png';
import img9 from '../Assets/projects/project3/FF.png';
import img10 from '../Assets/projects/project3/FRONT.png';
import img11 from '../Assets/projects/project3/GF.png';
import img12 from '../Assets/projects/project3/LEFT ELEV.png';
import img13 from '../Assets/projects/project3/REAR ELEV.png';
import img14 from '../Assets/projects/project3/RIGHT ELEV.png';

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Type A - VIRION HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house. The ground floor welcomes you with a spacious entrance hall featuring a convenient WC. Enjoy cozy evenings by the fireplace in the inviting living room. The modern kitchen diner and utility room offer both style and functionality. Upstairs, you'll find four double bedrooms, including a luxurious master bedroom with its own en-suite bathroom. The family bathroom provides ample space for everyone. All this can be yours for just £288.98!",
      images: [
        { src: img1, caption: "Front Elevation" },
        { src: img2, caption: "Large First Floor " },
        { src: img3, caption: "Large Ground Floor" },
        { src: img4, caption: "Left Elevation" },
        { src: img5, caption: "Rear Elevation" },
        { src: img6, caption: "Right Elevation" }
      ]
    },
    // {
    //   id: 2,
    //   title: "EAGLE HOUSE",
    //   description: "A cozy cottage with a rustic charm and modern amenities.",
    //   images: ["https://via.placeholder.com/500x300"]
    // },
    {
      id: 3,
      title: "TYPE C - DORIAN",
      description: "Welcome to explore this charming home featuring a spacious living room, kitchen with dining area, and a cozy fireplace, perfect for enjoyable evenings. Upstairs, you'll find two cozy bedrooms and a modern family bathroom. All this is available at an incredibly attractive price - just 188.98 pounds! Why not invest in the comfort and convenience of your new home today",
      images: [
        { src: img9, caption: "First Floor" },
        { src: img10, caption: "Front" },
        { src: img11, caption: "Ground Floor" },
        { src: img12, caption: "Left Elevation" },
        { src: img13, caption: "Rear Elevation" },
        { src: img14, caption: "Right Elevation" }
      ]
    }
    // Dodaj więcej projektów tutaj
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleBuyNow = () => {
    navigate('/login');
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-4">Gallery: {project.title}</h2>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10">{project.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md" 
                  data-aos="fade-up"
                >
                  <img 
                    src={image.src} 
                    alt={`${project.title}                  ${index + 1}`} 
                    className="w-full h-40 object-cover mb-4 rounded-md cursor-pointer"
                    onClick={() => openModal(image)}
                  />
                  <p className="text-center text-gray-700 dark:text-gray-300">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="flex justify-center">
          <button onClick={handleBuyNow} className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-md text-lg">
            Buy Now
          </button>
        </div>
      </div>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        ariaHideApp={false}
      >
        {selectedImage && (
          <div className="bg-white p-4 rounded-md max-w-4xl mx-auto w-11/12 h-5/6 flex flex-col items-center">
            <img src={selectedImage.src} alt="Selected" className="object-contain h-full w-full" data-aos="fade-in" />            
            <p className="mt-4 text-gray-700 dark:text-gray-300">{selectedImage.caption}</p>
            <button onClick={closeModal} className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md">
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;

