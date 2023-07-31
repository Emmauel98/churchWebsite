import React from "react";
import image1 from "../../assets/man.jpg";
import image2 from "../../assets/female.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="pt-24">
        <div className="pb-16 lg:flex">
          <div className="flex justify-center lg:block lg:justify-end lg:mr-24 lg:order-2 lg:pt-16">
            <motion.img
              src={image1}
              alt="image"
              className="w-[90%] lg:w-[100%]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -45 }}
              transition={{ duration: 1 }}
            />
          </div>
          <motion.p
            className="mx-5 mt-8 text-center lg:ml-24 pb-8 lg:text-xl lg:leading-10 lg:text-left lg:w-[500rem] lg:font-normal"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We’re God’s people divinely commanded to spread the good news of
            Jesus Christ and accomplish great things on earth as Salts and
            Lights to the glory of our God and King. We are a City situated upon
            the Hill. We cannot be hidden. We love God. We love People. We love
            You.
          </motion.p>
        </div>

        <motion.p
          className=" hidden lg:block lg:text-left lg:mx-20 lg:leading-10 lg:text-xl lg:mb-10"
          whileInView={{ opacity: 1 , scale: 1 }}
          initial={{ opacity: 0, scale:0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Remember, your forgiveness was bought with the precious blood of Jesus
          Christ and there is no condemnation to those who are in Christ Jesus.
          Your past has been forgiven and forgotten. The New You is here, and
          you’ve become joint heirs with Christ in God. As such, all of what
          belongs to Christ Jesus in God is now available to you through the
          Holy Spirit. Our mandate is to show you through the Word of God and
          Prayer how to connect to and access all of what the Almighty God has
          in store for you.{" "}
        </motion.p>

        {/* slide two */}
        <div className=" lg:hidden">
          <div className="flex justify-center">
            <motion.img
              src={image2}
              alt="image"
              className="w-[90%] h-[20rem]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -25 }}
              transition={{ duration: 1 }}
            />
          </div>
          <motion.p
            className="mx-5 mt-5 text-center pb-8"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Remember, your forgiveness was bought with the precious blood of
            Jesus Christ and there is no condemnation to those who are in Christ
            Jesus. Your past has been forgiven and forgotten. The New You is
            here, and you’ve become joint heirs with Christ in God. As such, all
            of what belongs to Christ Jesus in God is now available to you
            through the Holy Spirit. Our mandate is to show you through the Word
            of God and Prayer how to connect to and access all of what the
            Almighty God has in store for you.
          </motion.p>
        </div>

        {/* section three */}

        <div className="mt-5 mx-5 pb-5 lg:mt-0 lg:mx-20">
          <motion.p className="text-center lg:text-left lg:text-xl lg:leading-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          transition={{ duration: 1, delay: 0.3 }}
          >
            We’re God’s people divinely commanded to spread the good news of
            Jesus Christ and accomplish greatWe want you to know that you’re
            here because you were made for such a time as this. And now, our God
            has led you to us because you were made for so much more than
            ordinary lives. You are here to thrive and have dominion as God’s
            King and Priest on planet earth. God’s seed of greatness lives in
            you. God’s seal of greatness is upon you. Yes, YOU. Welcome to your
            Father’s House. We are Kingshill City Church.
            <b> Pastor Tunde Emmanuel, PhD and Mrs. Ronke Emmanuel, MD </b>
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
