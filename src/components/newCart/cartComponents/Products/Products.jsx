import React from "react";
import Product from "./product";

export default function Products({ state }) {
  return (
    <div>
      <h3 className="font-semibold">Añade otros juegos</h3>
      <div>
        {state.products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
