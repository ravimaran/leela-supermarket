import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import { MenuItem, Button, Menu, Divider } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button:{
        padding:'0 8px',
        width:'100%',
        fontWeight:700
    },
    popover:{
        width:'100%',
        maxWidth:'unset'
    } 
}))

const CategoriesAsSelect = ({history}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();  

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    
    const handleClose = (path) => {        
        setAnchorEl(null);
        history.push(path);
    }

    return (
        <React.Fragment>
            <Button onClick={handleClick} className={classes.button}>Browse our categories</Button>
            <Menu PopoverClasses={{paper: classes.popover}}  anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => handleClose('/shop/vegetables')}>VEGETABLES</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/fruits')}>FRUITS</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/herbs')}>HERBS</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/meat')}>MEAT</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/spices')}>SPICES</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/seafood')}>SEAFOOD</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/frozen')}>FROZEN</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/dairy')}>DAIRY</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/grains')}>GRAINS</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/nuts')}>NUTS</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/snacks')}>SNACKS</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/drinks')}>DRINKS</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleClose('/shop/others')}>OTHERS</MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default withRouter(CategoriesAsSelect);