import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} bg-blue-gradient rounded-xl px-6 py-4 font-poppins text-lg font-medium text-primary outline-none`}
    >
      Get Started
    </button>
  );
};

export default Button;
