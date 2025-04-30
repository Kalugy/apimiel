import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CtaSection = () => {
  return (
    <section className="bg-[#FFF8F2] py-16 px-6 lg:px-20 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#0F0C0B]">
          Contáctanos por WhatsApp para compras al por mayor!        
        </h2>
        <p className="text-lg mb-8 text-[#53270D]">
          
          Contactanos por WhatsApp compras por mayor a distribuidores y comercios.
        </p>
        <a
          href="https://wa.link/ydj43a" // Replace with your specific WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0F0C0B] font-semibold text-lg shadow-lg hover:bg-gray-200 transition"
        >
          <FaWhatsapp className="text-2xl text-[#25D366]" /> Contactanos por WhatsApp!
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
