export const addItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if(existingItem){
        return cartItems.map( cartItem => cartItem.id === item.id ? 
                                        {...cartItem, quantity:cartItem.quantity + 1} : 
                                        cartItem);
    }

    return [...cartItems, {...item, quantity:1}];
}

export const removeCartItem = (cartItems, cartItem) => {
    const index = cartItems.indexOf(cartItem);
    cartItems.splice(index, 1);
    return [...cartItems];
}