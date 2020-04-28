import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { Grid, Typography, IconButton, Button, Divider, Box, Avatar } from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import CustomButton from '../custom-button/custom-button.component';

import { createStructuredSelector} from 'reselect';
import {selectCartItemsCount, selectCartItemsTotal, selectHst} from '../../redux/cart/cart.selectors';
import {addItem, removeQuantity, removeItem, setGotoPage, clearCart} from '../../redux/cart/cart.actions';
import { selectCart } from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { currencyFormatter } from '../../utils/numberFormater';
import { submitOnlineOrder } from '../../utils/cartutils';

import './checkout-item.style.scss';

const handleCheckout = (cartItems, itemsCount, cartTotal, currentUser, cart,  history, dispatch) => {
    if(currentUser){
        if(!currentUser.phoneNumber){
            history.push('/phonenumber');
        }else{
            cart.gotoPage = null;
            submitOnlineOrder(cartItems, itemsCount, cartTotal, currentUser, dispatch, history);       
        }        
    }else{
        cart.gotoPage = '/checkout-complete';
        history.push('/auth');
    }
}


const CheckOut = ({cartItems, itemsCount, cartTotal, currentUser, cart, hst, history, dispatch}) => {
    return (
        <React.Fragment>
            <Grid container>
                <Grid container xs={12} md={10} item>
                    {
                        cartItems.map((item) => (
                            <Grid container key={item.productId} className='checkout-item' alignItems='center'>
                                <Grid xs={4} md={2} item>
                                    <Avatar className='avatar' src={`http://ecommerce.inkav.ca/resources/${item.category}/${item.imageUrl}`} />
                                </Grid>
                                <Grid xs={8} md={10} item>
                                    <Grid container>
                                        <Grid xs={12} md={8} item>
                                            <Grid>
                                                <Typography gutterBottom variant="h5" component="h4">{item.name}</Typography>
                                                <Typography 
                                                    gutterBottom 
                                                    variant="h6" 
                                                    component="h6">
                                                        Price: {currencyFormatter.format(item.price)} {item.unit === 'lb' ? '/lb' : ''}
                                                    </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={12} md={2} item>
                                            <Grid container alignItems='center'>
                                                <IconButton color='secondary' onClick={() => dispatch(addItem(item))}>
                                                    <AddCircle />
                                                </IconButton>
                                                <Typography gutterBottom variant="h6" component="h6">{item.quantity}</Typography>
                                                <IconButton color='primary' onClick={() => dispatch(removeQuantity(item))}>
                                                    <RemoveCircle />
                                                </IconButton>
                                            </Grid>
                                            <Grid>
                                                <Typography gutterBottom variant="h6" component="h6">Total: {currencyFormatter.format(item.quantity * item.price)}</Typography>
                                            </Grid>                                            
                                        </Grid>
                                        <Grid xs={12} md={2} item>
                                            <Grid>
                                                <Button color='primary' onClick={() => dispatch(removeItem(item))}>Remove</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                    <Grid className='cart-total'>
                        <h3>Cart Total: {currencyFormatter.format(cartTotal)}</h3>
                    </Grid>
                </Grid>
                <Grid xs={12} md={2} item>
                    <Grid className='checkout-summary'>
                        <div><h3>Order Summary</h3></div>
                        <Grid container justify='space-between'>
                            <div>Product Total ({itemsCount})</div>
                            <div>{currencyFormatter.format(cartTotal)}</div>
                        </Grid>
                        <Box mt={2} />
                        <Grid container justify='space-between'>
                            <div>Estimated Tax:</div>
                            <div>{currencyFormatter.format(hst)}</div>
                        </Grid>
                        <Box mt={2} />
                        <Divider />
                        <Box mt={2} />
                        <Grid container justify='space-between'>
                            <div><h4>Total</h4></div>
                            <div><h4>{currencyFormatter.format(cartTotal + hst)}</h4></div>
                        </Grid>
                        <Box mt={2} />
                        <Grid>
                            <CustomButton 
                                disabled={cartItems.length === 0} 
                                onClick={() => handleCheckout(cartItems, itemsCount, cartTotal, currentUser, cart, history, dispatch)}
                                >
                                Submit Order
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>        
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    itemsCount:selectCartItemsCount,
    cartTotal:selectCartItemsTotal,
    currentUser:selectCurrentUser,
    cart:selectCart,
    hst:selectHst
})

export default withRouter(connect(mapStateToProps)(CheckOut));