import React from "react";
import { FaCcVisa, FaCcMastercard, FaBitcoin } from "react-icons/fa";
import { SiMercadopago, SiAmericanexpress } from "react-icons/si";
import { liStyle } from "../contact/contactStyles";

export default function MediosDePago() {
  return (
    <div
      id="redesSociales-mediosPagos"
      className="my-4 flex w-full justify-evenly pb-4"
    >
      <div id="redesSociales" className="flex w-20 flex-col gap-2 lg:mx-16">
        <h3>
          <b>MEDIOS DE PAGO</b>
        </h3>
        <ul className=" flex  flex-wrap gap-3 text-2xl">
          <li className={liStyle}>
            <FaCcVisa />
          </li>
          <li className={liStyle}>
            <FaCcMastercard />
          </li>
          <li className={liStyle}>
            <SiMercadopago />
          </li>
          <li className={liStyle}>
            <SiAmericanexpress />
          </li>
          <li className={liStyle}>
            <FaBitcoin />
          </li>
        </ul>
      </div>
      <div id="enlaces" className="flex w-36 flex-col gap-2 lg:mx-16">
        <h3>
          <b>ENLACES</b>
        </h3>
        <ul className=" flex w-16  flex-wrap gap-3 text-xl">
          <a href="#" className="hover:font-extrabold">
            <li>Inicio</li>
          </a>
          <a href="#" className="hover:font-extrabold">
            <li>Nosotros</li>
          </a>
          <a href="#" className="hover:font-extrabold">
            <li>Servicios</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
