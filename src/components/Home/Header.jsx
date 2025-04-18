import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaLeaf, FaGlobeAmericas } from "react-icons/fa";

const HomeHero = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Millary62.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-3xl mx-auto p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl text-white text-center shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#E98B07] drop-shadow mb-4">
          Miel con historia, sabor con propósito.
        </h1>

        <p className="text-md md:text-lg mb-6 leading-relaxed text-white/90">
          Desde la comuna de Alhué, Región Metropolitana, producimos miel pura y subproductos apícolas de forma
          consciente y sostenible. Somos una familia apícola que cree en el poder de las abejas para regenerar el
          territorio y alimentar con amor.
        </p>

        <ul className="grid gap-3 md:grid-cols-3 text-left text-white/90 text-base md:text-lg mb-8">
          <li className="flex items-center gap-2">
            <FaStar className="text-[#E98B07]" size={20} />
            Miel 100% natural
          </li>
          <li className="flex items-center gap-2">
            <FaLeaf className="text-[#E98B07]" size={20} />
            Apicultura responsable
          </li>
          <li className="flex items-center gap-2">
            <FaGlobeAmericas className="text-[#E98B07]" size={20} />
            Compromiso ambiental y social
          </li>
        </ul>

        <Link
          to="#about"
          className="bg-[#E52C35] hover:bg-[#c5252d] text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
        >
          Conoce más sobre nosotros
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
