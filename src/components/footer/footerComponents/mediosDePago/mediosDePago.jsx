import React from "react";
import { FaCcVisa, FaCcMastercard, FaBitcoin } from "react-icons/fa";
import { SiMercadopago, SiAmericanexpress } from "react-icons/si";

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
          <li>
            <FaCcVisa />
          </li>
          <li>
            <FaCcMastercard />
          </li>
          <li>
            <SiMercadopago />
          </li>
          <li>
            <SiAmericanexpress />
          </li>
          <li>
            <FaBitcoin />
          </li>
        </ul>
      </div>
      <div id="enlaces" className="flex w-36 flex-col gap-2 lg:mx-16">
        <h3>
          <b>ENLACES</b>
        </h3>
        <ul className=" flex w-16  flex-wrap gap-3 text-xl">
          <a href="#">
            <li>Inicio</li>
          </a>
          <a href="#">
            <li>Nosotros</li>
          </a>
          <a href="#">
            <li>Servicios</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
