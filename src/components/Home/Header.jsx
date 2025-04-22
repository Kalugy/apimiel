import React from "react";

const ContactUsSection = () => {
  return (
    <section className="flex items-center min-h-screen justify-center bg-gradient-to-tr from-[#FFF8F2] to-slate-50 py-24 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side Content */}
        <div className="text-black text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">Miel con historia</h1>
          <h2 className="text-xl md:text-3xl font-medium mb-4">
            Desde la comuna de Alhué, Región Metropolitana, producimos miel pura y subproductos apícolas de forma consciente y sostenible.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Somos una familia apícola que cree en el poder de las abejas para regenerar el territorio y alimentar con amor.
            Creemos que la miel no solo es un producto, sino un testimonio de trabajo y compromiso con la naturaleza y la comunidad.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#productos"
              className="bg-white text-[#25793A] hover:bg-[#0F0C0B] px-6 py-3 rounded-full font-semibold transition duration-300"
            >
              Explora nuestros productos
            </a>
            <a
              href="#about"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#25793A] px-6 py-3 rounded-full font-semibold transition duration-300"
            >
              Conoce más sobre nosotros
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center w-full lg:w-[90%]">
          <img
            src="/images/home.png" // Replace with your image path
            alt="Illustration of honey production"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
