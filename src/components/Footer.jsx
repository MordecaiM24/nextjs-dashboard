import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center py-6 sm:py-16">
      <div className="mb-8 flex w-full flex-col items-center justify-start md:flex-row">
        <div className="mr-10 flex flex-1 flex-col justify-start">
          <img src={logo} alt="logo" className="h-18 w-[266px]" />

          <p className="mt-4 max-w-[300px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite">
            A new way to make payments easy, reliable, and secure
          </p>
        </div>

        <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="my-4 flex min-w-[150px] flex-col ss:my-0"
            >
              <h4 className="font-poppins text-lg font-medium leading-7 text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="mb-2 cursor-pointer font-poppins text-base font-normal leading-6 text-dimWhite hover:text-secondary"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-slate-700 pt-6 md:flex-row">
        <p className="font-poppins text-lg font-normal leading-7 text-white">
          2024 Benevolink. All Rights Reserved.
        </p>

        <div className="mt-6 flex flex-row md:mt-0">
          {socialMedia.map((social, idx) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`h-5 w-5 cursor-pointer object-contain ${idx !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
