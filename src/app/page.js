"use client";

import Compromiso from "@/components/compromiso/Compromiso";
import Oferta from "@/components/oferta/Oferta";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Beneficios from "@/components/beneficios/Beneficios";
import CarouselApp from "@/components/CarouselCards/CarouselApp";
import ComicCon from "@/components/ComicCon/ComicCon";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <Card />
      <Beneficios />
      <Compromiso />
      <Oferta />
      <ComicCon />
      <CarouselApp className="p-1" />
       <Footer />
     
    </div>
  );
}