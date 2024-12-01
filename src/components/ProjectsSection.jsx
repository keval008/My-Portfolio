import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import ProjectCard from './Projectcard';
import 'swiper/css';
import 'swiper/css/effect-cards';

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
            technologies: ["React JS", "Tailwind CSS", "three JS"],
            image: "https://via.placeholder.com/300x200?text=AI+Companion",
            githubLink: "#",
            liveLink: "#"
        },
        {
            title: "E-Commerce Microservices",
            description: "Scalable e-commerce platform with microservices architecture",
            technologies: ["React", "Node.js", "Docker", "Kubernetes"],
            image: "https://via.placeholder.com/300x200?text=E-Commerce",
            githubLink: "#",
            liveLink: "#"
        },
        {
            title: "Real-time Chat Application",
            description: "WebSocket-based chat app with end-to-end encryption",
            technologies: ["React", "Socket.io", "Express", "MongoDB"],
            image: "https://via.placeholder.com/300x200?text=Chat+App",
            githubLink: "#",
            liveLink: "#"
        }
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
                    autoplay={{ delay: 1000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    className="px-10"
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

export default ProjectsSection;
