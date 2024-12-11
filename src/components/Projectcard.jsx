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
                <div
                    className="card-front bg-white rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                </div>

                {/* Back of Card */}
                <div className="card-back bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 overflow-y-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-white mb-4">{project.description}</p>

                    <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        {project.githubLink &&
                            <motion.a
                                href={project.githubLink || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`GitHub link for ${project.title}`}
                                whileHover={{ scale: 1.1 }}
                                className="text-white hover:text-gray-200"
                            >
                                <FaGithub size={30} />
                            </motion.a>}
                        <motion.a
                            href={project.liveLink || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live link for ${project.title}`}
                            whileHover={{ scale: 1.1 }}
                            className="text-white hover:text-gray-200"
                        >
                            <FaExternalLinkAlt size={30} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;