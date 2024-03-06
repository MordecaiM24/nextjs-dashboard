import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className=" mb-6 flex flex-col flex-wrap items-start justify-center sm:mb-20 sm:flex-row sm:items-center">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="m-3 flex flex-1 flex-row items-center justify-start"
        >
          <h4 className="font-poppins text-[30px] font-semibold leading-[43px] text-white xs:text-[40px] xs:leading-[53px]">
            {stat.value}
          </h4>

          <p className="text-gradient text-gradient ml-3 font-poppins text-[15px] font-normal uppercase leading-[21px] xs:text-[20px] xs:leading-[26px]">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
