import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (

        <div
            className="card-container w-full h-[450px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`card relative w-full h-full ${isFlipped ? 'flipped' : ''}`}>
                {/* Front of Card */}
                <motion.div
                    className="card-front bg-white rounded-2xl shadow-2xl !overflow-hidden"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), url(${project.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80" />

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                        {/* Top Section - Optional Tags */}
                        <div className="flex flex-wrap gap-2">
                        </div>

                        {/* Bottom Section */}
                        <div className="space-y-3">
                            <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-200 line-clamp-2 font-medium">
                                {project.description}
                            </p>

                            {/* Preview Technologies */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.technologies.slice(0, 3).map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs font-medium text-white border border-white/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs font-medium text-white border border-white/20">
                                        +{project.technologies.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* Back of Card */}
                <motion.div
                    className="card-back bg-gradient-to-br from-purple-600 to-indigo-600 !rounded-2xl  pt-6 px-8 overflow-y-auto "
                    style={{
                        boxShadow: 'inset 0 0 80px rgba(255,255,255,0.1)',
                    }}
                >
                    {/* Header Section */}
                    <div className="relative mb-6">
                        <div className="absolute !overflow-hidden -top-6 -left-6 w-20 h-20 rounded-full bg-white/10 blur-2xl"></div>
                        <h3 className="text-3xl font-bold text-white mb-2 relative">
                            {project.title}
                        </h3>
                        <div className="loader-line"></div>

                    </div>

                    {/* Description Section */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
                        <p className="text-white/90 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Technologies Section */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 
                                        backdrop-blur-md rounded-lg text-sm font-medium text-white/90 
                                        border z-[20] h-[30px] min-w-[50px] border-white/10 shadow-lg hover:shadow-white/25 hover:scale-105 transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                        <div className="flex gap-4">
                            {project.githubLink && (
                                <motion.a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group z-[20] relative"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="absolute  -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <FaGithub size={30} color='white' className="text-white relative" />
                                </motion.a>
                            )}
                            <motion.a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <FaExternalLinkAlt size={30} className="text-white relative" />
                            </motion.a>
                        </div>

                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectCard;