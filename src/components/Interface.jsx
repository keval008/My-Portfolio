import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiSocketdotio,
  SiMaterialdesign,
  SiMaterialdesignicons,
  SiUikit,
  SiMui,
  SiRedux,
} from "react-icons/si";
import { useSpring, animated } from "react-spring";
import { Autoplay, EffectCards } from "swiper/modules";
import ProjectCard from "./Projectcard";
import "swiper/css";
import "swiper/css/effect-cards";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8  mx-auto
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

export const Interface = ({ setSection, section }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection section={section} />
      <ProjectsSection section={section} />
      <ContactSection />
    </div>
  );
};

const ProjectsSection = ({ section }) => {
  const projects = [
    {
      title: "My Jewlex",
      shortDescription: "E-commerce jewelry platform",
      description: `My Jewlex is a sophisticated e-commerce platform specifically designed for jewelry enthusiasts.

Key Features:
• User Authentication & Profiles
  - Secure login/signup system
  - Personalized user dashboards
  - Profile management with order history

• Shopping Experience
  - Advanced product filtering and search
  - Wishlist functionality
  - Real-time shopping cart
  - Size guide and product comparisons
  

• Customer Interaction
  - Real-time chat between buyers and sellers and public communication
  - Product reviews and ratings
  - Email notifications for orders
  - Automated order status updates

• Payment & Security
  - Secure payment gateway integration
  - Multiple payment options
  - SSL encryption for transactions
  - Fraud detection system

• Admin Features
  - Comprehensive dashboard
  - Inventory management
  - Sales analytics
  - Customer behavior tracking

Technical Highlights:
- Optimized image loading for jewelry showcase
- Responsive design for all devices
- SEO optimization
- Performance metrics monitoring
- Regular security updates`,
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind",
        "socket.io",
        "Node.js",
        "zustand",
      ],
      image: "https://myjewlex.com/logo.png",
      githubLink: "",
      liveLink: "https://myjewlex.com/",
    },
    {
      title: "Freshment App",
      shortDescription: "Student placement platform",
      description: `Freshment App is a comprehensive placement platform bridging the gap between students and companies.

Key Features:
• Student Module
  - Professional profile builder
  - Resume parser and generator
  - Skill assessment tools
  - Interview preparation resources
  - Application tracking system

• Company Module
  - Company profile management
  - Job posting and management
  - Candidate filtering system
  - Interview scheduling tool
  - Offer letter generation

• College Module
  - Placement statistics dashboard
  - Student performance analytics
  - Company visit scheduler
  - Batch management system
  - Document verification

• Communication
  - Automated email notifications
  - In-app messaging system
  - Bulk communication tools
  - Event announcements
  - Interview feedback system

Technical Highlights:
- Real-time updates using WebSocket
- Advanced search algorithms
- Data analytics dashboard
- Mobile-responsive design
- PDF generation for reports
- Automated backup system`,
      technologies: ["React", "Node.js", "Tailwind CSS", "PHP", "MySQL"],
      image:
        "https://freshmentapp.com/static/media/freshmentLogo.7f04498941f29ed4c6bbb8fba5fc4b82.svg",
      githubLink: "",
      liveLink: "https://freshmentapp.com/",
    },
    {
      title: "EduConnect Pro By Freshment",
      shortDescription: "B2B education platform",
      description: `EduConnect Pro is an innovative B2B platform facilitating seamless connections between educational institutions.

Key Features:
• Institution Management
  - Comprehensive profile system
  - Resource sharing platform
  - Document management
  - Staff directory
  - Event calendar

• Collaboration Tools
  - Inter-institution messaging
  - Project collaboration spaces
  - Resource booking system
  - Virtual meeting integration
  - Shared calendar system

• Analytics & Reporting
  - Custom report generator
  - Performance metrics
  - Resource utilization tracking
  - Engagement analytics
  - Automated reporting schedules

• Integration Capabilities
  - API integration with existing systems
  - Data import/export tools
  - Single sign-on support
  - Third-party app connectivity
  - Automated synchronization

Technical Highlights:
- Microservices architecture
- Real-time collaboration features
- Advanced security protocols
- Custom API development
- Scalable infrastructure
- Automated backup systems`,
      technologies: ["React", "Node.js", "Bootstrap 4", "PHP", "MySQL"],
      image:
        "https://educonnectpro.in/static/media/freshmentLogo1.0a7fbdf64535c15236da.png",
      githubLink: "",
      liveLink: "https://educonnectpro.in/",
    },
    {
      title: "My Portfolio",
      shortDescription: "3D portfolio website",
      description: `An immersive 3D portfolio website showcasing my projects and skills with cutting-edge web technologies.

Key Features:
• Interactive 3D Elements
  - Custom 3D models and animations
  - Dynamic camera movements
  - Interactive particle systems
  - Performance-optimized rendering
  - Adaptive graphics quality

• Project Showcase
  - Detailed project galleries
  - Live demo integration
  - GitHub repository links
  - Technical documentation
  - Case studies

• User Experience
  - Smooth page transitions
  - Responsive 3D elements
  - Interactive UI components
  - Custom loading animations
  - Cross-browser compatibility

• Performance Optimization
  - Lazy loading implementation
  - Asset compression
  - Code splitting
  - Cache management
  - Progressive enhancement

Technical Highlights:
- Three.js for 3D rendering
- React for UI components
- Custom shader implementations
- Mobile-first approach
- SEO optimization
- Analytics integration`,
      technologies: [
        "Vite JS",
        "Tailwind CSS",
        "Three.js",
        "React Three Fiber",
        "Framer Motion",
        "GSAP",
      ],
      image: "/keval.png",
      githubLink: "https://github.com/keval008/My-Portfolio",
      liveLink: "https://my-portfolio-tau-eight-54.vercel.app/",
    },
  ];

  return (
    <Section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center w-full mb-12">
          <h2
            className={`text-5xl !overflow-visible text-overflow-clip font-bold text-center pb-4 relative  text-glow head`}
          >
            <span>Some&nbsp;</span>
            <span>Of&nbsp;</span>
            <span>Mine&nbsp;</span>
            <span>And&nbsp;</span>
            <span>The&nbsp;</span>
            <span>Projects&nbsp;</span>
            <span>I&nbsp;</span>
            <span>Worked&nbsp;</span>
            <span>On</span>
          </h2>
        </div>

        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          slidesPerView={3}
          spaceBetween={30}
          style={{ overflow: "visible" }}
          className="px-10 "
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

const AboutSection = ({ setSection }) => {
  return (
    <Section>
      <div className="text-center flex flex-col items-center">
        <motion.h1
          className="text-6xl font-extrabold leading-snug text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm
        </motion.h1>
        <motion.h1
          className="text-6xl font-extrabold leading-snug text-gray-900 mb-6"
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 1,
            bounce: 0.3,
          }}
        >
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent px-2 italic">
            Keval Dhandhukiya
          </span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mt-4 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          I am a full-stack web developer
          <br />
          passionate about growing my knowledge and skills
        </motion.p>
        <motion.button
          onClick={() => {
            setSection(3);
          }}
          className="mt-10 bg-gradient-to-r animate-bounce from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Contact Me
        </motion.button>
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "React Js",
    icon: <FaReact className="text-blue-500 w-[64px] h-[64px]" />,
  },
  {
    title: "Node Js",
    icon: <FaNodeJs className="text-green-500 w-[64px] h-[64px]" />,
  },
  {
    title: "HTML",
    icon: <FaHtml5 className="text-orange-500 w-[64px] h-[64px]" />,
  },
  {
    title: "CSS",
    icon: <FaCss3Alt className="text-blue-600 w-[64px] h-[64px]" />,
  },
  {
    title: "JavaScript",
    icon: <FaJs className="text-yellow-500 w-[64px] h-[64px]" />,
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600 w-[64px] h-[64px]" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="text-teal-500 w-[64px] h-[64px]" />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="text-black w-[64px] h-[64px]" />,
  },
  {
    title: "Git & GitHub",
    icon: <FaGitAlt className="text-red-500 w-[64px] h-[64px]" />,
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400 w-[64px] h-[64px]" />,
  },
  {
    title: "MySQL",
    icon: <SiMysql className="text-blue-400 w-[64px] h-[64px]" />,
  },
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
      <animated.div
        style={style}
        className="relative flex items-center justify-center group"
      >
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
const SkillsSection = ({ section }) => {
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className="container mx-auto flex flex-col items-center justify-center !overflow-visible"
      >
        <h2
          className={`text-6xl mb-12 !overflow-visible text-overflow-clip font-bold text-center pb-4 relative  text-glow ${
            section === 1 ? "head block" : "hidden"
          }`}
        >
          <span>My </span>
          <span> </span>
          <span>Play</span>
          <span>g</span>
          <span>r</span>
          <span>o</span>
          <span>u</span>
          <span>n</span>
          <span>d</span>
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full !overflow-visible flex items-center flex-col"
        >
          {skills.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center w-full justify-center"
            >
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
