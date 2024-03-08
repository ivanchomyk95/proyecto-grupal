"use client"

import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Beneficios from "@/components/beneficios/Beneficios";
import Compromiso from "@/components/compromiso/Compromiso";
import StyledButton from "@/components/button/Button";
import Footer from "@/components/footer/footer";

//probando github

export default function Home() {
  return (
    <>
      <Navbar />
    
      <div className="bg-[#c5cacd57] mb-8 flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center flex-grow md:w-1/2">
          <h1
            style={{
              fontFamily: 'var(--font-family-title)',
              fontSize: 'var(--font-size-title)',
              fontWeight: 'var(--font-weight-title)',
            }}
            className="text-center text-3xl font-semibold mb-4"
          >
            ¡Oferta Especial!
          </h1>
          <p className="text-sm text-center mb-4">
            Aprovecha nuestras promociones exclusivas esta semana.
          </p>
          <StyledButton text="Promociones" />
        </div>
        <div className="ml-auto md:w-1/2">
          <img src="/imgs/controladores.png" alt="Banner" className="w-full md:h-auto" />
        </div>
      </div>


      <h2
        style={{
          fontFamily: 'var(--font-family-subtitle)',
          fontSize: 'var(--font-size-subtitle)',
          fontWeight: 'var(--font-weight-subtitle)',
        }}
        className="text-center"
      >
        Game Zone
      </h2>

      <div className="flex justify-center gap-52 mt-5">
        <div className="flex justify-center space-x-14">
          <Card />
        </div>
      </div>

      <div>
        <Beneficios />
      </div>

      <div>
        <Compromiso />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}