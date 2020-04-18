import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

//Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';
import { makeStyles, Typography } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

//Custom Components
import ListMenu from './list-menu.component';
import CategoriesAsSelect from './category-menu.coponent';
import CustomButton from '../custom-button/custom-button.component';
import CustomizedBadges from '../../components/cartIcon/cartIcon.component';

import './header.style.scss';

const useStyles = makeStyles(theme =>(
    {
        tab:{
            minWidth:10,
            marginLeft:'25px',
            fontWeight:100,
            fontFamily:"Open Sans Condensed"
        },
        appbar:{
            backgroundColor: '#050706',
            borderBottomLeftRadius:4,
            borderBottomRightRadius:4,
            color:'white',
            paddingLeft:10,
            "& p":{
                color:'white',
                opacity:0.7
            },
            [theme.breakpoints.down('md')]:{
                padding:0
            },
            height:50
        },
        logobar:{
            paddingTop:20,
            "& .logo":{
                width:'126px',
                height:'60px'
            }
        },
        categorybar:{
            backgroundColor: '#84c341',
            borderRadius:4,
            color:'white',
            padding:10,
            height:50,
            [theme.breakpoints.down('md')]:{
                height:40,
            }
        },
        iconwhite:{
            color:'white',
            opacity:0.7
        },
        linkcontainer:{
            width:'30%',
            '& a':{
                opacity:0.7,
                padding:'0 20px',
                ['font-size']:'0.9rem',
            }
        },
        headerTitle:{
            fontWeight:300,
            paddingRight:10,
            fontSize:20
        },
        titleDivider:{
            paddingRight:10
        }
    }
));


const Header = ({currentUser}) => {
    console.log(currentUser);
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);

    const tabs = (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify='space-between'
                alignItems="center"
                className={classes.appbar}
                >
                <Grid>
                    <Typography display='inline'><span className={classes.headerTitle}>Welecome to Leela Supermarket</span></Typography>        
                    {
                    currentUser ? 
                    <Typography display='inline'><span className={classes.titleDivider}>|</span><span>{currentUser.displayName}</span></Typography>
                    : ''
                }            
                </Grid>                
                <Grid container className={classes.linkcontainer} orientation='row' justify='space-between'>
                    <Link className='option'  to='/'>HOME</Link>
                    <Link className='option'  to='/about'>ABOUT US</Link>
                    <Link className='option' to='/contact'>CONTACT US</Link>
                    {
                        currentUser ? 
                        <Link className='option' onClick={() => auth.signOut()} to='/'>
                            SIGN OUT
                        </Link> 
                        : <Link className='option' to='/auth'>SIGN IN</Link>
                    }
                </Grid>               
            </Grid>          
        </React.Fragment>
    )

    const categories = (
        <React.Fragment>
            <Link to='/'>VEGETABLES</Link>
            <Divider orientation="vertical" flexItem />
            <Link to='/'>FRUITS</Link>
            <Divider orientation="vertical" flexItem />
            <Link to='/'>MEAT</Link>
            <Divider orientation="vertical" flexItem />
            <Link to='/'>SPICES</Link>
            <Divider orientation="vertical" flexItem />
            <Link to='/'>SEAFOOD</Link>
            <Divider orientation="vertical" flexItem />
            <Link to='/'>FROZEN</Link>
            <Divider orientation="vertical" flexItem />
            <Link to='/'>GRAINS</Link>
            <Divider orientation="vertical" flexItem />
            <Link to='/'>SNACKS</Link>
            <Divider orientation="vertical" flexItem />
            <Link to='/'>DRINKS</Link>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <Grid
                container
                className={classes.appbar}
                >
                <SwipeableDrawer 
                    disableBackdropTransition={!iOS} 
                    disableDiscovery={iOS} 
                    open={openDrawer} 
                    onClose={ () => setOpenDrawer(false)}
                    onOpen={() => setOpenDrawer(true)}>
                      <ListMenu handleClose={() => setOpenDrawer(false)} currentUser={currentUser} />
                </SwipeableDrawer>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                    <Icon className={classes.iconwhite}>menu</Icon>
                </IconButton>
                <div>
                    <span className={classes.headerTitle}>Welecome to Leela Supermarket </span>
                    {currentUser ? currentUser.displayName : ''}
                </div>
            </Grid>   
        </React.Fragment>
    )

    return(
        <React.Fragment>
            <div className='container-appbar'>
                {
                    matches ? drawer : tabs
                }
            </div>
            <div className='container-logo'>
                <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.logobar}>
                    <Link to='/'><Logo className='logo' /></Link>
                    <CustomizedBadges />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.categorybar}
                    >
                        {
                            matches ? <CategoriesAsSelect /> : categories
                        }
                </Grid>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
