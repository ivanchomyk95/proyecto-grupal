import { carritoinicial } from "./carritoinicial";
import { TYPES } from "@/actions/actions";

export function carritoreductor (state, action) {
    switch (action.type) {
        case TYPES.AGREGAR_AL_CARRITO: {}
        case TYPES.ELIMINAR_UN_PRODUCTO: {}
        case TYPES.ELIMINAR_TODOS_LOS_PRODUCTOS: {}
        case TYPES.LIMPIAR_CARRITO: {}
        default:
            return state;
    }
}