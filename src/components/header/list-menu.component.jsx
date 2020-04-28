import React from 'react';
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import {makeStyles} from '@material-ui/core/styles';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';

const useStyles = makeStyles(theme => ({
    box:{
        height:100,
    },
    logocontainer:{
        textAlign:'center',
        padding:10,
        backgroundColor:'#f1f1f1'
    }    
}))

const ListMenu = ({handleClose, currentUser}) => (
    <React.Fragment>
        <div className={useStyles().logocontainer}>
            <Logo className='m-logo' />
        </div>
        <List component='nav' onClick={handleClose}>
            <ListItem button component={Link} to='/'>
                <ListItemIcon>
                    <Home color='secondary' />
                </ListItemIcon>
                <ListItemText primary='Home' />
            </ListItem>
            <ListItem button component={Link} to='/curbside'>
                <ListItemIcon>
                    <ShoppingCart color='secondary' />
                </ListItemIcon>
                <ListItemText primary='Curbside Pick-Up' />
            </ListItem>
            <Divider />
            {                
                currentUser ? 
                <ListItem button onClick={() => auth.signOut()}>
                    <ListItemIcon>
                        <Lock color='primary' />
                    </ListItemIcon>
                    <ListItemText primary='Sign Out' />
                </ListItem>               
                :
                <ListItem button component={Link} to='/auth'>
                    <ListItemIcon>
                        <Lock color='primary' />
                    </ListItemIcon>
                    <ListItemText primary='Sign In' />
                </ListItem>               
            }
           
        </List>
    </React.Fragment>
)

export default ListMenu;