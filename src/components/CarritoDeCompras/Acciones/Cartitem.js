const { Button } = require("bootstrap")


const Cartitem = ({item, deleteFromCart}) => {

    const {name, price, id, quantity} = item;

    return (
        <div className="cart-item">
            <h4>{name} </h4>
            <h5>$ {price} x {quantity} = {price * quantity}</h5>
            <Button onClick={() => deleteFromCart (id)}>Eliminar uno</Button>
            <Button onClick={() => deleteFromCart (id, true)}>Eliminar todos</Button>
        </div>
    );
};

export default Cartitem;