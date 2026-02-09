import React from "react";
import { CardsCarousel } from "./CardsCarousel";

const Ouroffice = () => {
  return (
    <div className="p-10 text-[#EAE7E1] bg-[#7E9C7F]  p-40">
      <div className="text-4xl">Our Office : A Calm, Private Space in Santa Monica</div>

      <br />
      <div className="text-xl" >
        Office is designed to feel quiet, comfortable, and grounding from the
        moment you arrive. With natural light, soft textures, and a clean,
        uncluttered design, many clients say the environment itself helps them
        settle. In-person sessions are available in Santa Monica, and I also
        offer secure telehealth appointments for clients throughout California.
      </div>
      <br />
      <div>
        <CardsCarousel ></CardsCarousel>
      </div>
    </div>
  );
};

export default Ouroffice;
