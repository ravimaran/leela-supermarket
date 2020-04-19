import React from 'react';
import {connect} from 'react-redux';

import Badge from '@material-ui/core/Badge';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popover from '@material-ui/core/Popover';

import CustomButton from '../custom-button/custom-button.component';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Grid, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeItem } from '../../redux/cart/cart.actions';
import {selectCartItemsCount, selectCartItems} from '../../redux/cart/cart.selectors';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  }
}))(Badge);

const useStyles = makeStyles((theme) => ({
    cartitem:{
        padding:20,
        width:300
    }
}))

const CustomizedBadges = ({cartItems, removeItem, itemsCount}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <React.Fragment>
            <IconButton color='secondary' aria-label="cart" onClick={handleClick}>
            <StyledBadge badgeContent={itemsCount} color="primary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}            
        >
            
            <div className={classes.cartitem}>
                {
                    cartItems ? 
                    <div>
                        <Typography color='secondary' gutterBottom variant="h5" component="h4">Cart Summary ({itemsCount} items)</Typography>
                        <List>
                        {
                            cartItems.map(item => (     
                                <React.Fragment  key={item.id}>
                                <Divider />                  
                                <ListItem disableGutters>
                                    <ListItemAvatar>
                                        <Avatar src={item.imageUrl} />
                                    </ListItemAvatar>
                                    <Grid orientation='column'>                                    
                                        <ListItemText primary={item.name} />
                                        <ListItemText secondary={`QTY:${item.quantity}`} />
                                        <ListItemText primary={`$${item.price * item.quantity}.00`} />
                                    </Grid>
                                    <ListItemSecondaryAction>
                                        <IconButton edge='end' onClick={() => removeItem(item)} title='Remove this item from cart'>
                                            <DeleteIcon color='primary'></DeleteIcon>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                </React.Fragment>
                            ))
                        }
                        </List>     
                    </div>              
                    :
                    <p>No Items Found!</p>
                }
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </Popover>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    cartItems:selectCartItems(state),
    itemsCount:selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedBadges);