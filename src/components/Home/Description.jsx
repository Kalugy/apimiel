import React from "react";

const VisionMission = () => {
  return (
    <section className="relative bg-[#F9F9F9] py-24 px-6 lg:px-32 text-[#2B2829]" id="vision-mission">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E98B07] relative inline-block">
            Visión y Misión
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#E52C35] rounded-full"></span>
          </h2>

          <h3 className="text-2xl font-semibold text-[#E98B07] mb-4">Visión</h3>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Ser reconocidos como una empresa apícola referente en calidad, compromiso ambiental y responsabilidad social en Chile, llevando nuestra miel desde Alhué a todo el país y el mundo.
          </p>

          <h3 className="text-2xl font-semibold text-[#E98B07] mb-4">Misión</h3>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Producir miel y subproductos apícolas de forma sustentable, cuidando el bienestar de las abejas, preservando la biodiversidad de nuestro territorio, y entregando a nuestros clientes alimentos naturales, saludables y con identidad local.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center items-center">
          <div className="w-full h-[400px] lg:w-[500px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#E98B07] relative transform hover:scale-105 transition-transform duration-300">
            <img
              src="/images/mielPuesto.jpeg"
              alt="Trabajo Apícola"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* Decorative Shape */}
          <div className="absolute top-[-60px] right-[-60px] bg-[#E98B07] w-36 h-36 rounded-full blur-3xl opacity-30 z-0"></div>
        </div>
      </div>

      {/* Added Design: Separator */}
      <div className="absolute bottom-[-50px] left-0 w-full h-24 bg-gradient-to-r from-[#E52C35] to-[#E98B07] rounded-b-3xl opacity-50"></div>
    </section>
  );
};

export default VisionMission;
