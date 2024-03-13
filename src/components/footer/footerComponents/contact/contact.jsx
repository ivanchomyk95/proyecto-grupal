import React from "react";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { liStyle } from "./contactStyles";
//"Acerca de" "por Nosotros"

export default function Contact() {
  return (
    <div
      id="redesSociales-enlaces"
      className=" mx-16 my-4 flex w-full justify-evenly pb-4 "
    >
      <div id="redesSociales" className="flex w-20  flex-col gap-2 lg:mx-16">
        <h3>
          <b>SÍGUENOS</b>
        </h3>
        <ul className=" flex flex-wrap  gap-3 text-2xl">
          <a href="#">
            <li className={liStyle}>
              <FaInstagramSquare />
            </li>
          </a>
          <a href="#">
            <li className={liStyle}>
              <FaTwitterSquare />
            </li>
          </a>
          <a href="#">
            <li className={liStyle}>
              <FaFacebook />
            </li>
          </a>
          <a href="#">
            <li className={liStyle}>
              <FaYoutube />
            </li>
          </a>
          <a href="#">
            <li className={liStyle}>
              <FaLinkedin />
            </li>
          </a>
        </ul>
      </div>
      <div id="datosContacto" className="flex w-36 flex-col gap-2  lg:mx-16">
        <h3>
          <b>Datos de Contacto</b>
        </h3>
        <ul className=" flex w-16  flex-wrap gap-3 text-sm">
          <li>
            <b>Dirección:</b> Argentina, Buenos Aires.
          </li>
          <li>
            <b>Teléfono:</b> +54 11-3231-321
          </li>
          <li>
            <b>Email:</b> zonagamer@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}
