import React from 'react';

import './form-input.style.scss';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => (
    {
        textfield:{
            width:'100%',
            color:'secondary !important'
        },
        outlinedinput:{
            borderColor:theme.palette.secondary
        },
        label:{
            color:'#3da260 !important'
        },
        notchedOutline:{
            borderWidth:'1px',
            borderColor:'#3da260 !important'
        },
    }
))

const FormInput = ({handleChange, label, ...otherProps}) => {

    const classes = useStyles();
    return(
        <div className='group'>
            <TextField 
                id={`filled-${label}-input`} 
                variant='outlined' 
                label={label} 
                onChange={handleChange} 
                className={classes.textfield}
                InputLabelProps={{
                    classes:{
                        root:classes.label
                    }
                }}
                InputProps={{
                    classes:{
                        notchedOutline:classes.notchedOutline
                    }
                }}
                {...otherProps} />
        </div>
    )
}

export default FormInput;