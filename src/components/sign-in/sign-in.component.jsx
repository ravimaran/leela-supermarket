import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';
import { Typography, Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: '',
            error:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password, error} = this.state;
        this.setState({error:''});
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:''});
        }catch(error){
            this.setState({error:error.message});
        }
    }

    handlChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h4>I already have an account</h4>
                <span>Signin in with your emai and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} required handleChange={this.handlChange} type='email' label='Email'/>
                    <FormInput name='password' value={this.state.password} required handleChange={this.handlChange} type='password' label='Password' />
                    <div className='buttons'>
                        <CustomButton type='submit'>{'    '} Sign In {'    '}</CustomButton>                     
                    </div>
                    <div>
                    <Typography className='error' component='p'>{this.state.error}</Typography>    
                    </div>
                    <Grid container justify='center'>
                        <Link to='/forgotpassword' color='secondary'>Forgot/Reset Password</Link>
                    </Grid>
                </form>
            </div>
        );
    }
}

export default SignIn;