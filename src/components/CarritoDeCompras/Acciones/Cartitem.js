const { Button } = require("bootstrap")


const Cartitem = () => {
    return (
        <div className="cart-item">
            <h4>Nombre</h4>
            <h5>Precio</h5>
            <Button>Eliminar uno</Button>
            <Button>Eliminar todos</Button>
        </div>
    );
}

export default Cartitem;