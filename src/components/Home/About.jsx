import React from "react";

const AboutUs = () => {
  return (
    <section
      className="relative bg-[#F9F9F9] py-24 px-6 lg:px-32 text-[#2B2829]"
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E98B07] relative inline-block">
            ¿Quiénes Somos?
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#E52C35] rounded-full"></span>
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            <span className="font-semibold text-[#E52C35]">Apícola Oro Dulce</span> nace del deseo de vivir en armonía con la naturaleza y ofrecer un alimento noble, lleno de vida. Enclavados en la precordillera del secano interior, en la comuna de Alhué, trabajamos con respeto por las abejas y por los tiempos de la tierra.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Nuestro compromiso es simple pero profundo: cuidar a las abejas, proteger el entorno y ofrecer productos honestos y saludables.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Creemos que cada frasco de miel cuenta una historia. Y la nuestra está hecha de trabajo, tradición y amor por lo que hacemos.
          </p>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center items-center">
          <div className="w-full h-[400px] lg:w-[500px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#E98B07] relative transform hover:scale-105 transition-transform duration-300">
            <img
              src="/images/Millary62.webp"
              alt="Familia Apícola"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute top-6 left-6 w-24 h-24 bg-[#E52C35] rounded-full opacity-30 animate-pulse"></div>
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

export default AboutUs;
