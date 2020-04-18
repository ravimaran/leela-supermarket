import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection-preview.style.scss';
import { Grid, Typography } from '@material-ui/core';

const CollectionPreview = ({title, items}) => (
    <React.Fragment>
        <Typography component='h4' variant='h4' gutterBottom>
            {title}
        </Typography>
        <Grid container spacing={2}>
            {
                items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </Grid>
    </React.Fragment>
)

export default CollectionPreview;