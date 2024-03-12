import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Boton from "../button/Button";

const Compromiso = () => {
  const infoValores = [
    {
      valores: `Pasión por los videojuegos: Creemos en el poder del entretenimiento que ofrecen los videojuegos y estamos comprometidos a brindar a los jugadores la mejor experiencia posible.`,
    },
    {
      valores: `Confianza: Somos una empresa transparente y responsable que se preocupa por la seguridad y privacidad de nuestros clientes.`,
    },
    {
      valores: `Innovación: Buscamos constantemente nuevas formas de mejorar la experiencia de compra y ofrecer a los jugadores los mejores productos y servicios.`,
    },
    {
      valores: `Excelencia: Nos esforzamos por ofrecer un servicio al cliente de alta calidad y superar las expectativas de nuestros clientes.`,
    },
    {
      valores: `Comunidad: Creemos en la importancia de crear una comunidad de jugadores donde todos se sientan bienvenidos e incluidos.`,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row pt-5 mx-6 lg:ml-6">
      <div className="flex flex-col lg:w-1/2">
        <h2 className="mb-8 text-center mt-2">Tu pasión, nuestro compromiso</h2>
        <p>
          Ofrecemos una experiencia de compra cómoda, segura y personalizada a los jugadores de todo el mundo, brindándoles acceso a una amplia selección de videojuegos digitales, DLCs, accesorios y contenido gaming a precios competitivos.
          <br />
          Nuestros valores:
        </p>
        <ul>
          {infoValores.map((valor) => (
            <li key={valor.valores} className="flex items-center p-3">
              <div className="text-2xl">
                <FaRegCircleCheck color="red" />
              </div>
              <p className="ml-3">
                <strong>{valor.valores.split(":")[0]}:</strong>{" "}
                {valor.valores.split(":")[1]}
              </p>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-4 pb-2">
          <Boton texto="Conoce nuestra historia" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 m-6 lg:ml-0">
        <img src="\imgs\imgValores.png" alt="Imagen de valores" className="w-full" />
      </div>
    </section>
  );
};

export default Compromiso;
