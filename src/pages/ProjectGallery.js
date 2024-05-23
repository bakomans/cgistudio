import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../Assets/projects/projekt1/LARGE FF.png';
import img2 from '../Assets/projects/projekt1/FRONT ELEVATION.png';
import img3 from '../Assets/projects/projekt1/LARGE GF.png';
import img4 from '../Assets/projects/projekt1/LEFT ELEVATION.png';
import img5 from '../Assets/projects/projekt1/REAR ELEVATION.png';
import img6 from '../Assets/projects/projekt1/RIGHT ELEVATION.png';

const ProjectGallery = () => {
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const project = {
    id: 1,
    title: "Modern Loft",
    images: [
      { src: img1, caption: "First Floor" },
      { src: img2, caption: "Front Elevation" },
      { src: img3, caption: "Ground Floor" },
      { src: img4, caption: "Left Elevation" },
      { src: img5, caption: "Rear Elevation" },
      { src: img6, caption: "Right" }
    ]
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-10" data-aos="fade-up">Gallery: {project.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.images.map((image, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md" data-aos="fade-up">
              <img 
                src={image.src} 
                alt={`${project.title} ${index + 1}`} 
                className="w-full h-40 object-cover mb-4 rounded-md cursor-pointer"
                onClick={() => openModal(image)}
              />
              <p className="text-center text-gray-700 dark:text-gray-300">{image.caption}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/login">
            <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-md text-lg">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        ariaHideApp={false} // Dodane, aby zapobiec błędom w testowaniu
      >
        {selectedImage && (
          <div className="bg-white p-4 rounded-md max-w-4xl mx-auto w-11/12 h-5/6 flex flex-col items-center">
            <img src={selectedImage.src} alt="Selected" className="object-contain h-full w-full" data-aos="fade-in" />
            <p className="mt-4 text-gray-700 dark:text-gray-300">{selectedImage.caption}</p>
            <button 
              onClick={closeModal} 
              className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProjectGallery;
