import React from "react";
import {
  MdChair,
  MdOutlinePriceCheck,
  MdScreenSearchDesktop,
} from "react-icons/md";
import { FaTeamspeak } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";

const iconStyles = {
  height: "50px",
  width: "50px",
};

const profitInfo = [
  {
    pIcon: <MdChair style={iconStyles} />,
    pSubt: "Comodidad y accesibilidad",
    pText:
      "Puedes comprar juegos desde cualquier lugar y a cualquier hora, sin necesidad de desplazarte a una tienda física.",
  },
  {
    pIcon: <MdScreenSearchDesktop style={iconStyles} />,
    pSubt: "Mayor variedad",
    pText:
      "Aquí encontrarás una mayor selección de juegos, incluyendo juegos independientes y títulos difíciles de encontrar",
  },
  {
    pIcon: <MdOutlinePriceCheck style={iconStyles} />,
    pSubt: "Los mejores precios",
    pText:
      "Ofrecemos el mejor precio del mercado, ofertas y promociones inigualables",
  },
  {
    pIcon: <IoCloudDownloadSharp style={iconStyles} />,
    pSubt: "Descargas instantáneas",
    pText:
      "No tienes que esperar a que te envíen el juego por correo, puedes descargarlo e instalarlo inmediatamente después de comprarlo.",
  },
  {
    pIcon: <FaTeamspeak style={iconStyles} />,
    pSubt: "Comparaciones y opiniones",
    pText:
      "Puedes leer opiniones de otros jugadores antes de comprar un juego.",
  },
];

const Beneficios = () => {
  const profitTitle = "Adquiere todos tus juegos favoritos en Game Zone";

  const renderProfit = (profit, index) => {
    return (
      <div
        key={index}
        className="container m-4 flex max-w-[200px] flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div className="mb-4 h-[25%] text-indigo-950">{profit.pIcon}</div>
        <h4 className="mb-3 h-[20%] text-center text-xl font-semibold">
          {profit.pSubt}
        </h4>
        <p className="h-[55%] text-sm text-gray-600">{profit.pText}</p>
      </div>
    );
  };

  return (
    <section className="min-h-[350px] bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {profitTitle}
        </h2>
        <div className="flex flex-wrap justify-center gap-2 lg:justify-between">
          {profitInfo.map(renderProfit)}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
