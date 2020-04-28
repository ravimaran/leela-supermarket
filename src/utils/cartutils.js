import { clearCart } from '../redux/cart/cart.actions';


export const submitOnlineOrder = (cartItems, itemsCount, cartTotal, currentUser,  dispatch, history) => {
    if(cartItems.length > 0){
        const min = 1000;
        const max = 9999;
        const rand = Math.ceil(min + Math.random() * (max - min));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                OrderId: rand, 
                CartItems:cartItems, 
                ItemsCount:itemsCount, 
                CartTotal:cartTotal, 
                ContactNo:currentUser.phoneNumber, 
                ContactEmail:currentUser.email 
            })
        };

        //https://localhost:44322/
        //http://api.inkav.ca/api/order/process
        fetch('http://api.inkav.ca/api/order/process', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error respons
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            dispatch(clearCart());
            history.push('/checkout-complete');

        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
}
