import React from "react";
import { contactDetails } from "../Details";
import { motion } from "framer-motion";
import { fadeInVariants } from "../Variants";

function Contact() {
  const { email1, email2, phone } = contactDetails;
  return (
    <motion.main
      variants={fadeInVariants("up", 0.1)}
      initial="initial"
      animate="animate"
      className="container mx-auto max-width my-auto flex flex-col justify-center mt-20"
    >
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl  dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold md:pt-10 md:pb-6">
        <a href={`mailto:${email1}`}>{email1} /</a>
      </h3>

      <h3 className="text-center text-xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email2}`}>{email2}</a>
      </h3>
      <span className="text-center text-xl font-light block">or</span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </motion.main>
  );
}

export default Contact;
