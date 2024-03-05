import { useReducer } from "react";
import { TYPES } from "../Acciones/Acciones";
import { carritoinicial } from "../Reductor/carritoinicial";
import { carritoreductor } from "../Reductor/carritoreductor";
import Productos from "./productos";
import Cartitem from "./Cartitem";

const CarritoDeCompras = () => {
    const [state, dispatch] = useReducer (carritoreductor, carritoinicial)

    const { productos, cart} = state;

    const agregarAlCarrito = () => {}

    const borrarDelCarrito = () => {}

    const limpiarCarrito = () => {}

    return (
        <>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <div className="box grid-responsive">
            {
                productos.map(productos => <Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />)
            }
        </div>
        <h3>Carrito</h3>
        <div className="box">
            {
                cart.map (item => <Cartitem item={item} />)
            }
        </div>
        <button onClick={limpiarCarrito}>Limpiar Carrito</button>
        </>
    );
};

export default CarritoDeCompras;