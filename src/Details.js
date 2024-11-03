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
import typescript from "./assets/techstack/typescript.png";

// Porject Images
import genius from "./assets/projects/Screenshot 2024-06-08 152456.png";
import dashboard from "./assets/projects/Screenshot 2024-06-08 181855.png";
import askHubBlog from "./assets/projects/ask hub blog.png";
import devhire from "./assets/projects/DEVHIRE.png";
import assignment from "./assets/projects/assignmentSubmission.png";
import gallery from "./assets/projects/imageGallery.png";
import hairday from "./assets/projects/hairday.png";
import stopwatch from "./assets/projects/stopwatch.png";
import todo from "./assets/projects/todo.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "ABDUL BASIT",
  tagline: "I build amazing web apps",
  // img: profile,
  about: `Experienced Full Stack Developer with a strong foundation in modern web technologies and industry
experience. Proficient in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, ExpressJS, and
database management (MongoDB, MySQL, PostgreSQL). Skilled in RESTful API development, Firebase
integration, and working with large language models (LLMs) for AI applications. Expertise in Agile
methodologies, problem-solving, and cross-functional collaboration. Recognized for academic excellence and
leadership as an ACM NED brand ambassador. Passionate about building efficient, scalable web applications
and continuously expanding technical skills`,
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
    Position: "Full Stack Developer Web/App",
    Company: `Askari Technologies`,
    Location: "Karachi",
    Type: "Full Time",
    Duration: "August 2024 - Present",
  },
  {
    Position: "Web Development Internship",
    Company: `NCL-Ned`,
    Location: "NED , Karachi",
    Type: "Internship",
    Duration: "March 2024 - May 2024",
  },
  {
    Position: "Frontend Engineer Intern",
    Company: `RS softwire`,
    Location: "karachi",
    Type: "Internship",
    Duration: "Jun 2023 - Dec 2023",
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
];
// certifications
export const certifications = [
  {
    position: "Meta frontend developer",
    company: "META - Coursera",
    location: "karachi",
    type: "online",
  },
  {
    position: "Full stack developer MERN",
    company: "Saylani Mass IT Training program",
    location: "karachi",
    type: "onsite",
  },
  {
    position: "Cloud computing",
    company: "IBM - Coursera",
    location: "karachi",
    type: "online",
  },
  {
    position: "Technical Domain",
    company: "National Freelance Training Program - NFTP",
    location: "karachi",
    type: "online",
  },
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
  typescript: typescript,
};

const time = 0.3;
// Enter your Project Details here
export const projectDetails = [
  {
    title: "GENIUS",
    image: genius,
    description: `SAAS, AI SERVICES WEB APP, generate text, images, audio, video, code`,
    techstack:
      "Full stack Next js, typescript, tailwind, zod, zustand, shadcn, nodejs, mongodb, mongoose, huggingFace, clerk, firebase, replicate ai, pusherJs",
    previewLink: "https://ai-saas-nine-zeta.vercel.app/",
    githubLink: "https://github.com/Abdulbasit110/AI-SAAS",
    direction: "left",
    time,
  },
  {
    title: "Assignment submission portal",
    image: assignment,
    description: `Web app that streamlines the process of assignment submission, management and evaluation `,
    techstack:
      "Reactjs, nodejs, expressjs, jwt, antdesign, tailwindCss, axios, mongodb, mongoose",
    previewLink: "https://assignment-submission-portal-frontend.vercel.app/",
    githubLink:
      "https://github.com/Abdulbasit110/Assignment-Submission-Portal-Frontend-/tree/main",
    direction: "left",
    time,
  },
  {
    title: "AskHubBlog",
    image: askHubBlog,
    description: `FUll stack bloging app.`,
    techstack: "HTML/CSS, JavaScript , tailwind , firebase",
    previewLink: "https://ask-hub-blog-beta.vercel.app/",
    githubLink: "https://github.com/Abdulbasit110/AskHubBlog",
    direction: "left",
    time,
  },
  {
    title: "Full stack dashboard",
    image: dashboard,
    description: `Dashboard app tracking radio waves in realtime and showing charts on the frontend`,
    techstack:
      "React js, tailwind css, AntDesign, typescript, nodejs,  express, mysql, axios, socket.io",
    previewLink: "https://github.com/Abdulbasit110/Dashboard",
    githubLink: "https://github.com/Abdulbasit110/Dashboard",
    direction: "right",
    time,
  },
  {
    title: "DEVHIRE",
    image: devhire,
    description: `Ultimate talent hiring web app, now hire developers `,
    techstack: "HTML/CSS, JavaScript, tailwind css",
    previewLink: "https://abdulbasit110.github.io/DevHire-/",
    githubLink: "https://github.com/Abdulbasit110/DevHire-",
    direction: "right",
    time,
  },
  {
    title: "Image gallery using cloudinary and nextjs",
    image: gallery,
    description: `Image gallery where we can manifest our albums`,
    techstack: "nextjs,tailwind css, cloudinary",
    previewLink: "https://image-gallery-starter-six-gamma-99.vercel.app/",
    githubLink: "https://image-gallery-starter-six-gamma-99.vercel.app/",
    direction: "right",
    time,
  },
  {
    title: "Hair Day Saloon",
    image: hairday,
    description: `Website of luxury futuristic spa`,
    techstack: "HTML, CSS, JS, animation",
    previewLink: "https://abdulbasit110.github.io/HAIR-DAY-SALOON/",
    githubLink: "https://github.com/Abdulbasit110/HAIR-DAY-SALOON",
    direction: "left",
    time,
  },
  {
    title: "JS stop watch",
    image: stopwatch,
    description: "stop watch web app using vanilla js",
    techstack: "HTML, CSS, JS, animation",
    previewLink: "https://js-tailwind-stop-watch.vercel.app/",
    githubLink: "https://github.com/Abdulbasit110/JS-TAILWIND-STOP-WATCH",
    direction: "left",
    time,
  },
  {
    title: "Happy Todo",
    image: todo,
    description: "todo web app using vanilla js",
    techstack: "HTML, CSS, JS, animation",
    previewLink: "https://abdulbasit110.github.io/TODO-JS/",
    githubLink: "https://github.com/Abdulbasit110/TODO-JS",
    direction: "left",
    time,
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email1: "basit4408944@cloud.neduet.edu.pk",
  email2: "abdulbasit4408944@gmail.com",
  phone: "+92 318-2820766",
};
