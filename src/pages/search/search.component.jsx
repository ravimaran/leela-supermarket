import React from 'react';
import {withRouter} from 'react-router-dom';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { Typography, Grid } from '@material-ui/core';

class SearchPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: [],
            searchedText:''
        }
    }

    componentWillReceiveProps(newProps){
        const searchedText = newProps.match.params.searchedText;
        this.loadData(searchedText);
    }

    componentDidMount(){   
        const searchedText = this.props.match.params.searchedText;     
        this.loadData(searchedText);
    }

    loadData(searchedText){
        fetch(`http://api.inkav.ca/api/inventory/products/search/${searchedText}`)
        .then(response => response.json())
        .then(products =>{
            this.setState({searchedText:searchedText, collections: products});
        });
    }

    render(){
        const {searchedText} = this.state;
        return(
            <CollectionPreview title={`Searched Results for : '${searchedText}'`} {...this.state} />
        )
    }
}

export default withRouter(SearchPage);