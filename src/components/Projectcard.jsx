import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTags,
  FaInfoCircle,
} from "react-icons/fa";
import { Modal } from "antd";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
      0 0 30px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    perspective: 2000px;
  }

  .ant-modal-header {
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 24px;
    border-radius: 24px 24px 0 0;
  }

  .ant-modal-body {
    padding: 0;
    transform-style: preserve-3d;
  }

  .modal-content {
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .section-card {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .tech-badge {
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.8),
      rgba(168, 85, 247, 0.8)
    );
    backdrop-filter: blur(4px);
    transform: translateZ(25px);
  }
`;

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="card-container w-full h-[450px]"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="card-front">
            <div
              className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl"
              style={{
                background: `linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0, 0, 0, 0.9)), url(${project.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2 relative">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-200 line-clamp-2 mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card-back p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              {project.title}
            </h3>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
              <p className="text-white/90 leading-relaxed">
                {project.description.slice(0, 100) + "..."}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={showModal}
                  className="px-3 pb-1.5 text-base text-white/90 bg-white/10 
                            backdrop-blur-sm rounded-full border border-white/20"
                >
                  view description
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm text-white/90 bg-white/10  backdrop-blur-sm rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="absolute bottom-6 left-6 right-6 flex justify-between 
                        border-t border-white/10 pt-4"
            >
              <div className="flex gap-4">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                )}
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaExternalLinkAlt size={24} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StyledModal
        title={
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </span>
          </motion.div>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
        centered
      >
        <motion.div className="modal-content p-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-64 rounded-xl overflow-hidden section-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain bg-no-repeat"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-white/90">{project.shortDescription}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-card p-6 space-y-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaInfoCircle className="text-indigo-500 text-xl" />
              <h3 className="text-xl font-semibold text-gray-800">
                About Project
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-card p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaTags className="text-indigo-500 text-xl" />
              <h3 className="text-xl font-semibold text-gray-800">
                Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-badge px-4 py-2 text-sm text-white rounded-full"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-end space-x-4 pt-4"
          >
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl transform-gpu "
              >
                <FaGithub className="text-xl" />
                <span>View Code</span>
              </a>
            )}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl transform-gpu "
            >
              <FaExternalLinkAlt className="text-xl" />
              <span>Live Demo</span>
            </a>
          </motion.div>
        </motion.div>
      </StyledModal>
    </>
  );
};

export default ProjectCard;
