import React, { useState } from "react";

const tabs = ["Cajas", "Frascos"];

const products = [
  {
    name: "Cajas de Sachet Miel Natural",
    description:
      "Envase con 30 sachet de 10 gramos de miel 100% multifloral. Duración indefinida.",
    image: "/images/p3.jpeg",
    presentation: "caja 30g",
    price: "15.000",
    salePrice: "10000",
    category: "Cajas",
    isOnSale: true,
  },
  {
    name: "Sachets de Miel con Limón Natural",
    description:
      "Alivia la tos y el dolor de garganta con miel y limón: una mezcla natural con propiedades antibacterianas y vitamina C para combatir resfriados y gripe",
    image: "/images/p2.jpeg",
    presentation: "caja 30g",
    price: "20.000",
    salePrice: "18.000",
    category: "Cajas",
  },
  {
    name: "Miel con Sabor a Frutilla Natural",
    description:
      "La preferida por los niños y jóvenes por su agradable sabor.",
    image: "/images/p1.jpeg",
    presentation: "caja 30g",
    price: "18.000",
    salePrice: "8.000",
    category: "Cajas",
  },
  {
    name: "Miel con Sabor a Frutilla Natural",
    description:
      "La preferida por los niños y jóvenes por su agradable sabor.",
    image: "/images/bottle2.jpeg",
    presentation: "Frasco 30g",
    price: "18.000",
    salePrice: "8.000",
    category: "Frascos",
  },
  {
    name: "Miel con Limon",
    description:
      "Miel 100% natural con limón",
    image: "/images/bottle1.jpeg",
    presentation: "Frasco 30g",
    price: "18.000",
    salePrice: "8.000",
    category: "Frascos",
  },
  {
    name: "Miel Natural",
    description:
      "Miel 100% natural",
    image: "/images/miel1.jpeg",
    presentation: "Frasco 30g",
    price: "18.000",
    salePrice: "8.000",
    category: "Frascos",
  },

];


const LatestProductsSection = () => {
  const [activeTab, setActiveTab] = useState("Cajas");

  return (
    <section className="py-16 px-4 text-center bg-white">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-[#D08C00] text-sm font-semibold italic">¡Lo más destacado!</p>
        <h2 className="text-3xl font-bold text-gray-800">Últimos Productos</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`uppercase font-medium text-sm border-b-2 px-2 pb-1 ${
              activeTab === tab
                ? "border-[#D08C00] text-black"
                : "border-transparent text-gray-400"
            } hover:text-[#D08C00]`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products
          .filter((product) => product.category === activeTab)
          .map((product, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
             {/* Sale Badge */}
              {/*{product?.isOnSale && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-bl">
                  SALE
                </span>
              )}*/}
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-sm text-gray-500 italic mb-1">{product.presentation}</p>
              {/*<p className="text-[#D08C00] font-semibold">{product.price}</p>*/}
              {/* Price */}
              {/*<div className="mt-2 text-sm">
                {product.salePrice ? (
                  <>
                    <span className="text-gray-400 line-through mr-2">${product.price}</span>
                    <span className="text-[#D08C00] font-semibold">${product.salePrice}</span>
                  </>
                ) : (
                  <span className="text-[#D08C00] font-semibold">${product.price}</span>
                )}
              </div>*/}
            </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProductsSection;
