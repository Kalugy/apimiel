import React from "react";
import { FaFlag, FaLightbulb } from "react-icons/fa";

const MissionVisionCleanSection = () => {
  return (
    <section className="bg-[#FFF8F2] py-20 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Nuestra Misión y Visión</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Misión */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-28 h-28 rounded-full border-4 border-[#D08C00] flex items-center justify-center mb-4 shadow-md">
              <FaFlag className="text-[#D08C00] text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              <span className="text-[#D08C00]">Nuestra Misión</span>
            </h3>
            <p className="text-gray-600">
              Ofrecer productos naturales y de alta calidad, promoviendo la sostenibilidad y el respeto por las abejas.
            </p>
          </div>

          {/* Visión */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-28 h-28 rounded-full border-4 border-[#D08C00] flex items-center justify-center mb-4 shadow-md">
              <FaLightbulb className="text-[#D08C00] text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              <span className="text-[#D08C00]">Nuestra Visión</span>
            </h3>
            <p className="text-gray-600">
              Convertirnos en líderes en apicultura sostenible y educación ambiental a nivel regional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionCleanSection;
