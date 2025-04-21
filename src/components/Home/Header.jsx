import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaLeaf, FaGlobeAmericas } from "react-icons/fa";

const HomeHero = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-start px-6"
      style={{ backgroundImage: "url('/images/bg1.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0C0B]/60 to-transparent backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto p-8 text-white">
        {/* Text content */}
        <div className="max-w-lg text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#FAC80C] drop-shadow-lg mb-4">
            Miel con historia, sabor con propósito.
          </h1>

          <p className="text-md text-center md:text-lg leading-relaxed text-white/98 font-medium opacity-90">
            Desde la comuna de Alhué, Región Metropolitana, producimos miel pura y subproductos apícolas de forma consciente y sostenible. Somos una familia apícola que cree en el poder de las abejas para regenerar el territorio y alimentar con amor.
          </p>

          <ul className="grid justify-center gap-3 md:grid-cols-3 text-white/90 font-semibold text-base md:text-lg mb-8">
            <li className="flex items-center gap-2">
              <FaStar className="text-[#25793A]" size={20} /> {/* Green */}
              Miel 100% natural
            </li>
            <li className="flex items-center gap-2">
              <FaLeaf className="text-[#25793A]" size={20} /> {/* Green */}
              Apicultura responsable
            </li>
            <li className="flex items-center gap-2 mb-4">
              <FaGlobeAmericas className="text-[#25793A]" size={20} /> {/* Green */}
              Compromiso ambiental y social
            </li>
          </ul>

          {/* Center the button on all screens */}
          <div className="flex justify-center mt-6">
            <Link
              to="#about"
              className="bg-[#25793A] hover:bg-[#FAC80C] text-white px-6 py-3 rounded-full font-semibold shadow-lg transform transition duration-300 hover:scale-105"
            >
              Conoce más sobre nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
