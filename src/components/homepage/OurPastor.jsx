import { motion, useInView, useAnimation, animate } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

function OurPastor() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: false });
  const control = useAnimation();


  useEffect(()=>{
    if (isInview) {
      control.start("bounce");
    }else{
      control.stop()
    }
  },[isInview])





  return (
    <>
      <div className="bg-yellow-100" ref={ref}>
        <h1 className="fontLink2 font-semibold text-center py-8 cursor-pointer lg:text-2xl" >Our Pastor</h1>
        <div className="lg:flex">
          <motion.div
            className="flex justify-center lg:order-2"
            variants={{
                   bounce: {
                    y: [
                      10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0,
                      10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0,
                    ],
                   }
                  }}
            animate={control}          
            transition={{
              duration: 20,
            }}
          >
            <img
              src="src\assets\man.jpg"
              alt=""
              className="mx-4 w-[10rem] h-[10rem] rounded-[50%] lg:rounded-md lg:w-[100rem] lg:h-[20rem] lg:mr-10 lg:mt-12"
            />
          </motion.div>
          <div>
            <motion.p className="text-center m-4 mx-6 font-bold  md:mx-[6rem]"  ref={ref}
             initial={{
              y:75,
              opacity:0,
             }}
              whileInView={{
                y:0,
                opacity:1,
                transition:{
                  duration:1,
                  delay:.1
                }
              }}
            >
              Our Lead Pastor is Dr. Sanmi Tunde Emmanuel. He has been engaged
              in Pastoral Christian Ministry for over 25 years, beginning from
              his time serving as a Campus Pastor during his undergraduate
              college years.{" "}
            </motion.p>
            <br />
            <br />
            <motion.p className="text-center m-4 mx-6 md:mx-[6rem] font-bold" 
             initial={{
              y:75,
              opacity:0,
             }}
              whileInView={{
                y:0,
                opacity:1,
                transition:{
                  duration:1,
                  delay: .1
                }
              }}
            >
              He is fully licensed as a Christian Minister by the International
              Church of the Foursquare Gospel. He is a dedicated teacher of
              God’s Word, who is committed to helping believers reconnect to
              their full heritage in Christ Jesus, by the power of the Holy
              Spirit.
            </motion.p>
            <br />
            <br />
            <motion.p className="text-center m-4 mx-6 font-bold  md:mx-[6rem]"
            initial={{
              y:75,
              opacity:0,
             }}
              whileInView={{
                y:0,
                opacity:1,
                transition:{
                  duration:1,
                  delay:.1
                }
              }}
            >
              He firmly believes that God’s House must be a House of Prayer and
              a place of True Worship in an atmosphere that is conducive for the
              manifestation of the power of the Holy Spirit.
            </motion.p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPastor;
