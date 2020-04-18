import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popover from '@material-ui/core/Popover';

import CustomButton from '../custom-button/custom-button.component';

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
        padding:20
    }
}))

export default function CustomizedBadges() {

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
            <StyledBadge badgeContent={0} color="primary">
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
                <p>No item found!</p>
                <CustomButton> {' '} Complete My Order{' '}</CustomButton>
            </div>
        </Popover>
        </React.Fragment>
    );
}