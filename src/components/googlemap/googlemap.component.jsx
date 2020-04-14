import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const GoogleMap = () =>(
    <Map zoom={8}>
        <Marker />
    </Map>
)

export default GoogleMap;