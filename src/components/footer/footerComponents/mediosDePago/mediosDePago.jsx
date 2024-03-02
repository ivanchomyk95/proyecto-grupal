import React from "react";
import { FaCcVisa, FaCcMastercard, FaBitcoin } from "react-icons/fa";
import { SiMercadopago, SiAmericanexpress } from "react-icons/si";
export default function MediosDePago() {
  return (
    <div
      id="redesSociales-enlaces"
      className="my-4 flex w-96 justify-around pb-4"
    >
      <div id="redesSociales" className="flex w-20  flex-col gap-2">
        <h3>
          <b>MEDIOS DE PAGO</b>
        </h3>
        <ul className=" flex  flex-wrap gap-3 text-2xl">
          <a href="#">
            <li>
              <FaCcVisa />
            </li>
          </a>
          <a href="#">
            <li>
              <FaCcMastercard />
            </li>
          </a>
          <a href="#">
            <li>
              <SiMercadopago />
            </li>
          </a>
          <a href="#">
            <li>
              <SiAmericanexpress />
            </li>
          </a>
          <a href="#">
            <li>
              <FaBitcoin />
            </li>
          </a>
        </ul>
      </div>
      <div id="enlaces" className="flex w-20 flex-col gap-2">
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
