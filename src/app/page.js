import Footer from "@/components/footer/footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <meta name="description" content="e-commerce  de juegos" />
        <meta
          name="keywords"
          content="juegos video-juegos tienda juegos online"
        />
        <meta name="author" content=" ProyectoNumenDevs." />
        <title>GameZone</title>
      </Head>
      <header></header>
      <main>
        <Footer />
      </main>
    </div>
  );
}
