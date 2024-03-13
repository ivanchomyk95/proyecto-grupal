import React from "react";
import Boton from "../button/Button";
import StyledButton from "@/components/button/Button";

const Card = () => {
  return (
    // <div className="overflow-hidden bg-f8f9fa rounded-md shadow-sm transition duration-300 transform hover:scale-105 mx-auto max-w-sm">
    //   <img src={image} alt={title} className="w-full h-64 object-cover" />
    //   <div className="px-6 py-4"/>
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <p className="text-gray-700 text-base">${price}</p>
    //     <div className="pt-4 pb-2">
    //       <Boton texto="Comprar" />
    //     </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-[#c5cacd57] shadow-xl">
        <img
          src="imgs/the-witcher.jpg"
          alt="The Witcher"
          className="h-auto w-full"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">The Witcher</div>
          <p className="text-base text-gray-700">$200</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          {/* <button className="bg-red-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
            Comprar
          </button> */}
          <StyledButton text="Comprar" />
        </div>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-[#c5cacd57] shadow-xl">
        <img
          src="imgs/r-evil.jpg"
          alt="Resident Evil"
          className="h-auto w-full"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Resident Evil</div>
          <p className="text-base text-gray-700">$300</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <button className="rounded bg-red-700 px-4 py-2 font-bold text-white hover:bg-blue-900">
            Comprar
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-[#c5cacd57] shadow-xl">
        <img
          src="imgs/serious-sam.jpg"
          alt="Serious Sam"
          className="h-auto w-full"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Serious Sam</div>
          <p className="text-base text-gray-700">$100</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <button className="rounded bg-red-700 px-4 py-2 font-bold text-white hover:bg-blue-900">
            Comprar
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-[#c5cacd57] shadow-xl">
        <img
          src="imgs/batman-arkham.jpg"
          alt="Batman Arkham"
          className="h-auto w-full"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Batman Arkham</div>
          <p className="text-base text-gray-700">$200</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <button className="rounded bg-red-700 px-4 py-2 font-bold text-white hover:bg-blue-900">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
