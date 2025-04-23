import React from "react";


const blogPosts = [
  {
    image: "/images/miel56.jpg",
    title: "¿Por qué la miel natural es un superalimento?",
    description:
      "Descubre los beneficios nutricionales de la miel pura y cómo puede fortalecer tu sistema inmunológico de forma natural.",
    date: "22 Abr 2025",
    views: "2.310 vistas",
  },
  {
    image: "/images/miel57.jpg",
    title: "Producción de miel sostenible: el futuro de la apicultura",
    description:
      "Conoce cómo las prácticas apícolas responsables ayudan a proteger a las abejas y conservar el medio ambiente.",
    date: "19 Abr 2025",
    views: "1.875 vistas",
  },
  {
    image: "/images/miel55.jpg",
    title: "¿Qué significa miel orgánica y cómo identificarla?",
    description:
      "Te explicamos cómo reconocer una miel verdaderamente orgánica y por qué es mejor para tu salud y el planeta.",
    date: "10 Abr 2025",
    views: "3.520 vistas",
  },
];

function BlogCards() {
  return (
    <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
  <h4 className="text-[#D08C00] uppercase tracking-wide font-medium mb-2">
    Educación Apícola
  </h4>
  <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6">
    Blog / Noticias
  </h2>

  <p className="max-w-3xl text-gray-600 mb-12 text-lg">
    Explora nuestros artículos y noticias sobre el mundo de las abejas, su conservación y los beneficios de consumir productos apícolas locales. ¡Únete a nuestra comunidad de guardianes de la miel!
  </p>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogPosts.map((post, index) => (
      <div
        key={index}
        className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-1"
      >
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
          <div className="flex items-center justify-between mt-4 text-gray-400 text-xs">
            <span>{post.date}</span>
            <span>{post.views}</span>
          </div>
          <a href="#" className="text-amber-600 font-semibold mt-3 block">
            Leer más...
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}



const BlogSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-24 px-6 lg:px-32 text-[#0F0C0B]" id="blog">
      
      <BlogCards />
      
    </section>
  );
};

export default BlogSection;
