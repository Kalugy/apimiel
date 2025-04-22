import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-[#FFF1EC] py-20 px-6 lg:px-20 overflow-hidden">
      {/* Background design element */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-200 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FAC80C] rounded-full opacity-10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-14">
        
        {/* Text Section */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="text-sm font-medium text-[#E98B07] uppercase tracking-wide">Conócenos</span>
          <h2 className="text-4xl font-extrabold text-[#136245] mb-4 drop-shadow-md">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Miel 100% natural, cosechada en Alhué. Apoyamos la conservación de las abejas y promovemos el consumo local, sin aditivos ni procesos industriales.
          </p>
          <button className="border border-[#136245] px-6 py-2 rounded-md text-sm font-semibold text-[#136245] hover:bg-[#136245] hover:text-white transition shadow-sm">
            Contáctanos
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-[260px] h-[260px] lg:w-[320px] lg:h-[320px]">
          <div className="w-full h-full clip-hexagon overflow-hidden shadow-2xl border-4 border-[#fff3d0]">
            <img
              src="/images/personmiel.jpeg"
              alt="Imagen familiar"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
