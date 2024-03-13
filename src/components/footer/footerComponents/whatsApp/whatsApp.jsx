import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { divContainer } from "./whatsAppStyle";

export default function WhatsApp() {
  return (
    <div className={divContainer}>
      <a
        href="https://wa.me/543704094513/?text=Hola%20estoy%20interesado%20en%20comprar%20juegos"
        target="_blank"
      >
        <FaWhatsapp className="text-3xl text-slate-100 lg:text-6xl lg:text-green-400 lg:hover:text-slate-100" />
      </a>
    </div>
  );
}
