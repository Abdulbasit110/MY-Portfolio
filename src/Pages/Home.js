import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { personalDetails } from "../Details";
import { fadeInVariants } from "../Variants";

function Home() {
  const { name, tagline } = personalDetails;

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <motion.div
        variants={fadeInVariants("left", 0.5)}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Hey,👋<br></br>My Name is<br></br>
        </h1>
        <div className="typed-container">
          <ReactTyped
            strings={[
              `<span class="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">${name}</span><br/><span class="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">${tagline}</span>`,
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            showCursor={true}
            cursorChar="|"
            html={true}
          />
        </div>
      </motion.div>
      <div className="mt-5 md:mt-0">
        <motion.div
          className="blob"
          variants={fadeInVariants("right", 0.5)}
          initial="initial"
          animate="animate"
        ></motion.div>
      </div>
    </main>
  );
}

export default Home;
