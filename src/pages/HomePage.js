import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../Assets/video barbara.mp4';
import Comments from './comments';
import logo from '../Assets/logo.png';
import dom1 from '../Assets/homepage/dom1/A.png';
import dom2 from '../Assets/homepage/dom1/B.png';
import dom3 from '../Assets/homepage/dom1/C.png';
import dom4 from '../Assets/homepage/dom1/D.png';
import dom5 from '../Assets/homepage/dom3/A.png';
import dom6 from '../Assets/homepage/dom3/B.png';
import dom7 from '../Assets/homepage/dom3/C.png';
import dom8 from '../Assets/homepage/dom3/D.png';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center py-8">
        <img src={logo} alt="logo" className="mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">Welcome to CGI Studio</h1>
      </div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7" data-aos="fade-right">
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
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col items-center" data-aos="fade-left">
          <video className="w-full rounded-lg shadow-md" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[
          { src: dom1, alt: "dom1" },
          { src: dom2, alt: "dom2" },
          { src: dom3, alt: "dom3" },
          { src: dom4, alt: "dom4" },
          { src: dom5, alt: "dom5" },
          { src: dom6, alt: "dom6" },
          { src: dom7, alt: "dom7" },
          { src: dom8, alt: "dom8" }
        ].map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-md" data-aos="fade-up">
        <img className="w-full h-72 object-cover" src={image.src} alt={image.alt} />
        <p className="absolute bottom-0 left-0 right-0 p-4 text-gray-700 dark:text-gray-300">Short description here</p>
        </div>
        ))}
        </div>
        <Comments />
        <footer className="bg-gray-800 text-gray-200 py-4 text-center">
        <div className="container mx-auto">
        <p>© {new Date().getFullYear()} CGI Studio. All rights reserved.</p>
        <a href="https://facebook.com" className="text-indigo-500 hover:text-indigo-700 mx-2">Facebook</a>
        </div>
        </footer>
        </section>
        );
        };
        
        export default HomePage;
