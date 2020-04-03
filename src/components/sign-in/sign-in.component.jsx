import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email:'', password:''});
    }

    handlChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin in with your emai and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} required handleChange={this.handlChange} type='email' label='Email'/>
                    <FormInput name='password' value={this.state.password} required handleChange={this.handlChange} type='password' label='Password' />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {' '} Sign In With Google {' '}</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;