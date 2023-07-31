import { motion } from "framer-motion";
import React from "react";


function GlobalVision() {
  return (
    <>
      <div className="bg-[#DBE3FF] p-10">
        <h2 className="fontLink2 text-center font-semibold lg:text-lg">Global vison</h2>
        <motion.div className="m-8 text-center font-bold "
        whileInView={{scale: 1}}
        initial={{scale:0}}
        transition={{
          duration: 0.8
        }}
        >
          Our vision is to be world-changing, dominion-holding, brightly shining
          believers who make it to Heaven, in the company of multitudes from all
          nations, ethnicities and race. And while we await the joy of Heaven
          our goal is to reign as Kings who impact our world with the brightness
          of our rising to the glory of God.
        </motion.div>
        <div className="flex justify-center mb-7">
          <button className="w-[8rem] bg-yellow-500 h-[2rem] font-semibold text-center rounded-md">
            vision
          </button>
        </div>
      </div>
    </>
  );
}

export default GlobalVision;
