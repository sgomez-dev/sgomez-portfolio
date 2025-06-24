import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";
import projectImage7 from "../assets/project7.png";
import projectImage8 from "../assets/project8.png";
import projectImage9 from "../assets/project9.png";
import projectImage10 from "../assets/project10.png";

import { RiReactjsLine, RiGithubFill, RiJavascriptFill } from "react-icons/ri";
import {
  TbBrandAws,
  TbBrandPython,
  TbBrandDocker,
  TbBrandTypescript,
  TbBrandTailwind,
} from "react-icons/tb";
import {
  SiMongodb,
  SiKubernetes,
  SiPostman,
  SiJenkins,
  SiSonarqube,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { href: "#bio", label: "Bio" },
  { href: "#skills", label: "Habilidades" },
  { href: "#work", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#recommendations", label: "Recomendaciones" },
  { href: "#certification", label: "Certificaciones" },
  { href: "#education", label: "Educación" },
  { href: "#contact", label: "Contacto" },
];

export const HERO = {
  name: "SANTIAGO GOMEZ DE LA TORRE ROMERO",
  greet: "Bienvenido! 👋🏻",
  description:
    "Soy ingeniero informático, activamente buscando proyectos de tecnología y desarrollo web donde pueda contribuir proactivamente. Mi enfoque es diseñar soluciones digitales que equilibren funcionalidad y diseño. Actualmente, estoy profundizando en el desarrollo web para refinar mis habilidades y perseguir nuevos desafíos profesionales.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Homepage",
    description:
      "Esta página profesional ha sido cuidadosamente diseñada para representar quién soy como desarrollador. Los visitantes pueden explorar mi trabajo, descargar mi currículum y acceder a mis perfiles de redes sociales.",
    image: projectImage1,
    githubLink: "https://github.com/sgomez-dev/profesional-homepage",
    demoLink: "https://homepage.sgomez.dev/#/home",
  },
  {
    id: 2,
    name: "Budget App",
    description:
      "Una aplicación de gestión financiera para rastrear gastos, establecer presupuestos y supervisar saldos. Su interfaz minimalista proporciona gráficos y informes para un manejo eficiente de los gastos.",
    image: projectImage2,
    githubLink: "https://github.com/sgomez-dev/Budget-app",
    demoLink: "https://budget.sgomez.dev",
  },
  {
    id: 3,
    name: "To-Do List",
    description:
      "Una aplicación de gestión de tareas para organizar y priorizar actividades diarias. Su interfaz simple permite a los usuarios agregar, editar y completar tareas, aumentando la productividad y el enfoque.",
    image: projectImage3,
    githubLink: "https://github.com/sgomez-dev/ToDo",
    demoLink: "https://todo.sgomez.dev",
  },
  {
    id: 4,
    name: "Packatrack",
    description:
      "Una aplicación de seguimiento de paquetes para gestionar la entrega. Los usuarios pueden registrar entregas, rastrear incidentes, calcular ganancias y supervisar estadísticas con una interfaz de usuario fácil de usar.",
    image: projectImage4,
    githubLink: "https://github.com/sgomez-dev/Packatrack",
    demoLink: "https://packatrack.sgomez.dev",
  },
  {
    id: 5,
    name: "Skyzen",
    description:
      "Una aplicación meteorológica moderna construida con React y Vite que proporciona información meteorológica en tiempo real con una interfaz de usuario intuitiva. La aplicación presenta geolocalización automática y pronóstico meteorológico.",
    image: projectImage5,
    githubLink: "https://github.com/sgomez-dev/Skyzen.git",
    demoLink: "https://skyzen.sgomez.dev",
  },
  {
    id: 6,
    name: "Portfolio",
    description:
      "Un portfolio profesional que muestra habilidades, proyectos y experiencia con un diseño moderno. Incluye introducción, proyectos, habilidades y experiencia, utilizando React para la interacción.",
    image: projectImage6,
    githubLink: "https://github.com/sgomez-dev/sgomez-portfolio.git",
    demoLink: "https://sgomez.dev",
  },
  {
    id: 7,
    name: "EliteEstate - Manager",
    description:
      "Aplicación web progresiva (PWA) para profesionales inmobiliarios para gestionar propiedades, citas y áreas de manera eficiente. Interfaz moderna y responsive para el control de portafolio y agenda.",
    image: projectImage7,
    githubLink: "https://github.com/sgomez-dev/EliteEstate-Manager.git",
    demoLink: "https://elite-estate-manager.vercel.app/",
  },
  {
    id: 8,
    name: "Docs - SGOMEZ",
    description:
      "Repositorio visual de documentación que presenta un stack tecnológico personalizado, organizado por categorías mediante una interfaz de temática galáctica, con contenido estructurado y navegación intuitiva.",
    image: projectImage8,
    githubLink: "https://github.com/sgomez-dev/docs.git",
    demoLink: "https://docs.sgomez.dev/",
  },
  {
    id: 9,
    name: "Sortlab",
    description:
      "SortLab combina animaciones dinámicas con explicaciones estructuradas para desmontar la lógica algorítmica, ofreciendo a los usuarios una comprensión práctica de la eficiencia, la implementación y las aplicaciones reales de las técnicas de ordenación.",
    image: projectImage9,
    githubLink: "https://github.com/sgomez-dev/sortlab.git",
    demoLink: "https://sortlab.sgomez.dev",
  },
  {
    id: 10,
    name: "Nexora",
    description:
      "Uptime Kuma es una herramienta de monitoreo de servicios en tiempo real. Permite supervisar sitios web, servidores y puertos, enviando notificaciones cuando se detecta una caída o interrupción.",
    image: projectImage10,
    githubLink: "https://nexora.sgomez.dev/status/sgtr1503",
    demoLink: "https://nexora.sgomez.dev/status/sgtr1503",
  },
];

export const BIO = [
  "Soy Santiago Gómez de la Torre Romero, ingeniero informático apasionado con sólidos conocimientos en TI y desarrollo web. Mi trayectoria profesional se ha desarrollado mediante experiencia práctica en administración de sistemas (SysAdmin), TI y desarrollo de software, impulsado por una mentalidad autodidacta y un interés constante por dominar herramientas como React, Node.js y CI/CD. Desde 2021, formé parte del programa de becas FUNIBER y posteriormente me integré al programa PROFER en la Universidad Europea del Atlántico, donde perfeccioné mis conocimientos técnicos y fortalecí mis habilidades de colaboración en equipos orientados al desarrollo de software y soluciones tecnológicas.",
  "Actualmente, trabajo como desarrollador web multidisciplinario creando aplicaciones innovadoras centradas en el usuario. He participado en eventos como Hack2Progress, que me ha permitido mejorar mi capacidad para innovar y desempeñarme bajo presión. Como organizador de GDG Santander, contribuyo activamente a la comunidad tecnológica local. Uno de mis desafíos más gratificantes ha sido construir EliteEstate Manager, una aplicación de gestión de propiedades desarrollada en colaboración con la agente inmobiliaria Irma Romero Morales. Este proyecto real ha permitido aplicar mis habilidades técnicas para crear una solución adaptada a la gestión de propiedades, citas y zonas, una experiencia que ha profundizado mi comprensión de ambas industrias.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "3+ años",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ años",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "3+ años",
  },
  {
    icon: <TbBrandTypescript className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "TypeScript",
    experience: "2+ años",
  },
  {
    icon: <TbBrandTailwind className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "TailwindCSS",
    experience: "2+ años",
  },
  {
    icon: <TbBrandPython className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Python",
    experience: "2+ años",
  },
  {
    icon: <TbBrandAws className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "AWS",
    experience: "1+ año",
  },
  {
    icon: <SiJenkins className="text-4xl text-neutral-400 lg:text-5xl" />,
    name: "Jenkins",
    experience: "2+ años",
  },
  {
    icon: <TbBrandDocker className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Docker",
    experience: "2+ años",
  },
  {
    icon: <SiKubernetes className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Kubernetes",
    experience: "2+ años",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "2+ años",
  },
  {
    icon: <DiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ año",
  },
  {
    icon: <BiLogoFirebase className="text-4xl text-orange-700 lg:text-5xl" />,
    name: "Firebase",
    experience: "2+ años",
  },
  {
    icon: <SiPostman className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Postman",
    experience: "1+ año",
  },
  {
    icon: <RiGithubFill className="text-4xl text-white lg:text-5xl" />,
    name: "Github",
    experience: "4+ años",
  },
  {
    icon: <SiSonarqube className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "SonarQube",
    experience: "1+ año",
  },
];

export const EXPERIENCES = [
  {
    title: "Organizador de Google Developer Group (GDG) Santander",
    company: "GDG Santander, Cantabria, España",
    duration: "Noviembre 2024 - Actualidad",
    description:
      "Organizador del Google Developers Group, responsable de organizar eventos para atraer a desarrolladores y entusiastas de la tecnología, mientras fomenta el intercambio de conocimientos dentro de la comunidad.",
  },
  {
    title: "Desarrollador Freelance - EliteEstate Manager",
    company: "Irma Romero Morales",
    duration: "Febrero 2025 - Junio 2025",
    description:
      "Desarrollé una Aplicación Web Progresiva (PWA) para una empresa inmobiliaria, gestionando propiedades, citas y zonas. La app presenta una interfaz de usuario fácil de usar para el control de portafolio y agenda.",
  },
  {
    title: "Técnico de Soporte IT",
    company: "Universidad Europea del Atlántico, Santander, Cantabria, España",
    duration: "Julio 2023 - Julio 2024",
    description:
      "Miembro del equipo de IT, responsable de implementar soluciones de infraestructura y brindar soporte técnico especializado para garantizar la eficiencia operativa y la estabilidad.",
  },
  {
    title: "Sysadmin & QA",
    company:
      "Fundación Universitaria Iberoamericana (FUNIBER), Santander, Cantabria, España",
    duration: "Julio 2022 - Julio 2023",
    description:
      "Lideré soluciones de infraestructura, asegurando una integración fluida de sistemas. Gestioné el aseguramiento de la calidad del software (QA) para mantener los estándares del producto. Supervisé el mantenimiento de servidores y la gestión de proyectos del equipo para garantizar la fiabilidad y la alineación con los objetivos organizacionales.",
  },
  {
    title: "Equipo de Redacción de Correos y Guías",
    company:
      "Fundación Universitaria Iberoamericana (FUNIBER), Santander, Cantabria, España",
    duration: "Septiembre 2021 - Julio 2022",
    description:
      "Como parte del Programa de Becas de FUNIBER, contribuí a la redacción y estructuración de guías para correos académicos e internacionales, enfocándome en la escritura y edición de comunicaciones y asegurando el cumplimiento de los estándares de correspondencia corporativa.",
  },
];

export const EDUCATION = [
  {
    degree: "Grado en Ingeniería Informática",
    institution:
      "Universidad Europea del Atlántico, Santander, Cantabria, España",
    duration: "Septiembre 2021 - Junio 2026",
    description:
      "El Grado en Ingeniería Informática de la Universidad Europea del Atlántico prepara profesionales para resolver problemas de manera analítica y estratégica. En un panorama tecnológico en constante evolución, este programa equipa a los estudiantes para desempeñarse como pieza clave en la cadena de valor de las organizaciones, integrando la informática en la visión estratégica de las empresas y preparándolos para adaptarse a los cambios globales.",
  },
];
export const CERTIFICATION = [
  {
    title: "Software Engineer",
    institution: "HackerRank",
    date: "Mayo 2025",
    url: "https://drive.google.com/file/d/10MHq7lyYelaamoLLJhwOc_BVsdtK3qQ4/view?usp=sharing",
  },
  {
    title: "Frontend Developer (React)",
    institution: "HackerRank",
    date: "Mayo 2025",
    url: "https://drive.google.com/file/d/1CQH076Ss81QmlBZJ9wSyvOx7HTk-gK-y/view?usp=sharing",
  },
  {
    title: "SCHNEIDER ELECTRIC Hackathon 2025 - IT Challenge",
    institution: "NUWE",
    date: "Abril 2025",
    url: "https://drive.google.com/file/d/15L_2k12CsYcxovvqJzgoC56p05Ypz-xC/view?usp=sharing",
  },
  {
    title: "Master en JavaScript 2025: Aprender JS, Angular, Node, Astro",
    institution: "Udemy",
    date: "Marzo 2025",
    url: "https://drive.google.com/file/d/10FqgAblTBp76CKhc31ZnV0LW-D3kkXuB/view?usp=sharing",
  },
  {
    title: "The Web Developer Bootcamp 2025",
    institution: "Udemy",
    date: "Marzo 2025",
    url: "https://drive.google.com/file/d/1XQsTwo88A7isHT2pSBEuoNTFjYhzY81j/view?usp=sharing",
  },
  {
    title: "Azure DevOps: Flujos de CI/CD",
    institution: "Platzi",
    date: "Marzo 2025",
    url: "https://drive.google.com/file/d/1pcAssPwA5b3rep77kcW8azReUbFYXzC9/view?usp=sharing",
  },
  {
    title: "Certificado de Participación Hack2Progress",
    institution: "CIC Consulting Informático",
    date: "Marzo 2025",
    url: "https://drive.google.com/file/d/14IbZJ8hqiM2lUPb1YBftxyfgWTB6jK-d/view?usp=sharing",
  },
  {
    title: "Machine Learning y Data Science",
    institution: "Udemy",
    date: "Marzo 2025",
    url: "https://drive.google.com/file/d/1isr8dB1w1pUFD4T704k2xI0R4rUrV_N4/view?usp=sharing",
  },
  {
    title: "Cómo incluir la sostenibilidad en tu estrategia de cloud computing",
    institution: "LinkedIn",
    date: "Marzo 2025",
    url: "https://drive.google.com/file/d/1JYMq9yOPD0qRMB4gB_Gy9SbZ3qo3ZVh8/view?usp=sharing",
  },
  {
    title: "Resolución de problemas con el pensamiento crítico",
    institution: "LinkedIn",
    date: "Marzo 2025",
    url: "https://drive.google.com/file/d/1G_RkQD-O23AEpnj_JKOEjJ2wYeFFFMXN/view?usp=sharing",
  },
  {
    title: "Prompt Engineering",
    institution: "LinkedIn",
    date: "Marzo 2025",
    url: "https://drive.google.com/file/d/1SegpNdQ74TAK6TrkJDaHNcjINyoXjXY1/view?usp=sharing",
  },
  {
    title: "Master en React",
    institution: "Udemy",
    date: "Diciembre 2024",
    url: "https://drive.google.com/file/d/1woMqIXOjTDeTFTQXy2kdL33zgIMe4WYJ/view?usp=sharing",
  },
  {
    title: "Legacy Front End",
    institution: "freecodecamp",
    date: "Noviembre 2024",
    url: "https://drive.google.com/file/d/1ohmcttf7Ca81d_JhHg9sdReB1zHwaWqO/view?usp=sharing",
  },
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    institution: "freecodecamp",
    date: "Noviembre 2024",
    url: "https://drive.google.com/file/d/1DGM402G6EroGk3meZJnBRufImBAnMNVn/view?usp=sharing",
  },
  {
    title: "Responsive Web Design",
    institution: "freecodecamp",
    date: "Noviembre 2024",
    url: "https://drive.google.com/file/d/1YFgrFhli2ruL2XrMhXtfYfsnCuwpDQBe/view?usp=sharing",
  },
  {
    title: "Front End Development Libraries",
    institution: "freecodecamp",
    date: "Noviembre 2024",
    url: "https://drive.google.com/file/d/1kUM-BD4FoJUl70jTpp-5UVhrCgotXh2n/view?usp=sharing",
  },
  {
    title: "Certificado de Participación",
    institution: "Universidad Europea del Atlantico",
    date: "Julio 2024",
    url: "https://drive.google.com/file/d/1wfl_0Dlw17CMrVMIq51I7Sgf5UPhd5Kz/view?usp=sharing",
  },
];

export const RECOMMENDATIONS = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQE7VZNHvDOVLQ/profile-displayphoto-shrink_100_100/B4EZSGwQ6uGwAU-/0/1737427588690?e=1756339200&v=beta&t=CxO5h3SNv6cP8C_A2304JWT6fuP7lI8rsS0TdZtY5lc",
    name: "Irma Romero",
    date: "13 de abril de 2025",
    description:
      "Quiero recomendar ampliamente el trabajo de Santiago, quien desarrolló una aplicación a medida para mi empresa inmobiliaria. La app es muy amigable, fácil de usar y ha sido una herramienta clave para optimizar nuestros procesos internos, especialmente en la gestión de inventarios, citas y tareas administrativas. El servicio fue rápido, profesional y con una atención excelente en cada etapa del proceso.",
    url: "https://www.linkedin.com/in/sgomez-dev",
    profileRecommenderUrl: "https://www.linkedin.com/in/irma-romero-928a9b26/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQG2j3rsn_90-w/profile-displayphoto-shrink_100_100/B4EZVIOF0SHMAY-/0/1740673409279?e=1756339200&v=beta&t=2kHEMVL0xSmJx6fgqEc5J6XF9dZ6Bdf25pfeycG7jtg",
    name: "Alejandro Rubio Cao",
    date: "10 de abril de 2025",
    description: [
      "Tuve la oportunidad de trabajar con Santiago en varios proyectos durante nuestra carrera en Ingeniería Informática y dentro del programa de becas de la Universidad Europea del Atlántico, y siempre ha demostrado un gran talento y compromiso. Su capacidad para resolver problemas complejos y su enfoque analítico lo distinguen como un profesional destacado en el campo de la tecnología. ",
      "No tengo dudas de que su talento y dedicación serán un gran aporte en cualquier desafío que emprenda. Recomiendo a Santiago sin reservas para cualquier oportunidad en el ámbito de la informática.",
    ],
    url: "https://www.linkedin.com/in/sgomez-dev",
    profileRecommenderUrl:
      "https://www.linkedin.com/in/alejandro-rubio-cao-82b0181b5/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQHrxfiyQTRYAQ/profile-framedphoto-shrink_100_100/B4DZabtap5GwAs-/0/1746369096686?e=1751353200&v=beta&t=kYwa5eXSvhEp6HFoHaZiokYac2iTWCu5WT1eHWpiL7c",
    name: "Manuel Rondon",
    date: "26 de Marzo de 2025",
    description:
      "Tuve la fortuna de trabajar junto a Santiago al inicio de nuestras carreras y desde entonces destacaba su habilidad para adaptarse rapidamente a nuevos conceptos y tecnologías. Mas adelante tambien tuve la oportunidad de participar junto a él en el hackathon Hack2Progress 2025, en el cual demostró cuanto habia crecido su capacidad tecnica y que conservaba esa gran habilidad de adaptarse a cualquier entorno técnico de manera casi inmediata ha sido una pieza vital en nuestra participación y considero que sería una gran adición a cualquier equipo en el que se encuentre",
    url: "https://www.linkedin.com/in/sgomez-dev",
    profileRecommenderUrl:
      "https://www.linkedin.com/in/manuel-rondon-1b2816218/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFm1Wit0e7oLg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1673003659908?e=1756339200&v=beta&t=Zsfs4ntqyNKZMU5EHSWZ9mqqYezViidkYnpIzVTb_QI",
    name: "Edgar León Du Solier",
    date: "24 de Marzo de 2025",
    description:
      "Tuve el gusto de trabajar junto a Santiago en el área de administración de sistemas, acompañándolo en su proceso de formación. Desde el inicio demostró una gran capacidad para entender rápidamente conceptos técnicos complejos, destacándose especialmente por su velocidad de aprendizaje y la facilidad con la que adoptaba nuevos conocimientos. Su proactividad, acompañada de una notable habilidad para resolver problemas, hacen de él un excelente profesional en crecimiento. Sin duda, recomiendo a Santiago como una gran incorporación para cualquier equipo de trabajo",
    url: "https://www.linkedin.com/in/sgomez-dev",
    profileRecommenderUrl: "https://www.linkedin.com/in/edgarleond/",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/sgomez.dev/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/sgomez-dev",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sgomez-dev",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.hackerrank.com/profile/contacto185",
    icon: <FaHackerrank fontSize={25} className="hover:opacity-80" />,
  },
];
