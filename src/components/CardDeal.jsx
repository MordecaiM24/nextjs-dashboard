import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex flex-col-reverse py-6 sm:py-16 md:flex-row">
      <div className="flex flex-1 flex-col items-start justify-center">
        <h2 className="w-full max-w-[600px] font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          Find a better card deal in a few easy steps
        </h2>

        <p className="mt-5 max-w-[470px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          perferendis ut minima id ad mollitia, dolorum unde ipsam voluptates
          porro quae enim blanditiis a beatae hic repellendus amet labore fuga
          expedita explicabo.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className="relative ml-0 mt-10 flex flex-1 items-center justify-center md:ml-10 md:mt-0">
        <img src={card} alt="card" className="h-full w-full" />
      </div>
    </section>
  );
};

export default CardDeal;
