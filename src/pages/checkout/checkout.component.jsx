import React from 'react';
import CheckOut from '../../components/checkout-item/checkout-item.component';
import { Typography } from '@material-ui/core';

import './checkout.style.scss';

class CheckoutPage extends React.Component{

    render(){
        return(
            <div className='checkout'>
                <Typography gutterBottom variant="h5" component="h3">Shopping Cart</Typography>
                <Typography gutterBottom variant="h6" component="h4" color='primary'>
                    Price reminder: Prices shown are an estimate only. Final prices will be calculated at pickup.
                </Typography>
                <CheckOut />
            </div>
        )
    }
}

export default CheckoutPage;