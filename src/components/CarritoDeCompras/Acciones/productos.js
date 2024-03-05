import React from "react";

const Productos = ({Productos}) => {

    const {nombre, precio, id} = Productos;

    return (
        <div className="producto">
            <h4>Nombre</h4>
            <h5>Precio</h5>
            <button onClick={agregarAlCarrito}>Comprar</button> 
        </div>
    );
}

export default Productos;