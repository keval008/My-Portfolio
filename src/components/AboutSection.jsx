import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
function AboutSection() {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi i'm
        <br />
        <span className="bg-white px-1 italic">Wawa Sensei</span>
      </h1>
      <motion.p whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }} initial={{ opacity: 0, y: 25 }} className="text-lg  text-gray-600 mt-4">
        I Make Websites to help developers
        <br />
        Learn How to build webs
      </motion.p>
      <motion.button
        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }} initial={{ opacity: 0, y: 25 }}
        className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
      >
        Contact Me
      </motion.button>
    </Section>
  );
}

export default AboutSection;
