import React from "react";
import Image from "next/image";
import Work_together from "../../../public/images/work_together.svg";

function Hero() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="pt-20 md:p-4">
            <Image
              src={Work_together}
              alt="Work together"
              width={300}
              height={300}
              className="hover:scale-110 transition-all"
            />
          </div>
          <h1 className="text-4xl font-bold py-1 capitalize font-inter">
            <span className="text-torch-500">Tell me your Idea,</span>
            <br />
            <span className="text-torch-100">
              I make it come <span className="text-torch-800">True</span>
            </span>
          </h1>
          <p className="text-lg max-w-[60%] m-auto tracking-widest font-lato dark:text-white">
            I&apos;m a frontend developer and web designer with a passion for
            creating beautiful websites. I help people connect with their
            audience by making their digital experiences special.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
