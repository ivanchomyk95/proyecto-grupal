import { useReducer } from "react";
import { TYPES } from "../../app/Acciones/Acciones";
import { shoppingInitialState } from "../../app/Reducer/shoppingInitialState";
import shoppingReducer from "../../app/Reducer/shoppingReducer";
import Product from "./product";
import Cartitem from "./Cartitem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const updateState = async () => {
    const ENDPOINTS = {
      productos: "http://localhost:5000/productos",
      cart: "http://localhost:5000/cart",
    };

    const responses = {
      productos: await axios.get(ENDPOINTS.productos),
      cart: await axios.get(ENDPOINTS.cart),
    };
    const data = {
      productos: await responses.productos.data,
      cart: await responses.cart.data,
    };
    dispatch({ type: TYPES.READ_STATE, payload: data });
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item) => (
          <Cartitem key={index} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;
