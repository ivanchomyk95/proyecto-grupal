import React from "react";
import { providers } from "../../../../../public/dataSet/providers";
import { anchorStyles, summaryStyles } from "./providerStyles";

export default function Providers() {
  const providersCards = providers.map(
    ({ href, img, name, detail }, indice) => {
      return (
        <figure className="mx-12 flex w-28 flex-col items-center " key={indice}>
          <a target="_blank" href={href} className={anchorStyles}>
            <img src={img} alt={name} className="h-12 w-12  sm:h-20 sm:w-20 " />
          </a>
          <figcaption className="text-center">
            <details className="mb-5 rounded-md p-1 ring-inherit open:w-64 open:bg-slate-100 open:ring-2">
              <summary className={summaryStyles}>
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
      <h2 className="mb-4 text-center">
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
