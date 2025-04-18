import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text text-3xl" />,
    title: "Email",
    value: "contacto@apicolaorodulce.cl",
    action: () => window.location.href = "mailto:contacto@apicolaorodulce.cl",
    color: "bg-[#6C757D]", // Soft Gray
  },
  {
    icon: <FaPhoneAlt className="text text-3xl" />,
    title: "Teléfono",
    value: "+56 9 XXXX XXXX",
    action: () => window.location.href = "tel:+569XXXXXXX",
    color: "bg-[#4CAF50]", // Soft Green
  },
  {
    icon: <FaWhatsapp className="text text-3xl" />,
    title: "WhatsApp",
    value: "+56 9 XXXX XXXX",
    action: () => window.location.href = "https://wa.me/+569XXXXXXX",
    color: "bg-[#25D366]", // WhatsApp Green
  },
  {
    icon: <FaInstagram className="text text-3xl" />,
    title: "Instagram",
    value: "@apicolaorodulce",
    action: () => window.open("https://instagram.com/apicolaorodulce", "_blank"),
    color: "bg-[#E1306C]", // Instagram Pink
  },
  {
    icon: <FaMapMarkerAlt className="text text-3xl" />,
    title: "Ubicación",
    value: "Alhué, Región Metropolitana, Chile",
    action: () => window.open("https://www.google.com/maps/place/Alhué,+Regi%C3%B3n+Metropolitana,+Chile", "_blank"),
    color: "bg-[#FF9800]", // Orange
  },
];

const ContactSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#F8F9FA]" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#343A40] mb-8">Contáctanos</h2>
      <p className="text-center text-[#555] mb-12 max-w-xl mx-auto">
        ¿Quieres comprar nuestra miel o saber más sobre nuestro trabajo? ¡Estamos felices de responder tus dudas y compartir lo que hacemos!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-6 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer ${item.color}`}
            onClick={item.action}
          >
            <div className="bg-white p-4 rounded-full shadow-md">{item.icon}</div>
            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
            <p className="text-white">{item.value}</p>
            <button className="mt-4 px-6 py-2 bg-white text-[#343A40] font-semibold rounded-full shadow-md hover:bg-[#F1F1F1] transition">
              Contactar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
