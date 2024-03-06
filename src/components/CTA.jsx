import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="bg-black-gradient-2 box-shadow my-6 flex flex-col items-center justify-center rounded-[20px] px-6 py-4 sm:my-16 sm:flex-row sm:px-16 sm:py-12">
      <div className="flex flex-1 flex-col">
        <h2 className="w-full font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          It Starts With Us.
        </h2>
        <p className="mt-5 max-w-[470px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
          "Never believe that a few caring people can't change the world. For,
          indeed, that's all who ever have." - Margaret Mead
          <br /> <br />
          The world may not change in a day, but everyday, you can change
          someone's world.
        </p>
      </div>

      <div className="ml-0 mt-0 flex items-center justify-center sm:ml-10 sm:mt-10">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
