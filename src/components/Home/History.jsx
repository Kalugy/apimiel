import React from "react";

const HistoryObjectives = () => {
  return (
    <section className="relative bg-[#F9F9F9] py-24 px-6 lg:px-32 text-[#0F0C0B]" id="history-objectives">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
        {/* Left Side Content (on PC, this will appear on the right) */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#25793A] relative inline-block"> {/* Honey color for heading */}
            Historia y Objetivos
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#FAC80C] rounded-full"></span> {/* Honey color underline */}
          </h2>

          <h3 className="text-2xl font-semibold text-[#25793A] mb-4">Historia</h3> {/* Green for subheading */}
          <p className="mb-6 text-lg leading-relaxed text-[#53270D]"> {/* Rich Brown for paragraph */}
            <span className="font-semibold text-[#25793A]">Apícola Oro Dulce</span> nace como un emprendimiento familiar en la comuna de Alhué, inspirado en el amor por las abejas y la necesidad de generar un sustento digno y sostenible desde el campo chileno. Con esfuerzo y dedicación, fuimos aprendiendo el oficio apícola, desarrollando productos nobles y generando conciencia sobre la importancia de la polinización y el consumo local.
          </p>

          <h3 className="text-2xl font-semibold text-[#25793A] mb-4">Objetivos</h3> {/* Green for subheading */}
          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed text-[#53270D]"> {/* Rich Brown for list items */}
            <li>Proteger y fortalecer la salud de nuestras abejas mediante buenas prácticas apícolas.</li>
            <li>Desarrollar productos innovadores derivados de la miel, como propóleos, cera y polen.</li>
            <li>Educar a la comunidad sobre la importancia de las abejas y el consumo responsable.</li>
            <li>Contribuir al desarrollo económico de la comuna de Alhué mediante empleo local.</li>
          </ul>
        </div>

        {/* Right Side Image with Hexagonal Shape (on PC, this will appear on the left) */}
        <div className="relative flex justify-center items-center">
          <div className="w-full h-[400px] lg:w-[500px] lg:h-[400px] overflow-hidden shadow-2xl border-4 border-[#25793A] relative transform hover:scale-105 transition-transform duration-300"> {/* Honey color border */}
            <div className="hexagon w-full h-full relative">
              <img
                src="/images/mielcup.webp" // Replace with your bee honeycomb image
                alt="Historia Apícola"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Added Design: Separator */}
      {/* <div className="absolute bottom-[-50px] left-0 w-full h-24 bg-gradient-to-r from-[#E52C35] to-[#FAC80C] rounded-b-3xl opacity-50"></div> */}
    </section>
  );
};

export default HistoryObjectives;
