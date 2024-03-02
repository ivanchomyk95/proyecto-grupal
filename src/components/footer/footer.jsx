import React from "react";
import Providers from "./footerComponents/provider/providers";
import Contact from "./footerComponents/contact/contact";
import Form from "./footerComponents/form/form";
import MediosDePago from "./footerComponents/mediosDePago/mediosDePago";

export default function Footer() {
  return (
    <footer className=" relative min-w-full">
      <Providers />
      <div className="sm:flex sm:justify-around">
        <Form />
        <div className="flex flex-col items-center justify-center">
          <Contact />
          <MediosDePago />
        </div>
      </div>
      <img src="imgs/image.png" alt="Logo" className="ml-3 w-24 rounded-md" />
      <small className="absolute bottom-0 right-0">
        Copyright © 2023 ProyectoNumenDevs. All Rights Reserved.
      </small>
    </footer>
  );
}
