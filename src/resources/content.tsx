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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Selene, a design engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
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
        description: <>Full Stack Developer (2025–2026)</>,
        images: [
          {
            src: "/images/gallery/Certificado 4geeks.jpg",
            alt: "4Geeks Academy certificate",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/Certificado-Irene-Sanchez-ia.jpg",
            alt: "AI / development certificate",
            width: 16,
            height: 9,
          },
        ],
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
