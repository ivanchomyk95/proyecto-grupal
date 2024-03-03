import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <div className="fixed bottom-8 right-4 rounded-full bg-green-400 p-1 shadow-md shadow-slate-600 duration-200 lg:bottom-10 lg:right-8 lg:bg-slate-200 lg:opacity-60 lg:hover:scale-125 lg:hover:bg-green-500 lg:hover:opacity-100">
      <a
        className="text-3xl text-slate-100 lg:text-6xl lg:text-green-400 lg:hover:text-slate-100"
        href="https://wa.me/543704094513/?text=Hola%20estoy%20interesado%20en%20comprar%20juegos"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
