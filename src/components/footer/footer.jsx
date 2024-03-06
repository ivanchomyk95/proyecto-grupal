import React from "react";
import Providers from "./footerComponents/provider/providers";
import Contact from "./footerComponents/contact/contact";
import Form from "./footerComponents/form/form";
import MediosDePago from "./footerComponents/mediosDePago/mediosDePago";
import WhatsApp from "./footerComponents/whatsApp/whatsApp";

export default function Footer() {
  return (
    <footer className=" min-w-full">
      <Providers />
      <div id="formAndAside" className="lg:flex  lg:justify-around">
        <Form />
        <div id="aside" className="flex flex-col items-center justify-center">
          <Contact />
          <MediosDePago />
        </div>
      </div>
      <div className="text-right text-sm">
        <img
          src="imgs/image.png"
          alt="Logo"
          className="mx-auto  my-3 w-24  rounded-md "
        />
        <small className="bottom-0 pr-4">
          Copyright © 2023 ProyectoNumenDevs. All Rights Reserved.
        </small>
      </div>
      <WhatsApp />
    </footer>
  );
}
