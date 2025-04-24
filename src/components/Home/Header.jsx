import React from "react";

const ContactUsSection = () => {
  return (
    <section className="flex items-center min-h-screen justify-center bg-gradient-to-tr from-[#FFF8F2] to-slate-50 py-24 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side Content */}
        <div className="text-black text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl text-left font-extrabold">Miel de Alhué!</h1>
          <h2 className="text-xl md:text-3xl font-medium mb-4">
            Reconocida en el 2021 con sello de origen e identificación geográfica.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Es la primera y única en Chile en recibir esta distinción . Esto significa que cada cucharada es auténtica al 100%, llevando consigo las cualidades particulares de su lugar de origen.

          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#about"
              className="bg-[#D08C00] text-white px-6 py-3 rounded-md hover:bg-[#bb7800] transition shadow-sm"
            >
              Sobre nosotros
            </a>
            <a
              href="#productos"
              className="bg-[#D08C00] text-white px-6 py-3 rounded-md hover:bg-[#bb7800] transition hover:bg-[#136245] shadow-sm"
            >
              Nuestros productos
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
