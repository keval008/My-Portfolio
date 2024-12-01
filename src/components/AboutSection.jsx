import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <Section>
      <div className="text-center flex flex-col items-center">
        <motion.h1
          className="text-6xl font-extrabold leading-snug text-gray-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm
          <br />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent px-2 italic">
            Keval Dhandhukiya
          </span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mt-4 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I am a full-stack web developer<br />
          passionate about growing my knowledge and skills.
        </motion.p>
        <motion.button
          className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Contact Me
        </motion.button>
      </div>
    </Section>
  );
}

export default AboutSection;
