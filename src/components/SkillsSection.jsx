import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { useSpring, animated } from "react-spring";

function SkillsSection() {
  const skills = [
    { title: "React Js", icon: <FaReact className="text-blue-500 w-16 h-16" /> },
    { title: "Node Js", icon: <FaNodeJs className="text-green-500 w-16 h-16" /> },
    { title: "HTML", icon: <FaHtml5 className="text-orange-500 w-16 h-16" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-600 w-16 h-16" /> },
    { title: "JavaScript", icon: <FaJs className="text-yellow-500 w-16 h-16" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-purple-600 w-16 h-16" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-teal-500 w-16 h-16" /> },
    { title: "Next.js", icon: <SiNextdotjs className="text-black w-16 h-16" /> },
    { title: "Git & GitHub", icon: <FaGitAlt className="text-red-500 w-16 h-16" /> },
    { title: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 w-16 h-16" /> },
  ];

  return (
    <Section>
      <motion.div whileInView={"visible"} className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">My Playground</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full flex items-center !overflow-visible flex-col"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <SkillCard skill={skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Section>
  );
}

const SkillCard = ({ skill }) => {
  const [style, setStyle] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    setStyle({ x, y });
  };

  const handleMouseLeave = () => setStyle({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-gradient-to-br from-white to-gray-100 rounded-full py-3 px-3 flex flex-col items-center space-y-3 transition-transform duration-300 hover:shadow-xl"
    >
      <animated.div style={style} className="relative flex items-center justify-center group">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="flex items-center justify-center"
        >
          {skill.icon}
        </motion.div>
      </animated.div>
      <h3 className="text-lg font-bold  text-gray-800 transition-colors duration-300 hover:group-[shadow-xl] hover:text-purple-600">
        {skill.title}
      </h3>
    </motion.div>
  );
};

export default SkillsSection;
