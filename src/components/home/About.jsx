import React from "react";
import Image from "next/image";
import Profile from "../../../public/images/profile.png";

function About() {
  return (
    <div className="md:h-screen my-10 flex flex-col md:my-4 md:grid md:grid-cols-2 justify-center items-center">
      <div className="p-16 text-justify">
        <h1 className="capitalize text-4xl font-bold my-5 font-inter bold">
          <span className="text-torch-500">About</span>
          <span className="text-torch-100"> me</span>
        </h1>
        <p className="font-lato py-2 dark:text-white">
          My name is José Bolivar, I am a frontend web developer based in
          Mexico, who likes to create modern web applications and scalable. I&apos;m staying
          focused on building responsive front-end web applications while
          learning back-end technologies. I like to learn new topics and tools everyday 
          that help me build good quality products that are to the liking
          of those who watch them.
        </p>
        <p className="font-lato py-2 dark:text-white">
          I am passionate about design and colors, because I believe that design
          is part of who we are and how we show ourselves to others. Finally, I
          believe that discovering new ways of doing things drives our
          creativity and allows us to be innovative.
        </p>
      </div>
      <div className="p-4 w-full flex justify-center">
        <Image
          src={Profile}
          alt="José Bolivar"
          width={350}
          height={350}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}

export default About;
