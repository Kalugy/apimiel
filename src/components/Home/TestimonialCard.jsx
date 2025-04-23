import { useState } from "react";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Luis B.",
    role: "Apicultor y Educador",
    joined: "Hace 12 meses",
    rating: 5.0,
    message:
      "Estos productos de miel han transformado mi día a día. La textura, el sabor y la calidad son excepcionales. Probé la miel natural, los caramelos y hasta los jarabes, ¡y todo me encantó! Se nota el cuidado en cada detalle.",
    avatar: "/images/male.png",
  },
  {
    name: "Laura G.",
    role: "Apicultora",
    joined: "Hace 9 mes",
    rating: 4.8,
    message:
      "Gracias a estos productos con miel, he podido incorporar opciones más saludables y sostenibles en mi hogar. La miel tiene un sabor auténtico, los empaques son lindos y ecológicos, y además el servicio fue excelente. ¡Muy recomendable! Sin duda seguiré comprando",
    avatar: "/images/female.png",
  },
];

export default function TestimonialCard() {
  const [index, setIndex] = useState(0);
  const { name, role, joined, rating, message, avatar } = testimonials[index];

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-[#f9f9f9] w-full py-16 px-6 flex flex-col items-center text-center  mx-auto">
      {/* Title Section */}
      <div className="mb-12">
        <h4 className="text-[#D08C00] uppercase tracking-wide font-medium mb-2">
          Nuestros clientes
        </h4>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6">
          Testimonios
        </h2>
        <p className="max-w-3xl text-gray-600 text-lg">
          Explora los testimonios de nuestra comunidad sobre el impacto de aprender sobre las abejas, su conservación y los beneficios de consumir productos apícolas locales. ¡Únete a nuestra comunidad de guardianes de la miel!
        </p>
      </div>

      {/* Testimonial */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-3xl ">
        {/* Avatar + Quote */}
        <div className="relative">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={avatar}
              alt={`Avatar de ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <FaQuoteLeft className="absolute top-0 left-0 text-4xl text-black -translate-x-4 -translate-y-4 bg-white rounded-full p-1 shadow" />
        </div>

        {/* Text */}
        <div className="flex-1 text-left">
          <div className="flex gap-4 mb-2">
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {joined}
            </span>
            <span className="bg-yellow-100 text-[#D08C00] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <FaStar className="text-[#D08C00]" />
              {rating}
            </span>
          </div>

          <p className="text-gray-700 text-lg mb-4">{message}</p>

          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>

        {/* Arrows */}
        <div className="flex gap-3 mt-6 md:mt-0">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}