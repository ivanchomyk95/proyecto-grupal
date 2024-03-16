"use client";

import Compromiso from "@/components/compromiso/Compromiso";
import Oferta from "@/components/oferta/Oferta";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Beneficios from "@/components/beneficios/Beneficios";
import CardCarousel from "@/components/CarouselCards/Carousel";
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
      <div className="container mt-8 h-full">
        <h2 className="mb-6 text-center">
          Adquiere éstas ofertas a menos de $1000
        </h2>
        <CardCarousel />
      </div>
      <Footer />
    </div>
  );
}
