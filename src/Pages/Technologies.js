import React from "react";
import { techStackDetails } from "../Details";
import { motion } from "framer-motion";
import { fadeInVariants } from "../Variants";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    firebase,
    next,
    mongodb,
    nodejs,
    express,
    angular,
    typescript,
  } = techStackDetails;
  return (
    <motion.main
      variants={fadeInVariants("left", 0.1)}
      initial="initial"
      animate="animate"
      className="container mx-auto max-width pt-10 pb-20 "
    >
      <section>
        <h1 className="text-2xl  text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className=" py-2 lg:max-w-3xl opacity-80">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="html" />
        <img src={css} title="CSS" alt="css" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={typescript} title="Typescript" alt="typescript" />
        <img src={react} title="React" alt="react" />
        <img src={angular} title="FIREBASE" alt="angular" />
        <img src={redux} title="Redux" alt="redux" />
        <img src={tailwind} title="Tailwind CSS" alt="tailwind" />
        <img src={bootstrap} title="Bootstrap" alt="bootstrap" />
        <img src={sass} title="SASS" alt="sass" />
        <img src={next} title="NEXT JS" alt="next" />
        <img src={firebase} title="FIREBASE" alt="firebase" />
        <img src={express} title="FIREBASE" alt="express" />
        <img src={mongodb} title="FIREBASE" alt="mongodb'" />
        <img src={nodejs} title="FIREBASE" alt="nodejs" />
      </section>
      <section>
        <h1 className="text-2xl pt-10  dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        {/* <img src={figma} title="Figma" alt="Figma" /> */}
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </motion.main>
  );
}

export default Technologies;
