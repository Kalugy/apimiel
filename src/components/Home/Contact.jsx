import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-20 px-6 lg:px-24 bg-white text-[#2B2829]" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 font-serif">Contáctanos</h2>
        <p className="text-sm text-gray-600 max-w-xl mb-12">
          ¿Quieres comprar nuestra miel o saber más sobre nuestro trabajo? <br className="hidden md:block" />
          ¡No dudes en ponerte en contacto con nosotros!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Map and Location */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl shadow-md w-full h-[260px]">
              <iframe
                title="Alhué, Chile Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26452.634841062063!2d-71.11349972983665!3d-34.02900683520943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96630d03dcea2f2b%3A0x96c4c35366c3e4a7!2sAlhue%2C%20Alhu%C3%A9%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sco!4v1745266615732!5m2!1ses-419!2sco"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#25793A]"><FaMapMarkerAlt /></div>
              <div>
                <p className="font-semibold">Ubicación</p>
                <p className="text-sm text-gray-600">Comuna de Alhué, Región Metropolitana, Chile</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Options */}
          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <FaPhoneAlt className="text-[#25793A]" size={20} />
              <p>+56 9 9729 0718</p>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <FaEnvelope className="text-[#25793A]" size={20} />
              <p>contacto@apicolaorodulce.cl</p>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <FaInstagram className="text-[#25793A]" size={20} />
              <p>@apicolaorodulce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
