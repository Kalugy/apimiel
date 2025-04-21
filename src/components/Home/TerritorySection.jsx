import React from "react";

const TerritorySection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-6 lg:px-32"
      style={{ backgroundImage: "url('/images/alhue.png')" }} // Replace with your image of Alhué's landscape
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAC80C]">
          Territorio / Nuestro Entorno
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
          Producimos en Alhué, una comuna con una profunda tradición campesina, ubicada entre cerros, ríos y biodiversidad única. Aquí las abejas encuentran alimento limpio, sin contaminación, en un entorno que aún conserva su pureza.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
          Trabajar desde este territorio es también una forma de resistir: proteger la ruralidad, defender la naturaleza y aportar al desarrollo local.
        </p>
      </div>
    </section>
  );
};

export default TerritorySection;
