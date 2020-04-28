import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { UI_CATEGORY_LARGE, UI_CATEGORY_SMALL } from './uicategory.data';

//Material UI
import Grid from '@material-ui/core/Grid';
import {Box} from '@material-ui/core';

import './directory.style.scss';

class Directory extends Component{
    constructor(){ 
        super();
        this.state = {
            sectionslarge:UI_CATEGORY_LARGE,
            sectionssmall:UI_CATEGORY_SMALL
        }
    }

    render(){
        return(
            <React.Fragment>
                <Grid 
                container spacing={2}>
                    {
                        this.state.sectionslarge.map( ({id, ...sectionParams}) => (
                            <Grid key={id} container xs={12} md={4} item={true}>
                                <MenuItem {...sectionParams} />
                            </Grid>
                        ))
                    }
                </Grid>
                <Box mt={2} />
                <Grid 
                container spacing={2}>
                    {
                    this.state.sectionssmall.map( ({id, ...sectionParams}) => (
                        <Grid key={id} container xs={6} md={3} item={true}>
                            <MenuItem {...sectionParams} />
                        </Grid>
                    ))
                    }
                </Grid>
            </React.Fragment>
        )
    }
}

export default Directory;
