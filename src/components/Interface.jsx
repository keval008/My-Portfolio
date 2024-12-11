import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPostgresql, SiMysql, SiSocketdotio, SiMaterialdesign, SiMaterialdesignicons, SiUikit, SiMui, SiRedux } from "react-icons/si";
import { useSpring, animated } from "react-spring";
import { Autoplay, EffectCards } from 'swiper/modules';
import ProjectCard from './Projectcard';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};


const ProjectsSection = () => {
  const projects = [
    {
      title: "My Jewlex",
      description: "E-commerce website for buying and selling jewelry with Features like wishlist , cart , communication and more",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "Node.js"],
      image: "https://myjewlex.com/logo.png",
      githubLink: "",
      liveLink: "https://myjewlex.com/"
    },
    {
      title: "Freshment App",
      description: "A Placement Platform For Students And Companies",
      technologies: ["React", "Node.js", "Tailwind CSS", "php", "MySQL"],
      image: "https://freshmentapp.com/static/media/freshmentLogo.7f04498941f29ed4c6bbb8fba5fc4b82.svg",
      githubLink: "",
      liveLink: "https://freshmentapp.com/"
    },
    {
      title: "EduConnect Pro By Freshment",
      description: "A Busienss to Business Platform For Colleges And Universities",
      technologies: ["React", "Node.js", "Bootstrap 4", "php", "MySQL"],
      image: "https://educonnectpro.in/static/media/freshmentLogo1.0a7fbdf64535c15236da.png",
      githubLink: "",
      liveLink: "https://educonnectpro.in/"
    },
    {
      title: "My Portfolio",
      description: "A Personal Portfolio Website",
      technologies: ["Vite JS", "Tailwind CSS", "three JS"],
      image: "/keval.png",
      githubLink: "https://github.com/keval008/My-Portfolio",
      liveLink: "https://my-portfolio-tau-eight-54.vercel.app/"
    },

  ];

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Some Of My Projects And The Projects I Worked On
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 8000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          className="px-10 !overflow-visible"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <div className="text-center flex flex-col items-center">
        <motion.h1
          className="text-6xl font-extrabold leading-snug text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hi, I'm
        </motion.h1>
        <motion.h1
          className="text-6xl font-extrabold leading-snug text-gray-900 mb-6"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent px-2 italic">
            Keval Dhandhukiya
          </span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mt-4 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          I am a full-stack web developer<br />
          passionate about growing my knowledge and skills
        </motion.p>
        <motion.button
          className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4 }}
        >
          Contact Me
        </motion.button>
      </div>
    </Section>
  );
};

const skills = [
  { title: "React Js", icon: <FaReact className="text-blue-500 w-[64px] h-[64px]" /> },
  { title: "Node Js", icon: <FaNodeJs className="text-green-500 w-[64px] h-[64px]" /> },
  { title: "HTML", icon: <FaHtml5 className="text-orange-500 w-[64px] h-[64px]" /> },
  { title: "CSS", icon: <FaCss3Alt className="text-blue-600 w-[64px] h-[64px]" /> },
  { title: "JavaScript", icon: <FaJs className="text-yellow-500 w-[64px] h-[64px]" /> },
  { title: "Bootstrap", icon: <FaBootstrap className="text-purple-600 w-[64px] h-[64px]" /> },
  { title: "Tailwind", icon: <SiTailwindcss className="text-teal-500 w-[64px] h-[64px]" /> },
  { title: "Next.js", icon: <SiNextdotjs className="text-black w-[64px] h-[64px]" /> },
  { title: "Git & GitHub", icon: <FaGitAlt className="text-red-500 w-[64px] h-[64px]" /> },
  { title: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 w-[64px] h-[64px]" /> },
  { title: "MySQL", icon: <SiMysql className="text-blue-400 w-[64px] h-[64px]" /> },
  { title: "Soket.io", icon: <SiSocketdotio className="text-black w-[64px] h-[64px]" /> },
  { title: "Material UI", icon: <SiMui className="text-blue-600 w-[64px] h-[64px]" /> },
  { title: "Redux", icon: <SiRedux className="text-purple-600 w-[64px] h-[64px]" /> },
];

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
      className="bg-gradient-to-br w-full from-white to-gray-100 rounded-full py-3 px-3 flex flex-col items-center space-y-3 transition-transform duration-300 hover:shadow-xl"
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
const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"} className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10 relative text-glow">
          My Playground

        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full flex items-center !overflow-visible flex-col"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="flex items-center w-full justify-center">
              <SkillCard skill={skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
