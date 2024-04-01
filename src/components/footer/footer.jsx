import React from "react";
import Providers from "./footerComponents/provider/providers";
import Contact from "./footerComponents/contact/contact";
import Form from "./footerComponents/form/form";
import MediosDePago from "./footerComponents/mediosDePago/mediosDePago";
import WhatsApp from "./footerComponents/whatsApp/whatsApp";

export default function Footer() {
  return (
    <footer className=" min-w-full bg-slate-100">
      <Providers />
      <div id="formAndAside" className="xl:flex  xl:justify-around">
        <Form />
        <div id="aside" className="flex flex-col items-center justify-center">
          <Contact />
          <MediosDePago />
        </div>
      </div>
      <div className="text-right text-sm">
        <img
          src="logo-1.svg"
          alt="Logo"
          className="-my-3  mx-auto mt-3  w-28 rounded-md  "
        />
        <small className="bottom-0 pr-4">
          Copyright © 2023 ProyectoNumenDevs. All Rights Reserved.
        </small>
      </div>
      <WhatsApp />
    </footer>
  );
}
