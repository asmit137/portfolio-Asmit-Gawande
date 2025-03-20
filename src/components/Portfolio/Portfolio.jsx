import React from 'react';
import { FaGithub } from 'react-icons/fa'; // For GitHub icon

import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      name: 'ReactJS Shopping Cart Application',
      description: "The ReactJS Shopping Cart Application is a simple e-commerce project built with React.js, Material UI, and Vite, allowing users to browse products, add items to the cart, update quantities, remove items, and proceed to checkout. It uses React Router for navigation, Context API for state management, and LocalStorage for cart persistence. The app features a responsive UI, real-time cart updates, and a checkout confirmation message, making it an efficient and user-friendly shopping experience. Optimized for GitHub Pages deployment, it ensures fast performance and seamless interaction.",
      githubLink: "https://github.com/asmit137/ReactJS-Shopping-Cart-Project.git",
      demoLink: "https://asmit137.github.io/ReactJS-Shopping-Cart-Project/",
      projectLink: "https://asmit137.github.io/ReactJS-Shopping-Cart-Project/", 
    },
    {
      name: 'Spotify Clone Web',
      description: "This project is a Spotify Clone Website built using HTML, CSS, and JavaScript, designed to replicate the core aesthetics and functionality of Spotify's music streaming platform. It features a responsive layout with a sleek navigation bar, a dynamic homepage showcasing playlists and recommendations, and a functional music player with controls for play, pause, and skip. Interactive elements like hover effects, scrollable playlists, and category sections enhance the user experience. This project is an excellent demonstration of frontend development skills, showcasing expertise in creating engaging, user-friendly interfaces and implementing dynamic features.",
      githubLink: "https://github.com/asmit137/Spotify-website-clone.git",
      demoLink: "https://github.com/asmit137/Spotify-website-clone.git",
      projectLink: "https://github.com/asmit137/Spotify-website-clone.git", 
    },
    {
      name: 'Netflix Home Page',
      description: "This project is a desktop-optimized clone of the Netflix home page, built using HTML, CSS, and JavaScript. It features a sticky navigation bar with interactive menu options, a hero section with a prominent banner and action buttons, and multiple horizontal carousels showcasing movie categories like Trending Now and Top Picks. The design incorporates CSS animations for smooth hover effects, responsive layout with Flexbox and Grid, and JavaScript functionality for carousel navigation and interactivity. The footer includes links and social media icons, completing a visually appealing and user-friendly interface resembling Netflix's iconic home page.",
      githubLink: 'https://github.com/asmit137/Project-Netflix-Home-Page.git',
      demoLink: 'https://asmit137.github.io/Project-Netflix-Home-Page/',
      projectLink: 'https://asmit137.github.io/Project-Netflix-Home-Page/', 
    },
    {
      name: 'BG Changer',
      description: "This project is a simple and interactive Background Color Changer application built using React. The application allows users to dynamically change the background color of the screen with a click of a button or based on user input. It leverages React's state management to update the background color in real-time and provides a user-friendly interface to choose from a predefined palette or enter custom color codes. This project is ideal for learning React concepts like state, props, event handling, and dynamic styling, while also offering a fun and visually engaging experience.",
      githubLink: 'https://github.com/asmit137/BGChanger.git',
      demoLink: 'https://bg-changer-tau-pied.vercel.app/',
      projectLink: 'https://bg-changer-tau-pied.vercel.app/', 
    },
    {
      name: 'InternShip Assignment',
      description: 'This project is a InternShip Assignment designed to showcase a visually appealing and responsive user interface built using HTML, CSS, and optionally JavaScript. It serves as a template for modern web applications, featuring a structured layout with a navigation bar, hero section, content areas, and a footer. The site demonstrates various web design elements such as animations, hover effects, responsive grids, and interactive components, tailored for a seamless user experience across different screen sizes. This project is ideal for presenting frontend development skills and serves as a foundation for creating fully functional websites.',
      githubLink: 'https://github.com/asmit137/internshipassignment.git',
      demoLink: 'https://asmit137.github.io/internshipassignment/',
      projectLink: 'https://asmit137.github.io/internshipassignment/', 
    },
    {
      name: 'Spotify Clone Web',
      description: "This project is a Spotify Clone Website built using HTML, CSS, and JavaScript, designed to replicate the core aesthetics and functionality of Spotify's music streaming platform. It features a responsive layout with a sleek navigation bar, a dynamic homepage showcasing playlists and recommendations, and a functional music player with controls for play, pause, and skip. Interactive elements like hover effects, scrollable playlists, and category sections enhance the user experience. This project is an excellent demonstration of frontend development skills, showcasing expertise in creating engaging, user-friendly interfaces and implementing dynamic features.",
      githubLink: "https://github.com/asmit137/Spotify-website-clone.git",
      demoLink: "https://github.com/asmit137/Spotify-website-clone.git",
      projectLink: "https://github.com/asmit137/Spotify-website-clone.git", 
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-10 text-white">
        My Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-3 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300"
          >
          
            <Link to={project.projectLink} className="block mb-4 text-white text-xl font-bold hover:text-black">
              {project.name}
            </Link>

            <p className="text-gray-400 mb-4">{project.description}</p>
            
           
            <div className="flex justify-center space-x-4">
              
              <Link
                to={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-full space-x-2 transition duration-300"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </Link>
         
              <Link
                to={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full space-x-2 transition duration-300"
              >
               
                <span>Live Site</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>

  );
}
