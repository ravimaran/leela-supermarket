import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:''});
        }catch(error){
            console.log(error);
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
                        <h4>I would like to sign in with my google account.</h4>
                    </div>
                    <div>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {' '} Sign In With Google {' '}</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;