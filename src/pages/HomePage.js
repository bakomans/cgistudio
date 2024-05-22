import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../Assets/video barbara.mp4'; // Importujemy film

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration 1000ms
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7" data-aos="fade-right">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to CGI Studio</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">CGI Studio is a design firm specializing in modern home designs. Our projects blend functionality, aesthetics, and innovative architectural approaches.</p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We pay attention to every detail to create homes that meet the expectations of our clients.</p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From simple bungalows to luxury residences - CGI Studio provides comprehensive design solutions for everyone.</p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">In times of massive inflation, I would like to introduce you to the possibility of purchasing pocket-friendly planning drawings. I have extensive experience in the architectural field designing houses, apartments, and public spaces. Dive in and choose the building that suits you best.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link to="/register">Get Started</Link>
            </button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex" data-aos="fade-left">
          <img src="https://dummyimage.com/720x600" alt="hero" className="object-cover object-center rounded" />
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative overflow-hidden rounded-lg shadow-md" data-aos="fade-up">
          <img className="w-full h-auto" src="https://via.placeholder.com/400x300" alt="gallery" />
          <p className="p-4 text-gray-700 dark:text-gray-300">Short description here</p>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-md" data-aos="fade-up">
          <img className="w-full h-auto" src="https://via.placeholder.com/400x300" alt="gallery" />
          <p className="p-4 text-gray-700 dark:text-gray-300">Short description here</p>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-md" data-aos="fade-up">
          <img className="w-full h-auto" src="https://via.placeholder.com/400x300" alt="gallery" />
          <p className="p-4 text-gray-700 dark:text-gray-300">Short description here</p>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-md" data-aos="fade-up">
          <img className="w-full h-auto" src="https://via.placeholder.com/400x300" alt="gallery" />
          <p className="p-4 text-gray-700 dark:text-gray-300">Short description here</p>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <video className="w-full rounded-lg shadow-md" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <footer className="bg-gray-800 text-gray-200 py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} CGI Studio. All rights reserved.</p>
          <a href="https://facebook.com" className="text-indigo-500 hover:text-indigo-700 mx-2">Facebook</a>
        </div>
      </footer>
    </section>
  );
};

export default HomePage;
