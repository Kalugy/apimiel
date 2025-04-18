import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaLeaf, FaGlobeAmericas } from "react-icons/fa";

const HomeHero = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-start px-6"
      style={{ backgroundImage: "url('/images/bg1.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-start max-w-6xl mx-auto p-8 text-white">
        {/* Text content */}
        <div className="max-w-lg text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#E98B07] drop-shadow-lg mb-4">
            Miel con historia, sabor con propósito.
          </h1>

          <p className="text-md md:text-lg leading-relaxed text-white/90 opacity-90">
            Desde la comuna de Alhué, Región Metropolitana, producimos miel pura y subproductos apícolas de forma consciente y sostenible. Somos una familia apícola que cree en el poder de las abejas para regenerar el territorio y alimentar con amor.
          </p>

          <ul className="grid gap-3 md:grid-cols-3 text-left text-white/90 text-base md:text-lg mb-8">
            <li className="flex items-center gap-2">
              <FaStar className="text-[#3D7D41]" size={20} /> {/* Darker Green */}
              Miel 100% natural
            </li>
            <li className="flex items-center gap-2">
              <FaLeaf className="text-[#3D7D41]" size={20} /> {/* Darker Green */}
              Apicultura responsable
            </li>
            <li className="flex items-center gap-2 mb-4">
              <FaGlobeAmericas className="text-[#3D7D41]" size={20} /> {/* Darker Green */}
              Compromiso ambiental y social
            </li>
          </ul>

          <Link
            to="#about"
            className="bg-[#3D7D41] hover:bg-[#335F2B] text-white px-6 py-3 rounded-full font-semibold shadow-lg transform transition duration-300 hover:scale-105"
          >
            Conoce más sobre nosotros
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;
