import React from "react";
import { providers } from "../../../../../public/dataSet/providers";

export default function Providers() {
  const providersCards = providers.map(
    ({ href, img, name, detail }, indice) => {
      return (
        <figure className="mx-12 flex w-28 flex-col items-center " key={indice}>
          <a
            target="_blank"
            href={href}
            className="mb-2  flex flex-col items-center rounded-sm p-1 shadow-sm shadow-slate-400  duration-200 hover:scale-110 hover:shadow-md hover:shadow-slate-950"
          >
            <img src={img} alt={name} className="h-12 w-12  sm:h-20 sm:w-20 " />
          </a>
          <figcaption className="text-center">
            <details className="mb-5 rounded-md p-1 ring-inherit open:w-64 open:bg-slate-100 open:ring-2">
              <summary className=" duration-100 [appearance:textfield] hover:scale-110 hover:drop-shadow-[0_5px_01px_rgba(0,0,0,0.25)] ">
                <h3 className="cursor-pointer   ">
                  <b>{name}</b>
                </h3>
              </summary>
              <p>{detail}</p>
            </details>
          </figcaption>
        </figure>
      );
    },
  );
  return (
    <div>
      <h2 className="m-4 text-center">
        <b>PROVEEDORES</b>
      </h2>
      <div
        id="providers"
        className="flex flex-wrap justify-around sm:mb-20 sm:h-56 "
      >
        {providersCards}
      </div>
    </div>
  );
}
