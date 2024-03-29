import Boton from "../button/Button";
import { cards } from "../../../public/dataSet/cards";
import { ContextData } from "@/app/ContexProvider/ContextProvider";
import { useContext } from "react";

export default function Card() {
  const { addToCart } = useContext(ContextData);

  const tarjeta = cards.map(({ imageSrc, name, price, promo, id }, index) => {
    const handleAddToCart = () => {
      addToCart({ imageSrc, name, price, promo, id });
    };
    return (
      <div
        key={index}
        className="mx-auto max-w-xs overflow-hidden rounded-3xl bg-[#c5cacd57] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <img src={imageSrc} alt="The Witcher" className="h-auto w-full" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{name}</div>
          <p className="text-base text-gray-600">
            <s>{price}</s>
          </p>
          <p className=" text-xl font-bold text-green-700">{promo}</p>
        </div>
        <div className="flex justify-center px-6 py-2">
          <Boton handleAddToCart={handleAddToCart} texto="Comprar" />
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className="mb-10 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
        ¡Aprovecha Nuestras Ofertas de la Semana!
      </h2>
      <div
        id="cards"
        className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {tarjeta}
      </div>
    </div>
  );
}
