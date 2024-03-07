"use client"

import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";

import Beneficios from "@/components/beneficios/Beneficios";
import Compromiso from "@/components/compromiso/Compromiso";
import StyledButton from "@/components/button/Button";
import Oferta from "@/components/oferta/Oferta";
import ComicCon from "@/components/ComicCon/ComicCon";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#c5cacd57] mb-8 flex items-center">
        <div className="flex flex-col justify-center flex-grow">
          <h1 style={{
      fontFamily: 'var(--font-family-title)',
      fontSize: 'var(--font-size-title)',
      fontWeight: 'var(--font-weight-title)',
    }} className="text-center text-3xl font-semibold mb-4">
            ¡Oferta Especial!
          </h1>
          <p className="text-sm text-center mb-4">
            Aprovecha nuestras promociones exclusivas esta semana.
          </p>
          <div className="flex flex-col align-middle items-center pt-7">

          <StyledButton texto="Promociones" />
          </div>
          
        </div>
        <div className="ml-auto">
          <img src="/imgs/controladores.png" alt="Banner" />
        </div>
      </div>

      <h2 style={{
      fontFamily: 'var(--font-family-subtitle)',
      fontSize: 'var(--font-size-subtitle)',
      fontWeight: 'var(--font-weight-subtitle)',
    }}className="text-center">Game Zone</h2>

      <div className="flex justify-center my-16 mx-12 gap-35 mt-5 ">
        <div className="flex justify-center space-x-14">
          <Card
            image="imgs/the-witcher.jpg"
            title="The Witcher 3"
            price="19.99"
          />
          <Card image="imgs/r-evil.jpg" title="R.E Village" price="24.99" />
          <Card
            image="imgs/serious-sam.jpg"
            title="Serious Sam 4"
            price="29.99"
          />
          <Card
            image="imgs/batman-arkham.jpg"
            title="Batman Arkham Knight"
            price="14.99"
          />
        </div>
      </div>

      <div className="p-8">
        <Compromiso />
      </div>

      <Beneficios />

      <Oferta/>

      <ComicCon/>
    
    </>

  );
}
