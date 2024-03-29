import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="feedback-card my-5 mr-0 flex max-w-[370px] cursor-pointer flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
    <img src={quotes} alt="quotes" className="h-7 w-10 object-contain" />
    <p className="my-10 font-poppins text-lg font-normal leading-8 text-white">
      {content}
    </p>

    <h4 className="font-poppins text-xl font-semibold leading-8 text-white">
      {name}
    </h4>
  </div>
);

export default FeedbackCard;
