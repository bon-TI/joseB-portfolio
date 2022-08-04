import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <div className="my-4 flex flex-col items-center">
      <span className="text-center text-gray-600 dark:text-gray-300 ">
        © {year} José Bolivar. All Rights Reserved.
      </span>

      <div className="flex m-4 space-x-6">
        <a
          href="https://react-icons.github.io/react-icons"
          className="text-xl text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FaFacebook />
        </a>
        <a
          href="https://react-icons.github.io/react-icons"
          className="text-xl text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FaGithubAlt />
        </a>
        <a
          href="https://react-icons.github.io/react-icons"
          className="text-xl text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://react-icons.github.io/react-icons"
          className="text-xl text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Footer;
