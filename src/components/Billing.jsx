import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex flex-col-reverse py-6 sm:py-16 md:flex-row"
    >
      <div className="relative mr-0 mt-10 flex flex-1 items-center justify-center md:mr-10 md:mt-0">
        <img
          src={bill}
          alt="billing"
          className="relative z-[5] h-full w-full"
        />

        <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-1/2 w-1/2 rounded-full" />
        <div className="pink__gradient absolute -left-1/2 bottom-0 z-0 h-1/2 w-1/2 rounded-full" />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center">
        <h2 className="w-full max-w-[470px] font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          Easily control your billing & invoice
        </h2>

        <p className="mt-5 max-w-[470px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          perferendis ut minima id ad mollitia, dolorum unde ipsam voluptates
          porro quae enim blanditiis a beatae hic repellendus amet labore fuga
          expedita explicabo.
        </p>

        <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
          <img
            src={apple}
            alt="apple_play"
            className="mr-5 h-11 w-32 cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="google_play"
            className="h-11 w-32 cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
