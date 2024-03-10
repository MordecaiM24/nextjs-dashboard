import React from "react";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col py-6  sm:py-16 md:flex-row">
      <div className="relative my-10 flex flex-1 items-center justify-center md:my-0">
        <div className="flex flex-1 flex-col items-start justify-center px-6 sm:px-16 xl:px-0">
          <div className="flex w-full flex-row items-center justify-around">
            <h1 className="flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100px]">
              The Next
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient">Generation</span>
            </h1>

            <div className="mr-0 hidden ss:flex md:mr-4">
              <GetStarted />
            </div>
          </div>
          <h1 className="w-full font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100px]">
            of Volunteering
          </h1>

          <p className="mt-5 max-w-[470px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
            Your skills empower change. Our AI-powered vector database matches
            your talents with nonprofits, creating meaningful engagements
            without the hassle. Transform your volunteer journey with us.
          </p>
        </div>

        <div className="pink__gradient absolute top-0 z-0 h-1/3 w-2/5" />
        <div className="white__gradient absolute bottom-40 z-[1] h-4/5 w-4/5 rounded-full" />
        <div className="pink__gradient absolute bottom-20 right-20 top-0 z-0 h-1/2 w-1/2" />
      </div>

      <div className="flex items-center justify-center ss:hidden">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
