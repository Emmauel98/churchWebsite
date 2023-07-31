import { motion } from "framer-motion";
import React from "react";
import NavBar from "../homepage/navbar";
import Intro from "./Intro";
import About from "./About";
import ChurchGovernance from "./ChurchGovernance";
import Anchor from "./Anchor";


function AboutUs() {
  return (
    <>
      <motion.div 
       animate={{x: 0}}
       initial ={{x: 500}}
       transistion ={{duration: 40}}
      >
        <NavBar />
        <Intro />
        <About />
        <ChurchGovernance />
        <Anchor />
      </motion.div>
    </>
  );
}

export default AboutUs;
