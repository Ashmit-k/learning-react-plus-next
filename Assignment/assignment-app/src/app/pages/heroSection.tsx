import React from "react";
import Navbar from "../components/navbar";

import ButtonClass from "../utilities/buttons/button";
import Styles from "../Styles/centerHeading-Style.module.css"

const HeroSection = () => {
  return (
    <div className="heroSection flex flex-col items-center">
      <Navbar />

      <div className="heroHeading text-center">
        <h1 className={`gradient-text text-4xl font-extrabold ${Styles.commonHeading}`}>
          Fast, Accurate, Scalable
        </h1>
        <h1 className={`gradient-text text-4xl font-extrabold ${Styles.commonHeading}`}>
          Cost Effective AI
        </h1>
      </div>

      <div className="heroSubHeading text-center max-w-[800px]">
        <p className="text-lg text-white">
          Create and deploy generative AI applications with high speed, top-tier
          accuracy, and minimal production costs at scale.
        </p>
      </div>

      <div className="heroButtons">
        <ButtonClass buttonText="Get Started" />
      </div>

      <div className="heroImage">
        <img src="/assets/midImage.png" alt="Hero Illustration" />
      </div>
    </div>
  );
};

export default HeroSection;
