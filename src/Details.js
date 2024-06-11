// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import next from "./assets/techstack/nextjs-icon.png";
import firebase from "./assets/techstack/firebase.png.png";
import mongodb from "./assets/techstack/mongodb.png";
import express from "./assets/techstack/express.png";
import nodejs from "./assets/techstack/nodejs.png";
import angular from "./assets/techstack/4373284_angular_logo_logos_icon.png";

// Porject Images
// import projectImage1 from "./assets/projects/project1.jpg";
// import projectImage2 from "./assets/projects/project2.jpg";
// import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// import genius from "./assets/projects/genius.png";
import genius from "./assets/projects/Screenshot 2024-06-08 152456.png";
// import askhubblog from "./assets/projects/askhubblog.png";
// import dashboard from "./assets/projects/dashboard.png";
import dashboard from "./assets/projects/Screenshot 2024-06-08 181855.png";
import askHubBlog from "./assets/projects/ask hub blog.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "ABDUL BASIT",
  tagline: "I build things for web",
  img: profile,
  about: ` High-achieving full-stack web developer with a strong academic record and expertise in modern technologies
 like HTML, CSS, JS, Next.js, React.js, Node, Express, MongoDB, MySQL, Firebase, and REST API. Skilled in
 Agile development, problem-solving, and collaboration, with experience in internship and university projects.
 Recognized for academic excellence and leadership as an ACM NED brand ambassador`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/abdul-basit-231204255/",
  github: "https://github.com/Abdulbasit110",
  // twitter: "https://twitter.com/",
  // instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Engineer Intern",
    Company: `RS softwire`,
    Location: "karachi",
    Type: "Internship",
    Duration: "Jun 2023 - Dec 2023",
  },
  {
    Position: "Web Development Internship",
    Company: `NCL-Ned`,
    Location: "NED , Karachi",
    Type: "Internship",
    Duration: "march 2024 - Continue",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science",
    Company: "NED University of Engineering & Technology",
    Location: "Karachi",
    Type: "Undergraduate",
    Duration: "Sep 2021 - Present",
  },
  // {
  //   Position: "Bachelor in Electronics & Communication",
  //   Company: `Your College Name here`,
  //   Location: "Bengaluru",
  //   Type: "Full Time",
  //   Duration: "Aug 2020 - Present",
  // },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  next: next,
  firebase: firebase,
  mongodb: mongodb,
  nodejs: nodejs,
  express: express,
  angular: angular,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "GENIUS",
    image: genius,
    description: `SAAS , AI SERVICES WEB APP`,
    techstack:
      "Full stack Next js, typescript, tailwind, zod, zustand, shadcn, nodejs, mongodb, mongoose, huggingFace, clerk, firebase, replicate ai, pusherJs",
    previewLink: "https://ai-saas-nine-zeta.vercel.app/",
    githubLink: "https://github.com/Abdulbasit110/AI-SAAS",
  },
  {
    title: "AskHubBlog",
    image: askHubBlog,
    description: `FUll stack bloging app.`,
    techstack: "HTML/CSS, JavaScript , tailwind , firebase",
    previewLink: "https://ask-hub-blog-beta.vercel.app/",
    githubLink: "https://github.com/Abdulbasit110/AskHubBlog",
  },
  {
    title: "Dashboard",
    image: dashboard,
    description: `Dashboard app`,
    techstack:
      "React js, tailwind css, AntDesign, typescript, nodejs,  express, mysql, axios, socket.io",
    previewLink: "https://github.com/Abdulbasit110/Dashboard",
    githubLink: "https://github.com/Abdulbasit110/Dashboard",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email1: "basit4408944@cloud.neduet.edu.pk",
  email2: "abdulbasit4408944@gmail.com",
  phone: "+92 318-2820766",
};
