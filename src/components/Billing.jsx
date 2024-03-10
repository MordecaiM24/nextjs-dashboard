import React from "react";
import { apple, bill, google } from "../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Billing = () => {
  const notify = () => toast.info("Coming May 2024!");

  return (
    <section
      id="product"
      className="flex flex-col-reverse py-6 sm:py-16 md:flex-row"
    >
      <div className="relative mr-0 mt-10 flex flex-1 items-center justify-center md:mr-10 md:mt-0">
        <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-1/2 w-1/2 rounded-full" />
        <div className="pink__gradient absolute -left-1/2 bottom-0 z-0 h-1/2 w-1/2 rounded-full" />
        <div className="flex flex-1 flex-col items-center justify-center">
          <h2 className="w-full max-w-[470px] font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
            Easily control your billing & invoice
          </h2>

          <p className="mt-5 max-w-[470px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
            Spend more time on what's really important.
          </p>

          <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
            <button onClick={notify}>
              <img
                src={apple}
                alt="apple_play"
                className="mr-5 h-11 w-32 cursor-pointer object-contain"
              />
            </button>
            <button onClick={notify}>
              <img
                src={google}
                alt="google_play"
                className="mr-5 h-11 w-32 cursor-pointer object-contain"
              />
            </button>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </section>
  );
};

export default Billing;
