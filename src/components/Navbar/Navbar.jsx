import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotross", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
    { name: "Reservas", href: "https://wa.link/q8rlm1", isButton: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 lg:px-20">
        <NavLink className="cursor-pointer" to="/">
          <div className="flex items-center gap-2">
            <img src="/images/logo.jpeg" alt="Apícola Oro Dulce Logo" className="h-10" />
            <h1 className="text-xl font-bold text-gray-800">Apícola Oro Dulce</h1>
          </div>
        </NavLink>

        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => {
            const isExternal = item.href.startsWith("http");

            return isExternal ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  item.isButton
                    ? "px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
                    : "text-gray-700 font-medium hover:text-black"
                } transition`}
              >
                {item.name}
              </a>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.isButton
                    ? "px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
                    : "text-gray-700 font-medium hover:text-black"
                } transition`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
