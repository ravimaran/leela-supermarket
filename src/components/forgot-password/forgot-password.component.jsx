import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {Typography} from '@material-ui/core';

import { auth } from '../../firebase/firebase.utils';

import './forgot-password.style.scss';

class ForgotPassword extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            message:''
        }
    }

    handleClick = (event) =>{
        this.setState({message:''});
        auth.sendPasswordResetEmail(this.state.email)
        .then( () => {
            this.setState({message:'Reset password link has been sent to your email.  Please follow the instructions to reset your password.'});
        })
        .catch( (error) => {
            this.setState({message:error.message});
        });
    }
    
    handleChange = (event) =>{
        this.setState({email:event.target.value});
    }


    render(){
        return (
            <div className='forgot-password'>
                <Typography component='h4' variant='h4' gutterBottom>
                    Rest Pasword
                </Typography>
                <FormInput label='Email' required onChange={this.handleChange}></FormInput>
                <CustomButton onClick={this.handleClick}>Rest Password</CustomButton>
                <p>{this.state.message}</p>
            </div>
        );
    }
    
}

export default ForgotPassword;