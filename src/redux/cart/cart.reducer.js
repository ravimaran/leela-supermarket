import { CartActionTypes } from './cart.types';
import { addItemToCart, removeCartItem, removeItemQuantity } from './cart.utils';

const INITIAL_STATE = {
    hidden:true,
    gotoPage:'/',
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
        case CartActionTypes.REMOVE_QUANTITY:
            return{
                ...state,
                cartItems:removeItemQuantity(state.cartItems, action.payload)
            }
        case CartActionTypes.SET_GOTO_PAGE:
            return{
                ...state,
                gotoPage:action.payload
            }
        case CartActionTypes.CLEAR_CART:
            return{
                cartItems:[]
            }
        default:
            return state
    }
}

export default cartReducer;