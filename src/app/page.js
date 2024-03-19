"use client";

import Compromiso from "@/components/compromiso/Compromiso";
import Oferta from "@/components/oferta/Oferta";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Beneficios from "@/components/beneficios/Beneficios";
import ShoppingCart from "@/components/newCart/shoppingCart";
import { useState } from "react";
import ComicCon from "@/components/ComicCon/ComicCon";
import CardCarousel from "@/components/CarouselCards/Carousel";
import Footer from "@/components/footer/footer";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="h-screen w-full">
      <Navbar setIsVisible={setIsVisible} isVisible={isVisible} />
      <Card />
      <Beneficios />
      <Compromiso />
      <Oferta />
      <ComicCon />
      <div className="container mt-8 h-full">
        <h2 className="mb-6 text-center">
          Adquiere éstas ofertas a menos de $1000
        </h2>
        <CardCarousel />
      </div>
      <Footer />
      {isVisible && (
        <ShoppingCart isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
    </div>
  );
}
