import React from 'react';
import { connect } from 'react-redux'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {addItem} from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.style.scss';

const useStyles = makeStyles((theme) => ({
    carditem:{
        margin:'10px'
    }
}))

const CollectionItem = ({item, addItem }) => {
    const{name, price, imageUrl} = item;
    return(
        <Grid xs={12} md={2} item={true}>
            <Card className={useStyles().carditem}>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        alt={name}
                        height="150"
                        image={imageUrl}
                        title='Vegetables' />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h5">
                            {name}
                        </Typography>
                        <Typography gutterBottom component="p">
                            ${price}.00
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
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