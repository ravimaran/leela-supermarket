import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { signInWithGoogle } from '../../firebase/firebase.utils';
import { Button, Grid } from '@material-ui/core';

import './external-login.style.scss';


export const GoogleSignIn = () => {
    library.add(fab);
    return(
        <React.Fragment>
            <div>
                <Button variant='contained' onClick={signInWithGoogle} className='googleButton'>
                    <Grid container alignItems='center' justify='center'>
                        <FontAwesomeIcon icon={['fab', 'google']} />
                        <span className='google-text'>Sign in with Google</span>
                    </Grid>
                </Button>
            </div>
        </React.Fragment>
    );
}