import React from 'react';
import { withRouter } from 'react-router-dom';
import { TextField, InputAdornment, IconButton, makeStyles} from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import './search.style.scss';

const useStyles = makeStyles(theme => (
    {
        textfield:{
            color:'secondary !important',
            marginTop:10,
            [theme.breakpoints.up('md')]:{
                width:'80%'
            }
        
        },
        outlinedinput:{
            width:200,
            [theme.breakpoints.up('md')]:{
                width:'80%'
            }

        },
        notchedOutline:{
            borderWidth:'1px',
            borderColor:'#3da260 !important'
        },
        input:{
            height:'5px',
            paddingRight:0
        }
    }
))

const SearchBox = ({history}) => {
    const state = {
        searchedText:''
    }
    const classes = useStyles();

    const handleChange = event => {
        state.searchedText = event.target.value;
    }

    const handleClick = () => {
        history.push(`/search/${state.searchedText}`);
    }

    return(
        <TextField 
        className={classes.textfield}
        variant='outlined'
        InputProps={{
            classes:{
                root:classes.outlinedinput,
                notchedOutline:classes.notchedOutline,
                input:classes.input
            },
            endAdornment:<InputAdornment position='end'>
                <IconButton onClick={handleClick}><Search /></IconButton>
            </InputAdornment>
        }}
        onChange={handleChange}></TextField>
    );
}

export default withRouter(SearchBox)