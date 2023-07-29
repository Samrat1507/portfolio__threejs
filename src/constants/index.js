import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    forage,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    codeclause,
    unicompiler,
    androidstudio,
    java,
    kotlin,
    next,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blogger",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Android Studio",
      icon: androidstudio,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "NextJS",
      icon: next,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "JAVA",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Delloite Step Intern",
      company_name: "Forage",
      icon: forage,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "As a part of Completing the Program I had to finish five tasks:-        ",
        "1.Coding",
        "2.Data Analytics",
        "3.Development",
        "4.Cyber Security",
        "5.Forensic Technology",
        "Through this program I felt things in a practical way and this has given me an exposure as to how Deloitte actually works.",
        "Skills: Data Analysis · Cybersecurity",
      ],
    },
    {
      title: "Android Development",
      company_name: "Code Clause",
      icon: codeclause,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - May 2023",
      points: [
        "Worked On Firebase ML Kit in Android Studio and Made a Face Detection App.",
        "Skills: Kotlin · Firebase ml · XML · Android Studio",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "UNIcompiler",
      icon: unicompiler,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ArtLab",
      description:
        "Introducing ArtLab: The ultimate online haven for artists! Our platform is designed exclusively for the artistic community, offering a space to showcase, connect, and inspire. Share your artwork, engage with fellow artists, and immerse yourself in a supportive creative environment. Welcome to ArtLab, where artists thrive!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Samrat1507/ArtLab",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };