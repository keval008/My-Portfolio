import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

function SkillsSection() {
  const skills = [
    {
      title: "React Js",
      level: 90,
    },
    {
      title: "Html",
      level: 90,
    },
    {
      title: "Css",
      level: 80,
    },
    {
      title: "Javascript",
      level: 80,
    },
    {
      title: "Bootstrap",
      level: 90,
    },
    {
      title: "Tailwind",
      level: 90,
    },
    {
      title: "Next Js",
      level: 90,
    },
    {
      title: "Git & Github",
      level: 90,
    },
  ];

  const languages = [
    {
      title: "English",
      level: 70,
    },
    {
      title: "Gujarati",
      level: 80,
    },
    {
      title: "Hindi",
      level: 70,
    },
  ];
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="w-64">
              <motion.h3 initial={{ opacity: 0 }} variants={{ visible: { opacity: 1, transition: { duration: 1, delay: 1 + index * 0.2 } } }} className="text-xl font-bold text-gray-80">{skill.title}</motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div initial={{ scaleX: 0, originX: 0 }} variants={{ visible: { scaleX: 1, transition: { duration: 1, delay: 1 + index * 0.2 } } }} className="h-full bg-indigo-600 rounded-full" style={{ width: `${skill.level}%` }}></motion.div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-8">Languages</h2>
          <div className="mt-8 space-y-4">
            {languages.map((language, index) => (
              <div key={index} className="w-64">
                <motion.h3 initial={{ opacity: 0 }} variants={{ visible: { opacity: 1, transition: { duration: 1, delay: 1 + index * 0.2 } } }} className="text-xl font-bold text-gray-80">{language.title}</motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div initial={{ scaleX: 0, originX: 0 }} variants={{ visible: { scaleX: 1, transition: { duration: 1, delay: 2 + index * 0.2 } } }} className="h-full bg-indigo-600 rounded-full" style={{ width: `${language.level}%` }}></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export default SkillsSection;
