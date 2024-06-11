import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { motion } from "framer-motion";
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
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {name}
        </h1>
        <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {tagline}
        </h2>
      </motion.div>
      <div className="mt-5 md:mt-0">
        {/* <img
          ref={myimageref}
          className="w-1/2 md:ml-auto rounded-full bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          src={img}
          alt="ABDUL BASIT"
        /> */}

        <motion.div
          class="blob"
          variants={fadeInVariants("right", 0.5)}
          initial="initial"
          animate="animate"
        ></motion.div>
      </div>
    </main>
  );
}

export default Home;
