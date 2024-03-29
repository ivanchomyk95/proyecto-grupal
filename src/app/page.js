"use client";

import Compromiso from "@/components/compromiso/Compromiso";
import Oferta from "@/components/oferta/Oferta";
import Card from "@/components/card/Card";
import Beneficios from "@/components/beneficios/Beneficios";
import Navbar2 from "@/components/navbar2/Navbar2";
import Inicio from "@/components/inicio/Inicio";
import ShoppingCart from "@/components/newCart/shoppingCart";
import { useState } from "react";
import ComicCon from "@/components/ComicCon/ComicCon";
import CarouselApp from "@/components/CarouselCards/CarouselApp";
import Footer from "@/components/footer/footer";
import ContextData from "./ContexProvider/ContextProvider";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="h-screen w-full">
      <ContextData>
        <Navbar2 isVisible={isVisible} setIsVisible={setIsVisible} />
        <Inicio />
        <Card />
        <Beneficios />
        <Compromiso />
        <Oferta />
        <ComicCon />
        <CarouselApp />
        <Footer />
        {isVisible && (
          <ShoppingCart isVisible={isVisible} setIsVisible={setIsVisible} />
        )}
      </ContextData>
    </div>
  );
}
