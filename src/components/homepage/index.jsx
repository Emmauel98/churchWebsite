import React from "react";
import NavBar from "./navbar";
import Intro from "./intro";
import LearnMoreAboutUS from "./learnMoreAboutUs";
import GetInvolved from "./GetInvolved";
import ChurchLife from "./ChurchLife";
import GlobalVision from "./GlobalVision";
import OurPastor from "./OurPastor";
import Footer from "./footer";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 500 }}
        transistion={{ duration: 40 }}
      >
        <NavBar />
        <Intro />
        <LearnMoreAboutUS />
        <GetInvolved />
        <ChurchLife />
        <GlobalVision />
        <OurPastor />
        <Footer />
      </motion.div>
    </>
  );
}

export default HomePage;
