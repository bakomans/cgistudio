import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Function to import all images from the Assets/gallery directory
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../Assets/gallery', false, /\.(png|jpe?g|svg)$/)).map((image, index) => ({
  src: image,
  caption: `Image ${index + 1}`,
}));

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-4" data-aos="fade-up">
          Gallery
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10" data-aos="fade-up">
          Explore our collection of images.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md" data-aos="fade-up">
              <img 
                src={image.src} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-40 object-cover mb-4 rounded-md cursor-pointer"
                onClick={() => openModal(index)}
              />
              <p className="text-center text-gray-700 dark:text-gray-300">{image.caption}</p>
            </div>
            // eslint-disable-next-line react/no-array-index-key
          ))}
        </div>
        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          ariaHideApp={false}
        >
          {selectedImageIndex !== null && (
            <div className="bg-white p-4 rounded-md max-w-4xl mx-auto w-11/12 h-5/6 flex flex-col items-center">
              <img src={images[selectedImageIndex].src} alt="Selected" className="object-contain h-full w-full" data-aos="fade-in" />
              <p className="mt-4 text-gray-700 dark:text-gray-300">{images[selectedImageIndex].caption}</p>
              <div className="mt-4 flex justify-between w-full">
                <button onClick={showPreviousImage} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md">
                  Previous
                </button>
                <button onClick={showNextImage} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md">
                  Next
                </button>
              </div>
              <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;
