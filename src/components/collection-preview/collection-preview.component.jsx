import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection-preview.style.scss';
import { Grid, Typography } from '@material-ui/core';

const CollectionPreview = ({title, collections}) => (
    <React.Fragment>
        <Typography component='h4' variant='h4' gutterBottom>
            {title.toUpperCase()}
        </Typography>
        <Grid container spacing={1}>
            {
                collections.map((item) => (
                    <CollectionItem key={item.productId} item={item} />
                ))
            }
        </Grid>
    </React.Fragment>
)

export default CollectionPreview;