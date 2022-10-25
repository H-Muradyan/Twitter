import React from "react";
import bgPhoto from "/public/images/bgPhoto.png";
import twitter from "/public/images/twitter.svg";
import Image from "next/image";

const WelcomeImage = () => {
  return (
    <div className="position-relative">
      <div>
        <Image src={bgPhoto} alt="background photo" width={730} height={740} />
      </div>
      <div className="twitterIcon position-absolute">
        <Image src={twitter} alt="twitter icon" />
      </div>
    </div>
  );
};

export default WelcomeImage;
