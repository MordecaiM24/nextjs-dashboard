import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <div className="bg-blue-gradient flex h-[140px] w-[140px] cursor-pointer items-center justify-center rounded-full p-[2px]">
      <div className="hover:to-[100% group z-0 flex h-full w-full flex-col items-center justify-center rounded-full bg-primary hover:z-10 hover:bg-gradient-to-br hover:from-cyan-100 hover:from-[0%] hover:via-cyan-200 hover:via-cyan-300 hover:via-cyan-400 hover:via-[25%] hover:via-[50%] hover:via-[75%] hover:to-cyan-500">
        <div className="flex flex-row items-center justify-start">
          <p className="mr-1 font-poppins text-lg font-medium leading-6">
            <span className={`${styles.blueGradientText}`}>Get</span>
          </p>

          <img src={arrowUp} className="h-6 w-6 object-contain" />
        </div>

        <p className="font-poppins text-lg font-medium leading-6">
          <span className={`${styles.blueGradientText}`}>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
