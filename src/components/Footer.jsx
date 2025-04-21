import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-[#FAC80C] text-2xl" />,
    title: "Email",
    value: "contacto@apicolaorodulce.cl",
  },
  {
    icon: <FaPhoneAlt className="text-[#FAC80C] text-2xl" />,
    title: "Teléfono",
    value: "+56 9 XXXX XXXX",
  },
  {
    icon: <FaWhatsapp className="text-[#FAC80C] text-2xl" />,
    title: "WhatsApp",
    value: "+56 9 XXXX XXXX",
  },
  {
    icon: <FaMapMarkerAlt className="text-[#FAC80C] text-2xl" />,
    title: "Ubicación",
    value: "Alhué, Región Metropolitana, Chile"
  },
];

const Footer = () => {
  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "#about" },
    { label: "Productos", href: "#productos" },
    { label: "Contacto", href: "#contacto" }
  ];

  const socialMediaLinks = [
    { href: "https://www.instagram.com/apicolaorodulce/", icon: FaInstagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0F0C0B] text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="Apícola Oro Dulce Logo" className="h-8 rotate-[10deg]" />
            <h4 className="text-2xl font-bold text-[#FAC80C]">Apícola Oro Dulce</h4>
          </div>
          <p className="text-sm text-[#B88335] font-semibold max-w-xs">
            Miel 100% natural, cosechada en la región de Alhué, sin aditivos. Apoya la conservación de las abejas y consume productos locales.
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#FAC80C] pt-5">Síguenos</h4>
            <div className="flex gap-4">
              {socialMediaLinks.map((social, idx) => {
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hover:text-[#E52C35] text-white transition text-2xl"
                  >
                    <social.icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#FAC80C]">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div>
                    <p className="text-sm font-medium text-[#FAC80C]">{item.title}:</p>
                    {item.title === "Email" ? (
                      <a href={`mailto:${item.value}`} className="text-sm hover:text-[#FAC80C] transition">
                        {item.value}
                      </a>
                    ) : item.title === "WhatsApp" ? (
                      <a
                        href="https://wa.link/q8rlm1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-[#FAC80C] transition"
                      >
                        {item.value}
                      </a>
                    ) : item.title === "Teléfono" ? (
                      <a
                        href={`tel:${item.value.replace(/\s/g, "")}`}
                        className="text-sm hover:text-[#FAC80C] transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#FAC80C]">Empresa</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <a
                      href={link.href}
                      className="hover:text-[#FAC80C] transition"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-[#FAC80C] transition"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-[#B88335]">
        &copy; {new Date().getFullYear()} Apícola Oro Dulce. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
