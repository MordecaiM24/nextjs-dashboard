import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="relative flex flex-col items-center justify-center py-6 sm:py-16"
    >
      <div className="blue__gradient absolute -right-1/2 z-[0] h-3/5 w-3/5 rounded-full" />

      <div className="relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row">
        <h1 className="w-full max-w-[500px] text-center font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          Nonprofits: By The Numbers
        </h1>

        <div className="mt-6 flex w-full justify-center md:mt-0 md:block">
          <p className="max-w-[450px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
            The Independent Sector regularly releases Health of the U.S.
            Nonprofit Sector reports - an evolving and growing resource of data,
            analysis, and recommendations about key areas powering more than 1.8
            million U.S. nonprofits.
          </p>
        </div>
      </div>

      <div className="feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start">
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
