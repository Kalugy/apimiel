import React from "react";

const BlogSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-24 px-6 lg:px-32 text-[#0F0C0B]" id="blog">
      <h2 className="text-3xl font-extrabold text-center text-[#25793A] mb-6">
        Blog / Noticias / Educación Apícola
      </h2>

      <p className="text-center max-w-3xl mx-auto text-[#53270D] mb-12 text-lg">
        Explora nuestros artículos y noticias sobre el mundo de las abejas, su conservación y los beneficios de consumir productos apícolas locales. ¡Únete a nuestra comunidad de guardianes de la miel!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* First Blog Item */}
        <div className="rounded-xl shadow-xl border border-[#25793A] p-8 bg-white hover:shadow-2xl transition duration-300">
          <div className="w-full h-[200px] mb-4 rounded-xl overflow-hidden">
            <img
              src="/images/miel57.jpg" // Replace with your image path
              alt="¿Por qué las abejas están desapareciendo?"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#0F0C0B] mb-4">
            ¿Por qué las abejas están desapareciendo?
          </h3>
          <p className="text-[#53270D] mb-4">
            Las abejas están enfrentando diversas amenazas, desde el uso de pesticidas hasta el cambio climático. Conoce las causas y las posibles soluciones.
          </p>
          <a
            href="#"
            className="text-[#25793A] font-semibold hover:text-[#FAC80C] transition"
          >
            Leer más
          </a>
        </div>

        {/* Second Blog Item */}
        <div className="rounded-xl shadow-xl border border-[#25793A] p-8 bg-white hover:shadow-2xl transition duration-300">
          <div className="w-full h-[200px] mb-4 rounded-xl overflow-hidden">
            <img
              src="/images/miel56.jpg" // Replace with your image path
              alt="Cómo identificar una miel auténtica"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#0F0C0B] mb-4">
            Cómo identificar una miel auténtica
          </h3>
          <p className="text-[#53270D] mb-4">
            Aprende a distinguir entre miel auténtica y miel adulterada. Consejos prácticos para asegurarte de que estás consumiendo miel de calidad.
          </p>
          <a
            href="#"
            className="text-[#25793A] font-semibold hover:text-[#FAC80C] transition"
          >
            Leer más
          </a>
        </div>

        {/* Third Blog Item */}
        <div className="rounded-xl shadow-xl border border-[#25793A] p-8 bg-white hover:shadow-2xl transition duration-300">
          <div className="w-full h-[200px] mb-4 rounded-xl overflow-hidden">
            <img
              src="/images/miel55.jpg" // Replace with your image path
              alt="Beneficios de consumir productos apícolas locales"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#0F0C0B] mb-4">
            Beneficios de consumir productos apícolas locales
          </h3>
          <p className="text-[#53270D] mb-4">
            Descubre cómo el consumo de miel, polen, cera y propóleos locales puede beneficiar tu salud y apoyar el desarrollo de las comunidades rurales.
          </p>
          <a
            href="#"
            className="text-[#25793A] font-semibold hover:text-[#FAC80C] transition"
          >
            Leer más
          </a>
        </div>

        {/* Call to Action */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center bg-[#FAC80C] p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-[#0F0C0B] mb-4">
            Conoce más y únete a nuestra comunidad de guardianes de la miel
          </h3>
          <p className="text-[#0F0C0B] mb-6">
            Únete a nuestra misión de proteger las abejas y consumir productos apícolas locales. ¡Juntos podemos hacer la diferencia!
          </p>
          <a
            href="#"
            className="bg-[#0F0C0B] text-[#FAC80C] hover:bg-[#25793A] px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Únete ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
