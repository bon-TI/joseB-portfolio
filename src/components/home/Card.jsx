import React from "react";
import Image from "next/image";

function Card(props) {

  const title = props.title;
  const description = props.description;
  const image = props.image;

  return (
    <div className="max-w-sm bg-torch-700 md:h-[450px] content-center flex items-center rounded-lg border hover:scale-105 transition-all border-gray-200 shadow-md my-4">
      <div className="p-5 text-center">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-100 ">
          {title}
        </h5>
        <div className="flex justify-center p-4">
          <Image src={image} alt={title} height={150} width={150} />
        </div>
        <p className="mb-3 font-normal text-gray-200 ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
