import React from 'react';
import { Grid, List, ListItem, ListItemText, Container, Link } from '@material-ui/core';
import { useMediaQuery, useTheme, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(theme => ({
    background:{
        backgroundColor:'#e0e0e0',
        '& a':{
            color:'black'
        },
        padding:'10px 60px',
        [theme.breakpoints.down('md')]:{
            padding:'10px'
        }
    },
    textblock:{
        paddingRight:20
    },
    facebook:{
        color:'#3b5998'
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container className={classes.background}>
                <Grid md={4} xs={12} item={true}>
                    <h4>Our Mission</h4>
                    <div className={classes.textblock}>
                        <p>To deliver our customers the best of all south asian and other tropical food as fresh as we can.</p>
                    </div>
                </Grid>
                <Grid md={4} xs={12} item={true}>
                    <h4>Contact Us</h4>
                    <div>
                        <p>263 Queen St E, Brampton, ON L6W 2B8</p>
                        <p>(905) 453-3522</p>
                        <p>Mon-Sun: 9:00 AM - 9:30 PM</p>
                        <p>info@leelasupermarket.ca</p>
                    </div>
                </Grid>
                <Grid md={4} xs={12} item={true}>
                    <h4>Social Media</h4>
                    <div>
                        <Link href='https://www.facebook.com/pages/category/Grocery-Store/Leela-Super-Market-Brampton-265688510780266/'>
                        <FacebookIcon className={classes.facebook}/>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Footer;