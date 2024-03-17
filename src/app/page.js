"use client";
/*** Propuestas:
 *Modicar estructura de Card.De Ivan
 *Centrar tarjetas de beneficio ocultar/mostrar texto símil footer.
 *Elegir un navBar
 *Definir nombre/logo
 *Definir idioma
 */

import Compromiso from "@/components/compromiso/Compromiso";
import Oferta from "@/components/oferta/Oferta";
import ComicCon from "@/components/ComicCon/ComicCon";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Beneficios from "@/components/beneficios/Beneficios";
import ShoppingCart from "@/components/newCart/shoppingCart";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="h-screen w-full">
      <Navbar setIsVisible={setIsVisible} isVisible={isVisible} />
      <Card />
      <Beneficios />
      <div className="p-8">
        <Compromiso />
      </div>
      <Oferta />
      <ComicCon />
      <Footer />
      {isVisible && (
        <ShoppingCart isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
    </div>
  );
}
