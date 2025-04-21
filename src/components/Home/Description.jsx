import React from "react";

const VisionMission = () => {
  return (
    <section className="relative bg-[#F9F9F9] py-24 px-6 lg:px-32 text-[#0F0C0B]" id="vision-mission">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAC80C] relative inline-block">
            Visión y Misión
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#FAC80C] rounded-full"></span> {/* Honey color */}
          </h2>

          <h3 className="text-2xl font-semibold text-[#FAC80C] mb-4">Visión</h3> {/* Green for subheading */}
          <p className="mb-6 text-lg leading-relaxed text-[#53270D]"> {/* Rich Brown for paragraph */}
            Ser reconocidos como una empresa apícola referente en calidad, compromiso ambiental y responsabilidad social en Chile, llevando nuestra miel desde Alhué a todo el país y el mundo.
          </p>

          <h3 className="text-2xl font-semibold text-[#FAC80C] mb-4">Misión</h3> {/* Green for subheading */}
          <p className="mb-6 text-lg leading-relaxed text-[#53270D]"> {/* Rich Brown for paragraph */}
            Producir miel y subproductos apícolas de forma sustentable, cuidando el bienestar de las abejas, preservando la biodiversidad de nuestro territorio, y entregando a nuestros clientes alimentos naturales, saludables y con identidad local.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center items-center">
          <div className="w-full h-[400px] lg:w-[500px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAC80C] relative transform hover:scale-105 transition-transform duration-300"> {/* Honey color border */}
            <img
              src="/images/mielPuesto.jpeg"
              alt="Trabajo Apícola"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* Decorative Shape */}
          <div className="absolute top-[-60px] right-[-60px] bg-[#25793A] w-36 h-36 rounded-full blur-3xl opacity-30 z-0"></div> {/* Honey color */}
        </div>
      </div>

      {/* Added Design: Separator */}
      <div className="absolute bottom-[-50px] left-0 w-full h-24 bg-gradient-to-r from-[#FAC80C] to-[#25793A] rounded-b-3xl opacity-50"></div>{/* Honey Gradient */}
    </section>
  );
};

export default VisionMission;
