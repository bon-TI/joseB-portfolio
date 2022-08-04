import React from "react";

function Tech(props) {
  const brand = props.brand;
  const name = props.name;
  const color = props.color;


  return (
    <div className="shadow-md shadow-torch-100 hover:scale-105 transition-all py-2 rounded-xl flex justify-center">
      <div>
        <div className={"text-6xl flex justify-center " + color}>
          {brand}
        </div>
        <p className="text-lg py-2 font-semibold dark:text-white">{name}</p>
      </div>
    </div>
  );
}

export default Tech;
