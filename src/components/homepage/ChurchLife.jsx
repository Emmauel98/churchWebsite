import React, { useState } from "react";
import eventsdata from "../../eventsdata";
import { motion } from "framer-motion";

function ChurchLife() {
  const [numberOfEvents, setNumberOfEvents] = useState(eventsdata);


  return (
    <>
      <div className=".fontLink2 text-center m-8 font-medium md:font-semibold md:text-xl lg:text-2xl lg:font-bold">Church Life</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:mx-10 md:gap-3">
      {numberOfEvents.map((event) => {
        const { description, image } = event;
        return (
          <>
            <motion.div className="" 
            whileInView={{y:[0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,]}}
            initial={{y:75}}
            transition={{duration:40}}
            >
              <div className="mb-10">
                <div className="flex justify-center">
                  <img
                    src={image}
                    alt={image}
                    className="w-[80%] md:w-[100%] rounded-t-md"/> 
                </div>
                <div className="flex justify-center">
                  <div className=" text-center  bg-black w-[80%] md:w-full text-white p-8 rounded-b-md ">
                    {description}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        );
      })}
      </div>
    </>
  );
}

export default ChurchLife;
