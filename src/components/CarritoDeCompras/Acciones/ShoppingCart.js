import { useReducer } from "react";
import { TYPES } from "./Acciones";
import {shoppingInitialState} from "../Reducer/shoppingInitialState";
import shoppingReducer from "../Reducer/shoppingReducer"
import Product from "./product";
import Cartitem from "./Cartitem";

const ShoppingCart = () => {
    const [state, dispatch] = useReducer (shoppingReducer, shoppingInitialState)

    const { products, cart} = state;

    const addToCart = (id) => dispatch ({type: TYPES.ADD_TO_CART, payload: id})

    const deleteFromCart = (id, all =false) => {
        if (all) {
            dispatch ({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
        } else {
            dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})       
        }
    } 

    const clearCart = () => dispatch ({type: TYPES.CLEAR_CART})

    return (
        <>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <div className="box grid-responsive">
            {
                products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)
            }
        </div>
        <h3>Carrito</h3>
        <div className="box">
            {
                cart.map (item => <Cartitem key= {index} item={item} deleteFromCart={deleteFromCart} />)
            }
        </div>
        <button onClick={clearCart}>Limpiar Carrito</button>
        </>
    );
};

export default ShoppingCart;