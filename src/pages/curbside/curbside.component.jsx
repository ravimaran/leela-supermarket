import React from 'react';
import {Typography, Grid} from '@material-ui/core';

import './curbside.style.scss';

class CurbsidePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
       return(
        <React.Fragment>
            <div className='contact'>
                <Grid>
                    <Typography component="h6" variant="h6" gutterBottom color='primary'>
                        Please note the prices of any products that are sold in pounds(lb) will change due to the weiging 
                        when preparing the order.
                    </Typography>
                    <Typography component='h4' variant='h4' gutterBottom>
                        1. Add items to your cart.
                    </Typography> 
                    <p>
                        Browse through the site and add all your items to the cart.
                    </p>
                    <Typography component='h4' variant='h4' gutterBottom>
                        2. Submit your Order.
                    </Typography> 
                    <p>
                        You are required to create an account if not already created.  Your phone number is required to confirm 
                        the order.  If you have used your google account and signed in, you will be asked to enter your phone number before submission.
                        We require your phone number to confirm your order.
                    </p>
                    <Typography component='h4' variant='h4' gutterBottom>
                        3. Your order will be confirmed.
                    </Typography> 
                    <p>
                        We'll contact you shortly after we received your order for confirmation.  You will also get email confirmation once you submitted your order.
                    </p>
                    <Typography component='h4' variant='h4' gutterBottom>
                        4. Pick up your order.
                    </Typography> 
                    <p>
                        Once the order is ready, you will be confirmed again with the final total of your order.  You may drive
                        to the store parking lot and call us.
                    </p>
                    <p>When you arrive, please give us a call and the order number.  You can pay for all your items right from your vehicle.</p>
                    <p>Once payment made, we'll bring out your order.</p>
                </Grid>
            </div>
        </React.Fragment>
       )
    }
}

export default CurbsidePage;