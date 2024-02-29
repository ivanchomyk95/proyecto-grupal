import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Tarjeta from "@/components/empresas/Descripcion";
import Beneficios from "@/components/beneficios/Beneficios";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="bg-[#c5cacd57] mb-8 flex items-center">
        <div className="flex flex-col justify-center flex-grow">
          <h2 className="text-center text-3xl font-semibold mb-4">¡Oferta Especial!</h2>
          <p className="text-sm text-center mb-4">Aprovecha nuestras promociones exclusivas esta semana.</p>
          <button className="bg-red-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded self-center">
            Ver promociones
          </button>
        </div>
        <div className="ml-auto">
          <img src="/imgs/controladores.png" alt="Banner" />
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold">Game Zone</h2>

      <div className="flex justify-center gap-52 mt-5">
        <div className="flex justify-center space-x-14">
          <Card
            image="imgs/the-witcher.jpg"
            title="The Witcher 3"
            price="19.99"
          />
          <Card
            image="imgs/r-evil.jpg"
            title="R.E Village"
            price="24.99"
          />
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
      
      <h2 className=" m-14 text-center text-2xl font-bold">A continuacion, un poco de nuestros proveedores:</h2>
      
      <div className=" m-10">
      <Tarjeta />
      </div>
      <div> 
        {
             <Beneficios/>
        }
     
      </div>
    </>
  );
}



