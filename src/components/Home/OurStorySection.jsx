import React from "react";

const OurStorySection = () => {
  return (
    <section className="relative bg-white py-20 px-6 lg:px-20 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#E98B07] opacity-10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-10 right-0 w-56 h-56 bg-[#FAC80C] opacity-20 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* Image with icon */}
        <div className="relative w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] ">
          {/* Star/flower Icon */}
          <div className="absolute -top-26 left-1/3 -translate-x-1/2 z-10 text-[#E98B07] text-5xl rotate-6 select-none">
            ✱
          </div>

          <div className="w-full h-full clip-hexagon overflow-hidden ">
            <img
              src="/images/Honeybee.jpg" // Usa tu segunda imagen aquí
              alt="Historia Apícola"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-[#136245] mb-4 drop-shadow-md">
            Nuestra Historia
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Todo comenzó como una iniciativa familiar en Alhué, impulsada por el amor a las abejas y la naturaleza. Con los años, nos hemos consolidado como una apícola comprometida con la sostenibilidad, el respeto al ecosistema y la producción responsable de miel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
