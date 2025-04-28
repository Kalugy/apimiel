import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFF8F2] text-[#2B2829] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Descripción + Redes */}
        <div>
          <div className="mb-4">
            <img src="/images/logo.png" alt="Apícola Oro Dulce Logo" width={80} height={80} />
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Miel 100% natural, cosechada en la región de Alhué, sin aditivos.
            <br />
            Apoya la conservación de las abejas y consume productos locales.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com/apicolaorodulce" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#E98B07] hover:text-[#cc7a04]" size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-[#E98B07] hover:text-[#cc7a04]" size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-[#E98B07] hover:text-[#cc7a04]" size={24} />
            </a>
          </div>
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Nosotros</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#about" className="hover:text-[#E98B07]">¿Quiénes somos?</a></li>
            <li><a href="#productos" className="hover:text-[#E98B07]">Nuestros productos</a></li>
            <li><a href="#contacto" className="hover:text-[#E98B07]">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="mailto:contacto@apicolaorodulce.cl" className="hover:text-[#E98B07]">contacto@apicolaorodulce.cl</a></li>
            <li><a href="tel:+569XXXXXXX" className="hover:text-[#E98B07]">+56 9 9729 0718</a></li>
            <li><a href="https://instagram.com/apicolaorodulce" target="_blank" className="hover:text-[#E98B07]">@apicolaorodulce</a></li>
          </ul>
        </div>

        {/* Ubicación */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Ubicación</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26452.634841062063!2d-71.11349972983665!3d-34.02900683520943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96630d03dcea2f2b%3A0x96c4c35366c3e4a7!2sAlhue%2C%20Alhu%C3%A9%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sco!4v1745266615732!5m2!1ses-419!2sco"
            width="100%"
            height="120"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        © {new Date().getFullYear()} Apícola Oro Dulce – Hecho con 🐝 en Alhué
      </div>
    </footer>
  );
};

export default Footer;
