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
          { src: dom1, alt: "dom1", aos: "fade-up" },
          { src: dom2, alt: "dom2", aos: "fade-down" },
          { src: dom3, alt: "dom3", aos: "fade-right" },
          { src: dom4, alt: "dom4", aos: "fade-left" },
          { src: dom5, alt: "dom5", aos: "flip-up" },
          { src: dom6, alt: "dom6", aos: "flip-down" },
          { src: dom7, alt: "dom7", aos: "zoom-in" },
          { src: dom8, alt: "zoom-out", aos: "zoom-out" }
        ].map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md" data-aos={image.aos}>
            <img className="w-auto h-60 object-cover" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <section className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto flex flex-col items-center max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-4" data-aos="fade-up">Our Partner</h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Tomev Timber Frames</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Tomev Timber Frames are trusted builders nationwide. Their attention to detail is second to none, ensuring that every job is thoroughly planned and inspected at every point to meet your specifications.</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">They work nationwide, providing support all around the UK. If you're looking for high-quality timber frames and reliable service, Tomev Timber Frames is your go-to choice.</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">For more information, visit their website: <a href="https://www.tomevltd.co.uk" className="text-indigo-500 hover:underline">Tomev Timber Frames</a></p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Telefon: 07503 557871</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">"CGI Studio and Tomev Timber Frames are trusted builders nationwide, renowned for their meticulous attention to detail and unwavering dedication to every project. Rest assured that each job is meticulously planned and inspected at every stage to ensure it meets your specifications. Whether you're seeking innovative architectural designs or high-quality timber frames, our teams are here to support you throughout the UK. With CGI Studio and Tomev Timber Frames, you can count on exceptional craftsmanship and comprehensive service tailored to your needs. Let's collaborate to bring your vision to life."</p>
            </div>
          </div>
        </div>
      </section>
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
