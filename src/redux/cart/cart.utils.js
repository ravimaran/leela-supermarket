export const addItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => cartItem.productId === item.productId);
    if(existingItem){
        return cartItems.map( cartItem => cartItem.productId === item.productId ? 
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

export const removeItemQuantity = (cartItems, cartItem) => {
    const index = cartItems.indexOf(cartItem);
    const item = cartItems[index];
    if(item.quantity === 1){
        return removeCartItem(cartItems, cartItem);
    }
    
    item.quantity = item.quantity - 1;
    cartItems[index] = item;
    return [...cartItems];
}

export const getHstTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
        if(item.hstApplied){
            total = total + item.price * 0.13;
        }
    });

    return total;
}