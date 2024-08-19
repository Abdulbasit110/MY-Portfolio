import React from "react";
import Work from "../Components/Work";
import {
  personalDetails,
  workDetails,
  eduDetails,
  certifications,
} from "../Details";
import { motion } from "framer-motion";
import { fadeInVariants } from "../Variants";

function About() {
  return (
    <motion.main
      className="container mx-auto max-width pt-10 pb-20"
      variants={fadeInVariants("left", 0.1)}
      initial="initial"
      animate="animate"
    >
      <section>
        <h1 className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className=" py-8 lg:max-w-3xl text-white opacity-80">
          {personalDetails.about}
        </p>
      </section>
      <section>
        <h1 className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Certifications
        </h1>
        {React.Children.toArray(
          certifications.map(({ position, company, location, type }) => (
            <Work
              position={position}
              company={company}
              location={location}
              type={type}
            />
          ))
        )}
      </section>
    </motion.main>
  );
}

export default About;
