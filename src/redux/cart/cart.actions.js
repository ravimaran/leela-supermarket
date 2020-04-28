import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_ITEMS
})

export const addItem = (item) => ({
    type:CartActionTypes.ADD_ITEMS,
    payload:item
})

export const removeItem = (item) => ({
    type:CartActionTypes.REMOVE_CART_ITEMS,
    payload:item
})

export const removeQuantity = (item) => ({
    type:CartActionTypes.REMOVE_QUANTITY,
    payload:item
})

export const setGotoPage = (item) => ({
    type:CartActionTypes.SET_GOTO_PAGE,
    paylaod:item
})

export const clearCart = () => ({
    type:CartActionTypes.CLEAR_CART
})

