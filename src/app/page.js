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

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Card />
      <Beneficios />
      <div className="p-8">
        <Compromiso />
      </div>
      <Oferta />
      <ComicCon />
    </div>
  );
}
//Esto es una Prueba de A.Rivira
