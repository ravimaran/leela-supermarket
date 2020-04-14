import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Button, Menu, Divider } from '@material-ui/core';
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



const CategoriesAsSelect = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();  

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <Button onClick={handleClick} className={classes.button}>Browse our categories</Button>
            <Menu PopoverClasses={{paper: classes.popover}}  anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>VEGETABLES</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>FRUITS</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>MEAT</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>SPICES</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>SEAFOOD</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>FROZEN</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>GRAINS</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>SNACKS</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>DRINKS</MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default CategoriesAsSelect;