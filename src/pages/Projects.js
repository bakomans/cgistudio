import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importujemy Link
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-10" data-aos="fade-up">Our Projects</h2>
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-200 mb-10" data-aos="fade-up">Find our beautiful project that suits your pocket</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Modern Loft"
            description="A sleek and modern loft design with minimalist aesthetic."
            image="https://via.placeholder.com/500x300"
          />
          <ProjectCard
            title="Modern Loft"
            description="A sleek and modern loft design with minimalist aesthetic."
            image="https://via.placeholder.com/500x300"
          />
          <ProjectCard
            title="Modern Loft"
            description="A sleek and modern loft design with minimalist aesthetic."
            image="https://via.placeholder.com/500x300"
          />
          <ProjectCard
            title="Modern Loft"
            description="A sleek and modern loft design with minimalist aesthetic."
            image="https://via.placeholder.com/500x300"
          />
          <ProjectCard
            title="Modern Loft"
            description="A sleek and modern loft design with minimalist aesthetic."
            image="https://via.placeholder.com/500x300"
          />
          <ProjectCard
            title="Modern Loft"
            description="A sleek and modern loft design with minimalist aesthetic."
            image="https://via.placeholder.com/500x300"
          />
          {/* Dodaj więcej kart tutaj */}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md" data-aos="fade-up">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <Link to="/login" className="block w-full mt-4 text-center bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md">Buy Now</Link>
    </div>
  );
};

export default Projects;