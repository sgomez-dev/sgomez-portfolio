import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFreeCodeCamp,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";
import projectImage7 from "../assets/project7.png";
import projectImage8 from "../assets/project8.png";

import { RiReactjsLine, RiGithubFill, RiJavascriptFill } from "react-icons/ri";
import { TbBrandAws, TbBrandPython, TbBrandDocker, TbBrandTypescript, TbBrandTailwind } from "react-icons/tb";
import { SiMongodb,SiKubernetes, SiPostman, SiJenkins } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#bio", label: "Bio" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work Experience" },
  { href: "#education", label: "Education" },
  { href: "#certification", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const HERO = {
  name: "SANTIAGO GOMEZ DE LA TORRE ROMERO",
  greet: "Hello there! 👋🏻",
  description:
    "I am a computer engineer, actively seeking technology and web development projects where I can contribute proactively. My focus is on designing digital solutions that balance functionality and design. Currently, I am deepening my knowledge in web development to refine my skills and pursue new professional challenges.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Professional Homepage",
    description:
      "This professional page has been carefully designed to represent who I am as a developer. Visitors can explore my work, download my resume, and access my social media profiles.",
    image: projectImage1,
    githubLink: "https://github.com/Santi1503/profesional-homepage",
    demoLink: "https://santiagogomez-one.vercel.app/#/home",
  },
  {
    id: 2,
    name: "Budget App",
    description:
      "A financial management app to track expenses, set budgets, and monitor balances. Its minimalist interface provides charts and reports for efficient spending management.",
    image: projectImage2,
    githubLink: "https://github.com/Santi1503/Budget-app",
    demoLink: "https://budget-app.sgomez.dev",
  },
  {
    id: 3,
    name: "To-Do List",
    description:
      "A task management app to organize and prioritize daily activities. Its simple interface lets users add, edit, and complete tasks, boosting productivity and focus.",
    image: projectImage3,
    githubLink: "https://github.com/Santi1503/ToDo",
    demoLink: "https://todo-app.sgomez.dev",
  },
  {
    id: 4,
    name: "Packatrack",
    description:
      "A package tracking app to streamline delivery management. Users can log deliveries, track incidents, calculate earnings, and monitor stats with a user-friendly interface.",
    image: projectImage4,
    githubLink: "https://github.com/Santi1503/Packatrack",
    demoLink: "https://packatrack.vercel.app/#/inicio-sesion",
  },
  {
    id: 5,
    name: "Skyzen",
    description:
      "A modern weather application built with React and Vite that provides real-time weather information with a intuitive user interface. The application features automatic geolocation and weather forecast.",
    image: projectImage5,
    githubLink: "https://github.com/Santi1503/StartUp",
    demoLink: "https://skyzen.sgomez.dev",
  },
  {
    id: 6,
    name: "Professional Portfolio",
    description:
      "A professional portfolio showcasing skills, projects, and experience with a modern design. Includes intro, projects, skills, and work, using React for interactivity.",
    image: projectImage6,
    githubLink: "https://github.com/Santi1503/sgomez-portfolio.git",
    demoLink: "https://sgomez.dev",
  },
  {
    id: 7,
    name: "CorvexTalk.AI",
    description:
      "A web-based text translation application enhanced with integrated artificial intelligence, utilizing the OpenAI API. The front is hosted with Vercel and the backend is hosted on AWS.",
    image: projectImage7,
    githubLink: "https://github.com/Santi1503/CorvexTalk.AI.git",
    demoLink: "https://corvextalk.sgomez.dev",
  },
  {
    id: 8,
    name: "Jenkins",
    description:
      "A Jenkins server managing a CI/CD pipeline for web app deployment, automating build, test, and deployment. Integrated with AWS for scalable cloud-based delivery.",
    image: projectImage8,
    githubLink: "https://jenkins.sgomez.dev",
    demoLink: "https://jenkins.sgomez.dev",
  },
];

export const BIO = [
  "I am Santiago Gómez de la Torre Romero, a passionate computer engineer. I began my professional journey studying Computer Engineering, where I built a solid foundation in IT and web development. Throughout my career, I’ve gained experience working in areas such as Sysadmin, IT, and software development, standing out for my self-taught approach to mastering technologies like React and Python.",
  "In 2021, I joined the FUNIBER scholarship program, contributing to teams focused on writing, development, and IT, refining both my technical and collaborative skills. In 2023, as part of the PROFER program, I delved deeper into IT and Sysadmin at the European University of the Atlantic, marking a pivotal moment in my professional growth.",
  "Today, as a multidisciplinary web developer, I combine my technical expertise with my passion for creating functional and visually appealing digital solutions. Proficient in modern technologies such as React, Node.js, and Firebase, I am dedicated to building innovative applications that enhance user experiences and efficiently solve real-world problems.",
  "I participated in the VII edition of the hackathon called Hack2Progress, organized by CIC Consulting Informático, where I strengthened my skills in innovation and working under pressure. Additionally, I am currently serving as an Organizer for the Google Developer Group (GDG) Santander, contributing to fostering the tech community and promoting collaborative learning in leading industry tools and technologies.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "3+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "3+ years",
  },
  {
    icon: <TbBrandTypescript className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "TypeScript",
    experience: "2+ years",
  },
  {
    icon: <TbBrandTailwind className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "TailwindCSS",
    experience: "2+ years",
  },
  {
    icon: <TbBrandPython className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Python",
    experience: "2+ years",
  },
  {
    icon: <TbBrandAws className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "AWS",
    experience: "1+ year",
  },
  {
    icon: <SiJenkins className="text-4xl text-neutral-400 lg:text-5xl" />,
    name: "Jenkins",
    experience: "2+ year",
  },
  {
    icon: <TbBrandDocker className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Docker",
    experience: "2+ year",
  },
  {
    icon: <SiKubernetes className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Kubernetes",
    experience: "2+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: <DiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ year",
  },
  {
    icon: <BiLogoFirebase className="text-4xl text-orange-700 lg:text-5xl" />,
    name: "Firebase",
    experience: "2+ year",
  },
  {
    icon: <SiPostman className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Postman",
    experience: "1+ year",
  },
  {
    icon: <RiGithubFill className="text-4xl text-white lg:text-5xl" />,
    name: "Github",
    experience: "4+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Organizer at Google Developer Group (GDG) Santander",
    company: "GDG Santander, Cantabria, Spain",
    duration: "November 2024 - Current",
    description:
      "Member of the Google Developers Group, responsible for organizing events to attract developers and tech enthusiasts, while fostering knowledge-sharing within the community.",
  },
  {
    title: "IT Support Technician",
    company: "Universidad Europea del Atlántico, Santander, Cantabria, Spain",
    duration: "July 2023 - July 2024",
    description:
      "Member of the IT team, responsible for implementing infrastructure solutions and providing specialized technical support to ensure operational efficiency and stability.",
  },
  {
    title: "Sysadmin & QA",
    company:
      "Fundación Universitaria Iberoamericana (FUNIBER), Santander, Cantabria, Spain",
    duration: "July 2022 - July 2023",
    description:
      "Led infrastructure solutions, ensuring seamless system integration. Managed software quality assurance (QA) to uphold product standards. Oversaw server maintenance and team project management to ensure reliability and alignment with organizational goals.",
  },
  {
    title: "Email Drafting and Guidelines Team",
    company:
      "Fundación Universitaria Iberoamericana (FUNIBER), Santander, Cantabria, Spain",
    duration: "September 2021 - July 2022",
    description:
      "As part of the FUNIBER Scholarship Program, I contributed to drafting and structuring guidelines for academic and international emails, focusing on writing and editing communications and ensuring compliance with corporate correspondence standards.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor’s Degree in Computer Engineering",
    institution:
      "Universidad Europea del Atlántico, Santander, Cantabria, Spain",
    duration: "September 2021 - June 2026",
    description:
      "The Bachelor’s Degree in Computer Engineering at Universidad Europea del Atlántico prepares professionals to solve problems analytically and strategically. In a constantly evolving technological landscape, this program equips students to play a key role in the business value chain, integrating computer science into the strategic vision of organizations and preparing them to adapt to global changes.",
  },
];
export const CERTIFICATION = [
  {
    title: "SCHNEIDER ELECTRIC Hackathon 2025 - IT Challenge",
    institution: "NUWE",
    date: "April 2025",
    url: "https://drive.google.com/file/d/15L_2k12CsYcxovvqJzgoC56p05Ypz-xC/view?usp=sharing",
  },
  {
    title: "Master en JavaScript 2025: Aprender JS, Angular, Node, Astro",
    institution: "Udemy",
    date: "March 2025",
    url: "https://drive.google.com/file/d/10FqgAblTBp76CKhc31ZnV0LW-D3kkXuB/view?usp=sharing",
  },
  {
    title: "The Web Developer Bootcamp 2025",
    institution: "Udemy",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1XQsTwo88A7isHT2pSBEuoNTFjYhzY81j/view?usp=sharing",
  },
  {
    title: "Azure DevOps: Flujos de CI/CD",
    institution: "Platzi",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1pcAssPwA5b3rep77kcW8azReUbFYXzC9/view?usp=sharing",
  },
  {
    title: "Certificado de Participación Hack2Progress",
    institution: "CIC Consulting Informático",
    date: "March 2025",
    url: "https://drive.google.com/file/d/14IbZJ8hqiM2lUPb1YBftxyfgWTB6jK-d/view?usp=sharing",
  },
  {
    title: "Machine Learning y Data Science",
    institution: "Udemy",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1isr8dB1w1pUFD4T704k2xI0R4rUrV_N4/view?usp=sharing",
  },
  {
    title: "Cómo incluir la sostenibilidad en tu estrategia de cloud computing",
    institution: "LinkedIn",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1JYMq9yOPD0qRMB4gB_Gy9SbZ3qo3ZVh8/view?usp=sharing",
  },
  {
    title: "Resolución de problemas con el pensamiento crítico",
    institution: "LinkedIn",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1G_RkQD-O23AEpnj_JKOEjJ2wYeFFFMXN/view?usp=sharing",
  },
  {
    title: "Prompt Engineering",
    institution: "LinkedIn",
    date: "March 2025",
    url: "https://drive.google.com/file/d/1SegpNdQ74TAK6TrkJDaHNcjINyoXjXY1/view?usp=sharing",
  },
  {
    title: "Master en React",
    institution: "Udemy",
    date: "December 2024",
    url: "https://drive.google.com/file/d/1woMqIXOjTDeTFTQXy2kdL33zgIMe4WYJ/view?usp=sharing",
  },
  {
    title: "Legacy Front End",
    institution: "freecodecamp",
    date: "November 2024",
    url: "https://drive.google.com/file/d/1ohmcttf7Ca81d_JhHg9sdReB1zHwaWqO/view?usp=sharing",
  },
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    institution: "freecodecamp",
    date: "November 2024",
    url: "https://drive.google.com/file/d/1DGM402G6EroGk3meZJnBRufImBAnMNVn/view?usp=sharing",
  },
  {
    title: "Responsive Web Design",
    institution: "freecodecamp",
    date: "November 2024",
    url: "https://drive.google.com/file/d/1YFgrFhli2ruL2XrMhXtfYfsnCuwpDQBe/view?usp=sharing",
  },
  {
    title: "Front End Development Libraries",
    institution: "freecodecamp",
    date: "November 2024",
    url: "https://drive.google.com/file/d/1kUM-BD4FoJUl70jTpp-5UVhrCgotXh2n/view?usp=sharing",
  },
  {
    title: "Certificado de Participación",
    institution: "Universidad Europea del Atlantico",
    date: "July 2024",
    url: "https://drive.google.com/file/d/1wfl_0Dlw17CMrVMIq51I7Sgf5UPhd5Kz/view?usp=sharing",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/sgomez.dev/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Santi1503",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/santiago-gomez-de-la-torre-romero/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.freecodecamp.org/Santi1503",
    icon: <FaFreeCodeCamp fontSize={25} className="hover:opacity-80" />,
  },
];
