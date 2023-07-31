import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faHandsHoldingChild } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


function GetInvolved() {
  return (
    <>
      <div className="bg-[#0364F4] text-white lg:w-full lg:p-7 lg:mt-8 hidden md:hidden lg:block">
        <div className="lg:pt-[2rem] lg:m-6 lg:text-center lg:text-[2rem] lg:font-bold fontLink2 ">
          <h4>Get Involved</h4>
        </div>
        <div className="flex justify-around gap-2 getInvolvedIcon">
          <motion.div
          whileInView={{scale:1.5}}
          initial={{scale:0}}
          transition={{duration:1}}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
          </motion.div>
          <motion.div 
          whileInView={{scale:1.5}}
          initial={{scale:0}}
          transition={{duration:1}}
          >
            <FontAwesomeIcon icon={faHandsHoldingChild} />
          </motion.div>
          <motion.div
          whileInView={{scale:1.5}}
          initial={{scale:0}}
          transition={{duration:1}}
          >
            <FontAwesomeIcon icon={faCalendar} />
          </motion.div>
        </div>
        <div className="flex lg:gap-4  text-black lg:mx-4 lg:my-8">
          <motion.div className="lg:shadow-lg  lg:rounded-lg lg:mx-4 lg:bg-white lg:p-4"
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0.5,y:25}}
          transition={{duration:1}}
          >
            Welcome! If you're new here, we're excited to have you join us and
            we hope you feel at home as part of our community.
          </motion.div>
          <motion.div className="lg:shadow-lg  lg:rounded-lg lg:mx-4 lg:bg-white lg:p-4 "
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0.5,y:25}}
          transition={{duration:1}}
          >
            Your generous giving to the church enables us to continue spreading
            the word of God and serving our community with love and compassion.
          </motion.div>
          <motion.div className="lg:shadow-lg  lg:rounded-lg lg:mx-4 lg:bg-white lg:p-4 "
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0.5,y:25}}
          transition={{duration:1}}
          >
            Don't miss out on our upcoming church event - it's a great
            opportunity to connect with others, deepen your faith, and have some
            fun!
          </motion.div>
        </div>
        <div className="lg:flex gap-5 justify-around ">
          <div className="lg:bg-[#FF9D26] lg:text-white lg:w-[10em] lg:h-[4rem] lg:font-medium lg:text-center lg:text-lg  lg:pt-4 lg:rounded-md lg:shadow-xl cursor-pointer lg:hover:bg-yellow-600 lg:-ml-[2rem]">
            Become a member
          </div>
          <div className="lg:bg-[#FF9D26] lg:text-white lg:w-[10em] lg:h-[4rem] lg:font-medium lg:text-center lg:text-lg  lg:pt-4 lg:rounded-md lg:shadow-xl cursor-pointer lg:hover:bg-yellow-600">
            Give
          </div>
          <div className="lg:bg-[#FF9D26] lg:text-white lg:w-[10em] lg:h-[4rem] lg:font-medium lg:text-center lg:text-lg  lg:pt-4 lg:rounded-md lg:shadow-xl cursor-pointer lg:hover:bg-yellow-600">
            Events
          </div>
        </div>
      </div>

      {/* Mobile  and Tab view */}

      <div className="bg-[#0364F4] text-white lg:w-full lg:p-7 lg:mt-8 lg:hidden">
        <div className="pt-[2rem] m-6 text-center text-[1rem] mdtext-[1.5rem] font-bold fontLink2 ">
          <h4>Get Involved</h4>
        </div>
        <div>
          <motion.div className="getInvolvedIconMobile "
          whileInView={{scale:1.5}}
          initial={{scale:0}}
          transition={{duration:1}}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
          </motion.div>
          <motion.div className="mx-14  p-4 text-center"
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0.5,y:25}}
          transition={{duration:2}}
          >
            Welcome! If you're new here, we're excited to have you join us and
            we hope you feel at home as part of our community.
          </motion.div>
          <div className="flex justify-center max-[320px]:ml-[-9.5rem]">
            <div className="bg-[#FF9D26] text-white w-[10rem] h-[3rem] font-normal text-center text-lg  pt-2 rounded-md shadow-xl cursor-pointer hover:bg-yellow-600 getInvolvedButtons">
              Become a member
            </div>
          </div>
        </div>
        <div>
          <motion.div className="getInvolvedIconMobile "
          whileInView={{scale:1.5}}
          initial={{scale:0}}
          transition={{duration:2}}
          >
            <FontAwesomeIcon icon={faHandsHoldingChild} />
          </motion.div>
          <motion.div className="mx-14  p-4 text-center"
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0.5,y:25}}
          transition={{duration:2}}
          >
            Your generous giving to the church enables us to continue spreading
            the word of God and serving our community with love and compassion.
          </motion.div>
          <div className="flex justify-center max-[320px]:ml-[-9.5rem]">
            <div className="bg-[#FF9D26] text-white w-[10rem] h-[3rem] font-normal text-center text-lg  pt-2 rounded-md shadow-xl cursor-pointer hover:bg-yellow-600 getInvolvedButtons">
              Give
            </div>
          </div>
        </div>
        <div>
          <motion.div className="getInvolvedIconMobile "
          whileInView={{scale:1.5}}
          initial={{scale:0}}
          transition={{duration:1}}
          >
            <FontAwesomeIcon icon={faCalendar} />
          </motion.div>
          <motion.div className="mx-14  p-4 text-center"
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0.5,y:25}}
          transition={{duration:1}}
          >
            Don't miss out on our upcoming church event - it's a great
            opportunity to connect with others, deepen your faith, and have some
            fun!
          </motion.div>
          <div className=" flex justify-center max-[320px]:ml-[-9.5rem]">
            <div className="bg-[#FF9D26] text-white w-[10rem] h-[3rem] font-normal text-center text-lg  pt-2 rounded-md shadow-xl cursor-pointer hover:bg-yellow-600 getInvolvedButtons">
              Events
            </div>
          </div>
        </div>
        <br /><br /><br />
      </div>
    </>
  );
}

export default GetInvolved;
