import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { UI_CATEGORY_LARGE, UI_CATEGORY_SMALL } from './uicategory.data';

//Material UI
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core';

import './directory.style.scss';

const useStyle = makeStyles( (theme) => (
    {
        paper:{
            padding:theme.spacing(2)
        },
        box:{
            margin:5
        }
    }
))

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
                <div className='mt-5' />
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
