import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section className="flex flex-col py-6 sm:flex-row sm:py-16">
      <div className="flex flex-1 flex-col items-start justify-center">
        <h2 className="w-full max-w-[640px] font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          You do the business, <br className="hidden sm:block" />
          we'll handle the money.
        </h2>

        <p className="max-w-[470px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards, and saving money. With hundreds of
          credit cards on the marker, we'll help you choose the right one
        </p>

        <Button styles="mt-10" />
      </div>

      <div className="relative ml-0 mt-10 flex flex-1 flex-col items-center justify-center md:ml-10 md:mt-0">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`feature-card  flex cursor-pointer items-center justify-center rounded-[20px] p-6 ${index !== features.length - 1 ? "mb-6" : "mb-9"}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-dimBlue">
        <img src={icon} alt="icon" className="h-1/2 w-1/2 object-contain" />
      </div>

      <div className="ml-3 flex flex-1 flex-col">
        <h4 className="font-poppins text-lg font-semibold leading-[23px] text-white">
          {title}
        </h4>
        <p className="font-poppins text-base font-normal leading-[24px] text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Business;
