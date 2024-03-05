import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const Compromiso = () => {
  const infoValores = [
    {
      valores: `Pasión por los videojuegos: Creemos en el poder del entretenimiento que ofrecen los 
      videojuegos y estamos comprometidos a brindar a los jugadores la mejor
       experiencia posible.`,
    },
    {
      valores: `Confianza: Somos una empresa transparente y responsable 
      que se preocupa por la seguridad y privacidad de nuestros clientes`,
    },
    {
      valores: `Innovación: Buscamos constantemente nuevas 
      formas de mejorar la experiencia de compra y ofrecer a los 
      jugadores los mejores productos y servicios`,
    },
    {
      valores:`Excelencia: Nos esforzamos por ofrecer un servicio al 
      cliente de alta calidad y superar las expectativas de nuestros clientes.`
    },{
      valores:`Comunidad: Creemos en la importancia de crear una comunidad de jugadores donde 
      todos se sientan bienvenidos e incluidos.`
    }
  ];

  return (
    <section className="flex flex-row pt-5 ml-6">
      <section className="flex flex-col">
        <h2 className=" mb-8 text-center mt-2">Tu pasión, nuestro compromiso</h2>
        <h4>
          Ofrecemos una experiencia de compra cómoda, segura y personalizada a
          los jugadores de todo el mundo, brindándoles acceso a una amplia
          selección de videojuegos digitales, DLCs, accesorios y contenido
          gaming a precios competitivos. <br />
          Nuestros valores:
        </h4>
        <ul>
          {infoValores.map((valor, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center" }}>
              <div className="text-2xl">
                <FaRegCircleCheck color="red" />
              </div>
              <p style={{ marginLeft: "20px", marginTop: "20px" }}>
                <strong>{valor.valores.split(":")[0]}:</strong>{" "}
                {valor.valores.split(":")[1]}
              </p>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-4 pb-2">
        <button className="bg-red-700 hover:bg-blue-900 text-white font-bold mt-6 py-2 px-4 rounded">
          Conoce nuestra historia!
        </button>
      </div>
      </section>

      <section className="w-full m-6">
        <img src="\imgs\imgValores.png"></img>
      </section>
    </section>
  );
};

export default Compromiso;
