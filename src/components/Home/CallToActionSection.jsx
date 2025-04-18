import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CtaSection = () => {
  return (
    <section className="bg-[#E98B07] py-16 px-6 lg:px-20 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          ¿Listo para disfrutar de nuestra miel natural?
        </h2>
        <p className="text-lg mb-8">
          Aprovecha nuestras mieles 100% naturales, cosechadas con amor en la región de Alhué. ¡Haz tu compra ahora y recibe tu pedido en la puerta de tu casa!
        </p>
        <a
          href="https://web.whatsapp.com/" // Replace with your specific WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#2B2829] font-semibold text-lg shadow-lg hover:bg-gray-200 transition"
        >
          <FaWhatsapp className="text-2xl text-[#25D366]" /> ¡Compra por WhatsApp!
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
