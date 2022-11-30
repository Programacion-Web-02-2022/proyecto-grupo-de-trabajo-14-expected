import React, { useState } from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full h-30 py-4 px-8 z-50 mb-10">
      <div className="w-[5%] text-center ">
        <a href="../../../../index.html"> <img src="To_U_logo.png"/>
        </a>
      </div>
      <nav
        className={`fixed text-2xl bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="../../../../index2.html" className="">
          Inicio
        </a>
        <a href="#" className="">
          Agenda semanal
        </a>
        <a href="#" className="">
          Registro de emociones
        </a>
        <a href="#" className="">
          Conoce tu estilo
        </a>
        <a href="../../../../index3.html" className="">
          Tecnicas de estudio
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header2;
