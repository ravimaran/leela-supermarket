import React from 'react';
import { connect } from 'react-redux'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {addItem} from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import { currencyFormatter } from '../../utils/numberFormater';

import './collection-item.style.scss';

const useStyles = makeStyles((theme) => ({
    carditem:{
        margin:'10px'
    }
}))

const CollectionItem = ({item, addItem}) => {
    const{name, price, imageUrl, unit, category} = item;
    return(
        <Grid container xs={6} md={2} item={true}  justify='space-between'>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        alt={name}
                        height="150"
                        image={`http://ecommerce.inkav.ca/resources/${category}/${imageUrl}`}
                        title={category}/>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h5">
                            {name}
                        </Typography>
                        <Typography gutterBottom component="p">
                            {
                                !unit || unit === '' ? 
                                currencyFormatter.format(price) : 
                                `${currencyFormatter.format(price)} / ${unit}`
                            }
                        </Typography>
                        {
                            unit === 'lb' ? 
                                <Typography gutterBottom component='span'>
                                    The final price of this item may change once order is ready to pickup.
                                </Typography>
                                : <div className='min-height-70'>&nbsp;</div>
                        }
                    </CardContent>
                </CardActionArea>
                <CardActions className='add-cart-button'>
                    <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
                </CardActions>
            </Card>
        </Grid>  
    )      
};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);