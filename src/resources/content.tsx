import { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Irene",
  lastName: "Sánchez",
  name: `Irene Sánchez`,
  role: "Full Stack Developer",
  avatar: "/images/irenes-picture.png",
  email: "irene.armu99@gmail.com",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/isanarmu",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/irene-sanchez-armu",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:irene.armu99@gmail.com?subject=Contacto%20desde%20portfolio",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/api/og/generate?title=Irene%20S%C3%A1nchez%20%E2%80%93%20Full%20Stack%20Developer",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer focused on backend and full stack roles</>,
  featured: {
    display: false,
    title: null,
    href: "/work/trasteando",
  },
  subline: (
    <>
      I'm Irene Sánchez, a Full Stack Developer trained in Python, Flask, React,
      JavaScript and PostgreSQL. I build full stack projects with APIs,
      authentication, databases and deployment workflows.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a Full Stack Developer ready for junior backend and full stack roles.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:irene.armu99@gmail.com?subject=Contacto%20desde%20portfolio",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Full Stack Developer with training in Python, Flask, React, JavaScript, and
        PostgreSQL. Before tech, I worked as Cabin Crew in aviation, logging more than 1,100
        flight hours in international, high-pressure environments. That experience gave me strong
        adaptability, communication skills, calm under pressure, and fast problem solving. I am
        now looking for my first junior opportunity in full stack or backend development.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Volotea",
        timeframe: "2022–2023 · France",
        role: "Cabin Crew",
        achievements: [
          <>Worked in international and high-pressure environments.</>,
          <>
            Managed real-time problem solving, customer-facing situations, teamwork, and strict
            operational procedures.
          </>,
          <>1,100+ flight hours.</>,
        ],
      },
      {
        company: "XPO",
        timeframe: "2021 · Guadalajara, Spain",
        role: "Warehouse Assistant",
        achievements: [
          <>
            Worked with logistics, inventory control, and operational organization in a
            high-volume environment.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "4Geeks Academy",
        description: <>Full Stack Software Development Bootcamp · React, Python, Flask, SQLAlchemy, PostgreSQL, REST APIs and Git (2025–2026)</>,
        images: [
          {
            src: "/images/gallery/Certificado 4geeks.jpg",
            alt: "4Geeks Academy certificate",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "BIG School",
        description: <>AI Development Fundamentals · From zero to production-oriented AI concepts (2026)</>,
        images: [
          {
            src: "/images/gallery/Certificado-Irene-Sanchez-ia.jpg",
            alt: "AI development certificate",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        name: "Udemy",
        description: <>Currently studying Python to strengthen backend development, scripting and problem-solving skills.</>,
        images: [],
      },
      {
        name: "Centro de Estudios Aeronáuticos ESA Madrid",
        description: <>Cabin Crew Certificate + Amadeus (2020)</>,
        images: [],
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: <>React, JavaScript, HTML, CSS, and Bootstrap.</>,
        tags: [
          { name: "React" },
          { name: "JavaScript" },
          { name: "HTML" },
          { name: "CSS" },
          { name: "Bootstrap" },
        ],
      },
      {
        title: "Backend",
        description: <>Python, Flask, REST APIs, JWT, and Socket.IO.</>,
        tags: [
          { name: "Python" },
          { name: "Flask" },
          { name: "REST APIs" },
          { name: "JWT" },
          { name: "Socket.IO" },
        ],
      },
      {
        title: "Database",
        description: <>PostgreSQL, SQL, and SQLAlchemy.</>,
        tags: [
          { name: "PostgreSQL" },
          { name: "SQL" },
          { name: "SQLAlchemy" },
        ],
      },
      {
        title: "Tools",
        description: <>Git, GitHub, VS Code, Postman, and Google Maps API.</>,
        tags: [
          { name: "Git" },
          { name: "GitHub" },
          { name: "VS Code" },
          { name: "Postman" },
          { name: "Google Maps API" },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
