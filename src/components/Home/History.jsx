import React from "react";
import { FaHandshake, FaSeedling, FaBoxOpen } from "react-icons/fa";

const AboutHoneySection = () => {
  return (
    <section className="bg-[#FFF8F2] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="relative w-full lg:w-1/2">
            <img
              src="/images/honey1.jpg" // Reemplaza con tu ruta
              alt="Frascos de miel"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow-md text-center">
              <p className="text-xl font-bold text-[#D08C00]">24+</p>
              <p className="text-sm text-gray-700">Años de experiencia</p>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h4 className="text-[#D08C00] uppercase tracking-wide font-medium">Nuestra Miel
            </h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Te brindamos los mejores productos
            </h2>
            <p className="text-gray-600">
              La Miel de Alhué captura la esencia de los Altos de Cantillana con una mezcla única de flores nativas chilenas. Su color ámbar y sabor natural reflejan la riqueza de nuestra flora endémica.            </p>
            <button className="bg-[#D08C00] text-white px-6 py-3 rounded-md hover:bg-[#bb7800] transition">
              Descubre más
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <FaHandshake className="text-[#D08C00] text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">Apicultura Tradicional</h3>
            <p className="text-gray-600 text-sm mt-2">
              Miel cultivada con técnicas respetuosas y sostenibles.
            </p>
            <button className="mt-4 text-[#D08C00] font-medium hover:underline">Conoce más</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <FaSeedling className="text-[#D08C00] text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">Jardín de Abejas</h3>
            <p className="text-gray-600 text-sm mt-2">
              Espacios dedicados a polinizadores y biodiversidad.
            </p>
            <button className="mt-4 text-[#D08C00] font-medium hover:underline">Conoce más</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <FaBoxOpen className="text-[#D08C00] text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">Productos Naturales</h3>
            <p className="text-gray-600 text-sm mt-2">
              Amplia gama de miel, propóleo y derivados naturales.
            </p>
            <button className="mt-4 text-[#D08C00] font-medium hover:underline">Conoce más</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHoneySection;
