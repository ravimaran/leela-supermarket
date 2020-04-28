import React from 'react';
import {withRouter} from 'react-router-dom';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { Typography, Grid } from '@material-ui/core';

import './shop.style.scss';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: [],
            category:''
        }
    }

    componentWillReceiveProps(newProps){
        const category = newProps.match.params.category;
        this.loadData(category);
    }

    componentDidMount(){   
        const category = this.props.match.params.category;     
        this.loadData(category);
    }

    componentWillUnmount(){
        this.state = {
            collections: [],
            category:''
        }
    }

    loadData(category){
        fetch(`http://api.inkav.ca/api/inventory/products/${category}`)
        .then(response => response.json())
        .then(products =>{
            this.setState({category:category, collections: products});
        });
    }

    render(){
        const {category} = this.state;
        return(
            <div className='shop'>
                <CollectionPreview title={category} {...this.state} />
            </div>
        )
    }
}

export default ShopPage;