import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {Grid, IconButton, Typography, TextField, makeStyles} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

import {addItem, removeItem} from '../../redux/cart/cart.actions';


const useStyles = makeStyles((theme) => ({
    textField:{
        padding:5,
        width:15,
        textAlign:'center'
    }
}))

const ManageItem = ({cartItem, dispatch}) => {
    const classes = useStyles();
    return(
        <Grid container alignItems='center'>
            <IconButton color='primary' onClick={() => removeItem(cartItem)}>
                <RemoveCircle />
            </IconButton>           
            <TextField 
                variant='outlined' 
                color='secondary'
                required
                InputProps={{
                    classes:{
                        input:classes.textField
                    }
                }}>

            </TextField>
            <IconButton color='secondary' onClick={() => addItem(cartItem)}>
                <AddCircle />
            </IconButton>
        </Grid>
    );
}

export default withRouter(connect()(ManageItem));