import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="lg:flex md:flex lg:justify-between md:justify-between lg:p-12 md:p-12 bg-[#200903] text-white lg:text-lg md-text-lg">
        <div className="mt-32 ml-10 hidden md:block lg:block">
          <span className="mr-8 fontLink text-2xl text-yellow-300">V</span>
          <span className="text-yellow-300">Kingshill City</span>
        </div>

        <div className="md:order-3 lg:order-3 text-center">
          <ul>
            {["About us", "Events", "Ministry", "Givnig"].map((list) => {
              return (
                <>
                  <li className="md:mr-10 pt-6 md:mt-1 lg:mt-1">{list} <hr className="bg-white mx-20 md:hidden lg:hidden"/></li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="md:order-2 lg:order-2">
          <h3 className="mb-8 font-semibold text-center hidden md:bock lg:block">Contacts</h3>
          <div>
            <ul>
              {[faFacebook, faTwitter, faSquareInstagram, faYoutube].map(
                (icon) => {
                  return (
                    <>
                      <li className="mb-8 hover:text-yellow-100 cursor-pointer">
                        <p className="hidden md:block lg:block">
                          {" "}
                          <FontAwesomeIcon icon={icon} /> Kingshill City Church
                          Int.
                        </p>
                      </li>
                    </>
                  );
                }
              )}
            </ul>
            <div className=" lg:hidden md:hidden flex justify-center text-center gap-10 pb-6">
              <FontAwesomeIcon icon={faFacebook} /> 
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faSquareInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
