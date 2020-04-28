import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

import './custom-button.style.scss';

const useStyles = makeStyles(theme => ({
    root:{
        background:'linear-gradient(45deg, #e71e26 20%, #84c341 60%)',
        color:'white',
        fontWeight:600,
        width:'100%',
        height:50
    }
}))

const CustomButton = ({children, ...otherProps}) => {

    const classes = useStyles();
    return (
        <Button variant='contained' classes={{root:classes.root}} {...otherProps}>
            {children}
        </Button>
    )
}

export default CustomButton;