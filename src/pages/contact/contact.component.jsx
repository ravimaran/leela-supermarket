import React from 'react';
import GoogleMap from '../../components/googlemap/googlemap.component';

import './contact.style.scss';

class ContactPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
       return(
        <React.Fragment>
            <div className='contact'>
                <p>Contact</p>
            </div>
        </React.Fragment>
       )
    }
}

export default ContactPage;