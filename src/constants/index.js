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
      name: "Trade Hive",
      description:
        "Trade Hive is a cutting-edge stocks website revolutionizing the way you trade. With a global chat feature, you can connect with traders from around the world, fostering a vibrant community. Our expert chat provides personalized guidance from seasoned professionals to enhance your trading strategies. Stay ahead of the curve with our AI-powered trend prediction model, offering real-time insights into stock trends and forecasts. Trade Hive empowers you to buy and sell stocks with confidence, empowering you to make informed decisions in the fast-paced world of finance.",
      tags: [
        {
          name: "Next",
          color: "blue-text-gradient",
        },
        {
          name: "Mongo",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Samrat1507/Trade-Hive",
    },
    {
      name: "Food Runner",
      description:
        "Final Project for Android Development training (Internshala)",
      tags: [
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
        {
          name: "Kotlin",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Samrat1507/Food-Runner",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };