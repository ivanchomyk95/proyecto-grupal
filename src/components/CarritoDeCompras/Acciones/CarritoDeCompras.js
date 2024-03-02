import { useReducer } from "react";
import { TYPES } from "./Acciones/Acciones";
import { carritoinicial } from "../Reductor/carritoinicial";
import { carritoreductor } from "../Reductor/carritoreductor";

const CarritoDeCompras = () => {
    const [state, dispatch] = useReducer (carritoreductor, carritoinicial)

    const agregarAlCarrito = () => {}

    const borrarDelCarrito = () => {}

    const limpiarCarrito = () => {}

    return (
        <>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <div className="box grid-responsive"></div>
        <h3>Carrito</h3>
        <div className="box"></div>
        <button>Limpiar Carrito</button>
        </>
    );
};

export default CarritoDeCompras;