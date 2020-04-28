 import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { selectCurrentUser } from '../../redux/user/user.selectors';
// import { selectCartItems, selectCartItemsCount, selectCartItemsTotal} from '../../redux/cart/cart.selectors';
// import { clearCart } from '../../redux/cart/cart.actions';
// import { createStructuredSelector } from 'reselect';

import './checkout-complete.style.scss';

const CheckoutComplete = () => {

    return(
        <div className='checkout-complete'>
            <h3>Thank you!</h3>
            <p>Your order has been submitted successfully.  You will get an email confirmation shortly.</p>
            <p>We will call you and confirm your order before preparing your order for pick up.</p>
            <p>Once order is ready, you will get call with the total of your order.</p>
            <h4>Please allow 3 to 4 hours time to get your order ready.</h4>
        </div>
    )
}

// const mapStateToPros = createStructuredSelector({
//     cartItems:selectCartItems, 
//     itemsCount:selectCartItemsCount, 
//     cartTotal:selectCartItemsTotal, 
//     currentUser:selectCurrentUser
// })

//export default withRouter(connect(mapStateToPros)(CheckoutComplete));
export default CheckoutComplete;