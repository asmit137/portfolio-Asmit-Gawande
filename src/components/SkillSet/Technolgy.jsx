import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa"; // Technology icons
import { SiTailwindcss, SiJavascript,  SiPython, SiMysql, SiWebpack } from "react-icons/si"; // Corrected programming language icons import
import React from "react";

export default function Technologies() {
    return (
        <section className="py-16 bg-gray-900">
            <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-10 text-white">
                Technologies
            </h2>
            <div className="grid gap-6 sm:grid-cols-3 max-w-7xl mx-auto px-4">
                {/* Frontend Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cursor-pointer">
                    <FaReact className="text-blue-400 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300 cursor-pointer">Frontend Development</h3>
                    <p className="text-gray-400">React, Tailwind CSS, JavaScript</p>
                </div>

                {/* Backend Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl cursor-pointer duration-300">
                    <FaNodeJs className="text-green-400 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">Backend Development</h3>
                    <p className="text-gray-400">Node.js, Express.js</p>
                </div>

                {/* Database Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cursor-pointer">
                    <FaDatabase className="text-yellow-400 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">Database Management</h3>
                    <p className="text-gray-400">MongoDB, PostgreSQL</p>
                </div>

                {/* HTML Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cursor-pointer">
                    <FaHtml5 className="text-red-600 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">HTML</h3>
                    <p className="text-gray-400">HTML5, Semantic Markup</p>
                </div>

                {/* CSS Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cursor-pointer">
                    <FaCss3Alt className="text-blue-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">CSS</h3>
                    <p className="text-gray-400">CSS3, Flexbox, Grid</p>
                </div>

                {/* JavaScript Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cursor-pointer">
                    <SiJavascript className="text-yellow-400 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">JavaScript</h3>
                    <p className="text-gray-400">ES6, DOM Manipulation</p>
                </div>

                {/* Git Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cursor-pointer">
                    <FaGitAlt className="text-orange-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">Git</h3>
                    <p className="text-gray-400">Version Control, GitHub</p>
                </div>

                {/* Webpack Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cursor-pointer">
                    <SiWebpack className="text-pink-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">Webpack</h3>
                    <p className="text-gray-400">Bundler, Module Loader</p>
                </div>

                {/* Tailwind CSS Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cu\">
                    <SiTailwindcss className="text-blue-400 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">Tailwind CSS</h3>
                    <p className="text-gray-400">Utility-First CSS Framework</p>
                </div>

                {/* Java Programming Language Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300 cursor-pointer">
                    
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">Java</h3>
                    <p className="text-gray-400">Object-Oriented Programming</p>
                </div>

                {/* Python Programming Language Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300">
                    <SiPython className="text-blue-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">Python</h3>
                    <p className="text-gray-400">Scripting, Data Science</p>
                </div>

                {/* SQL Programming Language Card */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl duration-300">
                    <SiMysql className="text-blue-600 text-5xl mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white hover:text-black transition-colors duration-300">SQL</h3>
                    <p className="text-gray-400">Database Querying</p>
                </div>
            </div>
        </section>
    );
}
