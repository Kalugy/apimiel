import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

 
  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "#about" },
    { name: "Productos", href: "#services" },
    { name: "Contacto", href: "#contact" },
    // { name: "Comprar", href: "https://web.whatsapp.com/", isButton: true },
  ];


  const handleMenuClick = () => {
    scrollToTop(); // Scroll to top
    setMobileMenuOpen(false); // Close the menu
    
  };


  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 transition duration-300 bg-transparent text-white`}
    >
      <div className="flex items-center justify-between px-4 py-1 xl:px-80 ">
        {/* Logo */}
        <NavLink className="cursor-pointer" to="/" >
          <div className="flex ml-1 md:ml-9 align-middle items-center">
            <img src="/images/logo.png" alt="Logo" className="h-12 " />
            <h1 className={`text-xs md:text-lg xl:text-2xl italic font-bold ml-2 `}>
              Apícola Oro Dulce
            </h1>
          </div>
        </NavLink>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) =>
            item.isButton ? (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={`px-4 py-2 rounded transition hover:opacity-90`}
                //activeStyle={styles.activeLink}
                
                >
                {item.name}
              </NavLink>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className={`font-semibold `}
              > 
                {item.name}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Burger Button */}
        <button
          className={`md:hidden text-xl `}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed overflow-y-hidden top-0 left-0 w-screen h-full transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } bg-gray-600`}
      >
        <BackgroundCircle />
          
        <button
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute top-4 right-6 text-3xl `}
        >
          ✕
        </button>
        <ul className="flex flex-col items-center justify-center gap-6 h-full">
          {menuItems.map((item) =>
            item.isButton ? (
              <></>
              // <li key={item.name}>
              //   <a
              //     href={item.href}
              //     onClick={handleMenuClick} // Close the menu on click
              //     className={`px-6 py-3 rounded transition button-${theme} ${themeStyles[theme].navbarText} hover:opacity-90`}
              //   >
              //     {item.name}
              //   </a>
              // </li>
            ) : (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={handleMenuClick} // Close the menu on click
                  className={`text-lg font-semibold  transition `}
               
                >
                  {item.name}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

const BackgroundCircle = () => {
  return (
    <div
      className="absolute top-5 left-5 w-12 h-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/logo.png')", // Replace with your image path
      }}
    ></div>
  );
};

export default Navbar;