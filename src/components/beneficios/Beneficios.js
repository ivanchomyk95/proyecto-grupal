import React from "react";
import {
  MdChair,
  MdOutlinePriceCheck,
  MdScreenSearchDesktop,
} from "react-icons/md";
import { FaTeamspeak } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";

const profitInfo = [
  {
    pIcon: <MdChair />,
    pSubt: "Comodidad y accesibilidad",
    pText:
      "Puedes comprar juegos desde cualquier lugar y a cualquier hora, sin necesidad de desplazarte a una tienda física.",
  },
  {
    pIcon: <MdScreenSearchDesktop />,
    pSubt: "Mayor variedad",
    pText:
      "Aquí encontrarás una mayor selección de juegos, incluyendo juegos independientes y títulos difíciles de encontrar",
  },
  {
    pIcon: <MdOutlinePriceCheck />,
    pSubt: "Los mejores precios",
    pText:
      "Ofrecemos el mejor precio del mercado, ofertas y promociones inigualables",
  },
  {
    pIcon: <IoCloudDownloadSharp />,
    pSubt: "Descargas instantáneas",
    pText:
      "No tienes que esperar a que te envíen el juego por correo, puedes descargarlo e instalarlo inmediatamente después de comprarlo.",
  },
  {
    pIcon: <FaTeamspeak />,
    pSubt: "Comparaciones y opiniones",
    pText:
      "Puedes leer opiniones de otros jugadores antes de comprar un juego.",
  },
];

const Beneficios = () => {
  const profitTitle =
    "¿Cuáles son los beneficios de comprar tus juegos en Game Zone?";

  const renderProfit = (profit) => {
    return (
      <div className="flex flex-col items-center justify-center max-w-[200px] p-4 m-4 bg-white rounded-lg shadow-lg">
        <div className="text-4xl text-gray-500 mb-4 h-[25%]]">{profit.pIcon}</div>
        <h4 className="text-xl text-center font-semibold mb-3 h-[20%]">{profit.pSubt}</h4>
        <p className="text-sm text-gray-600 h-[55%]">{profit.pText}</p>
      </div>
    );
  };

  return (
    <section className="bg-gray-100 min-h-[350px]">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8 text-center">{profitTitle}</h2>
        <div className="flex flex-wrap justify-between gap-2">{profitInfo.map(renderProfit)}</div>
      </div>
    </section>
  );
};

export default Beneficios;
