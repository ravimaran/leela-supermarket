import { CartActionTypes } from './cart.types';
import { addItemToCart, removeCartItem } from './cart.utils';

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_ITEMS:
            return {
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEMS:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_CART_ITEMS:
            return {
                ...state,
                cartItems:removeCartItem(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;