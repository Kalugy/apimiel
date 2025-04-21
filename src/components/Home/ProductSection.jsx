import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    name: "Miel de Pradera Natural",
    description:
      "Cosechada de flores silvestres de la zona de Alhué, sin ningún tipo de aditivos. Sabor auténtico y textura cremosa.",
    image: "/images/miel1.jpeg",
    presentation: "500g / 1kg",
    price: "Precio: $10.000 / $18.000",
  },
  {
    name: "Miel Multifloral de Temporada",
    description:
      "Miel que refleja la biodiversidad del año. Cada cosecha tiene un aroma y color único.",
    image: "/images/miel1.jpeg", // Replace with your second product image
    presentation: "500g / 1kg",
    price: "Precio: $12.000 / $20.000",
  },
  {
    name: "Propóleos Natural",
    description:
      "Extracto natural con propiedades antibacterianas y antivirales, ideal para reforzar el sistema inmune.",
    image: "/images/miel1.jpeg", // Replace with your third product image
    presentation: "Frasco 30g",
    price: "Precio: $8.000",
  },
  {
    name: "Cera de Abeja Pura",
    description:
      "Usada para cosmética, velas y remedios naturales. Extraída con cuidado del panal.",
    image: "/images/miel1.jpeg", // Replace with your fourth product image
    presentation: "100g",
    price: "Precio: $5.000",
  },
];

const ProductSection = () => {
  return (
    <section
      id="productos"
      className="bg-[#F9F9F9] py-24 px-6 lg:px-32 relative z-10"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2 className="text-3xl font-bold text-center text-[#25793A] mb-6">
        Nuestros Productos
      </h2>

      <p className="text-center max-w-3xl mx-auto text-[#25793A] mb-12 text-lg">
        Ofrecemos una variedad de productos naturales, recolectados y procesados
        de manera responsable, para llevar lo mejor de la naturaleza directamente
        a tu mesa.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="pb-28"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <div className="rounded-3xl shadow-xl border border-[#FAC80C]/20 p-8 m-8 text-center h-full hover:shadow-2xl transition duration-300 flex flex-col items-center">
              {/* Image */}
              <div className="w-full h-[250px] md:h-[350px] mb-4 rounded-xl overflow-hidden border-4 border-[#FAC80C] bg-white shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <h3 className="text-xl font-bold text-[#0F0C0B] mb-1">{product.name}</h3> {/* Dark Brown for product title */}
              <p className="text-[#FAC80C] font-medium mb-2">{product.presentation}</p> {/* Honey color for presentation */}
              <p className="text-[#53270D] text-sm leading-relaxed mb-4">{product.description}</p> {/* Rich Brown for description */}
              <p className="text-[#53270D] font-semibold mb-4">{product.price}</p> {/* Rich Brown for price */}

              {/* Buy Button */}
              <button className="bg-[#FAC80C] hover:bg-[#B88335] text-[#0F0C0B] px-6 py-3 rounded-full font-semibold shadow-md transition duration-300">
                Comprar Ahora
              </button> {/* Honey color button with hover effect */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSection;
