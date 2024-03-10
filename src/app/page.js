"use client";
/*** Propuestas:
 * eliminar empresas
 *Modicar estructura de Card.De Ivan
 *Centrar tarjetas de beneficio ocultar/mostrar texto símil footer.
 *Elegir un navBar
 *Definir nombre/logo
 *Definir idioma
 */

import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Beneficios from "@/components/beneficios/Beneficios";
import Footer from "@/components/footer/footer";
import Compromiso from "@/components/compromiso/Compromiso";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Card />
      <Beneficios />
      <Compromiso />
      <Footer />
    </div>
  );
}