import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../Assets/projects/projekt1/FRONT ELEVATION.png';


const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Type A - OAK FRAME HOUSE",
      description: "Experience the perfect blend of elegance and comfort in this stunning oak frame house",
      images: [img1]
    },
    {
      id: 2,
      title: "Cozy Cottage",
      description: "A cozy cottage with a rustic charm and modern amenities.",
      images: ["https://via.placeholder.com/500x300"]
    },
    {
      id: 3,
      title: "Urban Apartment",
      description: "An urban apartment with a chic and contemporary design.",
      images: ["https://via.placeholder.com/500x300"]
    }
    // Dodaj więcej projektów tutaj
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-10" data-aos="fade-up">Our Projects</h2>
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-200 mb-10" data-aos="fade-up">Find our beautiful project that suits your pocket</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ id, title, description, images }) => {
  return (
    <Link to={`/projects/${id}`} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md" data-aos="fade-up">
      <img src={images[0]} alt={title} className="w-full h-40 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="block w-full mt-4 text-center bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md">View Gallery</div>
    </Link>
  );
};

export default Projects;
