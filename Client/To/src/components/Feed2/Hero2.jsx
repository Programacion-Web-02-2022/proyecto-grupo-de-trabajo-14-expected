import React from "react";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section id="home" className=" text-3xl bg-[url('./public/fondo.png')] bg-no-repeat bg-cover mb-5">
      <div className=" flex place-items-center justify-center">
        <div>
        <div className="text-center text-white mt-60">
          <h1 className="text-9xl font-['Roboto']">21:34</h1>
          <p className=" font-['Merriweather'] italic">Buenas noches, Invitado</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a className=" mt-20">¿Cuál es tu enfoque principal para hoy?</a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="text-center text-white text-xl mb-10">“El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora”.</p>
        </div></div>
    </section>
  );
};

export default Hero;
