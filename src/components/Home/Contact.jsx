import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-24 px-6 lg:px-32 text-[#0F0C0B]" id="contacto">
      <h2 className="text-3xl font-bold text-center text-[#FAC80C] mb-6">
        Contacto
      </h2>

      <p className="text-center max-w-3xl mx-auto text-[#53270D] mb-12 text-lg">
        ¿Quieres comprar nuestra miel o saber más sobre nuestro trabajo? 
        ¡No dudes en ponerte en contacto con nosotros!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold text-[#25793A] mb-4">
            Información de Contacto
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <FaPhoneAlt className="text-[#25793A]" size={20} />
              <p className="text-lg">+56 9 XXXX XXXX</p>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <FaEnvelope className="text-[#25793A]" size={20} />
              <p className="text-lg">contacto@apicolaorodulce.cl</p>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <FaInstagram className="text-[#25793A]" size={20} />
              <p className="text-lg">@apicolaorodulce</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="relative w-full h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-[#25793A]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26452.634841062063!2d-71.11349972983665!3d-34.02900683520943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96630d03dcea2f2b%3A0x96c4c35366c3e4a7!2sAlhue%2C%20Alhu%C3%A9%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sco!4v1745266615732!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación de Apícola Oro Dulce"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
