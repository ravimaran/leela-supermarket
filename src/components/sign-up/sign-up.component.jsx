import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { Typography } from '@material-ui/core';

import './sign-up.style.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            phoneNumber:'',
            error:''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, phoneNumber, error} = this.state;
        this.setState({error:''}); // reset error message

        try{
            const{user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName, phoneNumber});
            this.setState(
                {
                    displayName:'',
                    email:'',
                    password:'',
                    phoneNumber:''
                }
            );
        }catch(error){
            this.setState({error:error.message});
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, phoneNumber} = this.state;
        return(
            <div className='sign-up'>
                <h4 className='title'>I do not have an account</h4>
                <span>Sign up with your email and password.</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text' 
                        name='displayName' 
                        value={displayName} 
                        onChange={this.handleChange}
                        label='Name'
                        required />
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={email} 
                        onChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput 
                        type='password' 
                        name='password' 
                        value={password} 
                        onChange={this.handleChange}
                        label='Password'
                        required />
                    <FormInput 
                        type='text' 
                        name='phoneNumber' 
                        value={phoneNumber} 
                        onChange={this.handleChange}
                        label='Phone Number'
                        required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    <Typography component='p' className='error'>{this.state.error}</Typography>
                </form>
            </div>
        );
    }
}

export default SignUp;