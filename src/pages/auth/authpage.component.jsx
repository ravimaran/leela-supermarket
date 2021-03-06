import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { GoogleSignIn } from '../../components/external-login/external-login.component';

import './authpage.style.scss';
import { Grid } from '@material-ui/core';

const AuthPage = () => (
    <div className='auth'>
       <Grid container justify='space-around' orientation='row'>
            <Grid container item={true} md={6} xs={12}>
                <Grid>
                    <SignIn />
                    <div className='or-text'><p>Or sign in with</p></div>
                    <GoogleSignIn />
                </Grid>
            </Grid>
            <Grid container item={true} md={6} xs={12}>
                <SignUp />
            </Grid>         
        </Grid>  
    </div>
);

export default AuthPage;