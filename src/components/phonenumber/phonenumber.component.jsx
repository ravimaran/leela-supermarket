import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItems, selectCartItemsCount, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import { setCurrentUser } from '../../redux/user/user.actions';
import { updateUserProfileDocument } from '../../firebase/firebase.utils';
import { submitOnlineOrder } from '../../utils/cartutils';
import { createStructuredSelector } from 'reselect';

import './phonenumber.style.scss';

const PhoneNumber = ({cartItems, itemsCount, cartTotal, currentUser, history, dispatch}) => {

    const state = {
        phone:''
    }

    const handleChange = event => {
        state.phone = event.target.value;
    }

    const handleClick = async () => {
        const userRef = await updateUserProfileDocument(currentUser, {phoneNumber:state.phone});
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              ...snapshot.data()
          });

          currentUser.phoneNumber = snapshot.data().phoneNumber;
          submitOnlineOrder(cartItems, itemsCount, cartTotal, currentUser, dispatch, history);
        });
    }

    return(
        <div className='phonenumber'>
            <h4>Please provide your phone for faster confirmation to add to the order queue.</h4>
            <FormInput required label='Phone Number' handleChange={handleChange} />
            <CustomButton onClick={handleClick}>Continue to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartItems:selectCartItems,
    itemsCount:selectCartItemsCount,
    cartTotal:selectCartItemsTotal
})

export default withRouter(connect(mapStateToProps)(PhoneNumber));