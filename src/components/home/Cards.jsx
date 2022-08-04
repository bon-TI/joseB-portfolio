import React from "react";
import Card from "./Card";
import Designer from "../../../public/images/designer.svg";
import Ninja from "../../../public/images/ninja.svg";
import Books from "../../../public/images/books.svg";

function Cards() {
  return (
    <div className="w-full md:h-screen content-center justify-center grid md:grid-cols-3 gap-8 p-10">
      <div>
        <Card
          title="Hobbies"
          description="I love programming, playing videogames, reading, listening to music, designing and drawing comics and manga."
          image={Ninja}
        />
      </div>
      <div>
        <Card
          title="Work"
          description="Work is important to me, because it allows me to get the best out of myself. In addition, it allows me to always look for better designs and ideas for my projects."
          image={Designer}
          />
      </div>
      <div>
        <Card
          title="Goals"
          description="One of my goals to achieve is to become a Full Stack Web Developer, because besides user design, being part of server design is also important to me."
          image={Books}
        />
      </div>
    </div>
  );
}

export default Cards;
