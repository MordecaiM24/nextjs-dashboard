import React from "react";

const Button = ({ styles }) => {
  return (
    <a
      className={`${styles} bg-blue-gradient rounded-xl px-6 py-4 font-poppins text-lg font-medium text-primary outline-none`}
      href="/signUp"
    >
      Get Started
    </a>
  );
};

export default Button;
