import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

const Anchor = () => {
  return (
    <>
      <div className="pt-20">
        <div>
          <h1 className="text-center pb-10 md:text-2xl md:font-bold">Anchor</h1>
        </div>
        <div className="mx-14">
          Our Scriptural Anchors are in Matthew 5:13-16 and Revelations 5:9-10.
          We are the SALT of the earth and the LIGHT of the world - Matthew
          5:13-14. We are Kings and Priests with dominion on Earth – Revelations
          5:9-10.
        </div>
        <div>
            <div><FontAwesomeIcon icon={faLessThan} /></div>
            <div>
                
            </div>
            <div><FontAwesomeIcon icon={faGreaterThan} /></div>
        </div>
      </div>
    </>
  );
};

export default Anchor;
