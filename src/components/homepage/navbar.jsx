import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faSquareInstagram,
  faYoutube,
  faBars,
  faXmark,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const [responsiveNavBar, setResponsiveNavBar] = useState(false);
  const [currentScroll, setCurrentScroll] = useState();

  const hideMobileNavBar = () => {
    setResponsiveNavBar(false);
    window.scrollTo({ top: currentScroll, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (responsiveNavBar) {
      setCurrentScroll(window.scrollY);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [responsiveNavBar]);

  return (
    <>
      {responsiveNavBar ? (
        <div className=" mt-[8rem] md:mt-[14rem] lg:m-0 lg:hidden bg:white h-screen relative z-50">
          <div
            className="socialMediaIconSmallScreen2 cursor-pointer"
            onClick={hideMobileNavBar}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <motion.div
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ul className="list-none fontLink2 font-bold text-[1.3rem] lg:flex lg:gap-5 ">
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8  lg:m-0 ">
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8  lg:m-0 ">
                <Link to="/aboutUs">About us</Link>
              </li>
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8  lg:m-0 ">
                New?
              </li>
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8  lg:m-0 ">
                Ministry
              </li>
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0  lg:hidden ">
                Media
              </li>
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0  ">
                Event
              </li>
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0  lg:hidden ">
                Vision
              </li>
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0  lg:hidden ">
                Give
              </li>
              <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0   ">
                Gallery
              </li>
            </ul>
          </motion.div>
        </div>
      ) : (
        <div className="lg:hidden fixed flex justify-between p-3 w-full text-white bg-[#200903] z-50">
          <div className=" lg:flex gap-2">
            <span className="fontLink   text-[1.5rem] text-[#FF9D26] shadow-md mx-3">
              v
            </span>
            <span className="fontLink2 text-[.8rem]  md:text-[1.5rem] font-medium ">
              Kingshill city
            </span>
          </div>
          <div
            onClick={() => setResponsiveNavBar(!responsiveNavBar)}
            className="socialMediaIconSmallScreen"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      )}

      <div className="bg-white text-[#200903] hidden lg:flex h-full lg:h-[4.5rem] lg:justify-between p-5 -sm lg:min-w-full lg:fixed z-50">
        <div className=" lg:flex gap-2">
          <span className="fontLink hidden  lg:block text-[1.5rem] text-[#FF9D26] shadow-md mx-3">
            v
          </span>
          <span className="fontLink2 hidden lg:block  text-[1.5rem] font-medium  ">
            Kingshill city
          </span>
        </div>

        <div className=" mt-[8rem] md:mt-[14rem] lg:m-0 ">
          <ul className="list-none fontLink2 font-bold text-[1.3rem] lg:flex lg:gap-5 ">
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8  lg:m-0 ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8  lg:m-0 ">
              <Link to={"/aboutUs"}>About us</Link>
            </li>
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8  lg:m-0 ">
              New?
            </li>
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8  lg:m-0 ">
              Ministry
            </li>
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0  lg:hidden ">
              Media
            </li>
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0  ">
              Event
            </li>
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0  lg:hidden ">
              Vision
            </li>
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0  lg:hidden ">
              Give
            </li>
            <li className=" hover:text-[#ffebcd] cursor-pointer text-center m-3 md:mb-8 lg:m-0   ">
              Gallery
            </li>
          </ul>
        </div>
        <div className="font-semibold">
          <ul className=" lg:flex lg:gap-5">
            <li className="socialMediaIcon1 hidden lg:block">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="socialMediaIcon1 hidden lg:block">
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li className="socialMediaIcon2 hidden lg:block">
              <FontAwesomeIcon icon={faSquareInstagram} />
            </li>
            <li className="socialMediaIcon3  hidden lg:block">
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li className="socialMediaIcon4 hidden  lg:block">
              <FontAwesomeIcon icon={faBars} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
