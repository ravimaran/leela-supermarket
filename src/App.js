import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import {ThemeProvider} from '@material-ui/styles';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/authpage.component';
import Footer from './components/footer/footer.component';
import CurbsidePage from './pages/curbside/curbside.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SearchPage from './pages/search/search.component';
import CheckoutComplete from './pages/checkout-complete/checkout-complete.component';
import PhoneNumber from './components/phonenumber/phonenumber.component';
import ForgotPassword from './components/forgot-password/forgot-password.component';
import TestPage from './pages/test.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCart, selectCartItems, selectCartItemsCount, selectCartItemsTotal } from './redux/cart/cart.selectors';
import {setGotoPage} from './redux/cart/cart.actions';
import { submitOnlineOrder } from './utils/cartutils';
import { createStructuredSelector } from 'reselect';


import theme from './theme/theme';
import './App.css';

class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {cartItems, itemsCount, cartTotal, dispatch, history} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {      
      if(userAuth){        
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(
            setCurrentUser({
              id:snapshot.id,
                ...snapshot.data()
            })
          );

          const{currentUser, cart} = this.props;
          if(cart.gotoPage !== undefined){
            if(cart.gotoPage === '/checkout-complete'){
              if(!snapshot.data().phoneNumber){
                this.props.history.push('/phonenumber');
              }else{
                cart.gotoPage = null;
                submitOnlineOrder(cartItems, itemsCount, cartTotal, currentUser, dispatch, history); 
              }   
            } 
          }
        });
      }

      dispatch(setCurrentUser(userAuth));
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <div className='container-grey'>
          <div className='container-main'>        
            <Switch>
            <Route exact path='/' component={HomePage} />              
              <Route path='/auth' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<AuthPage />)} />
              <Route path='/shop/:category' component={ShopPage} />
              <Route path='/search/:searchedText' component={SearchPage} />
              <Route path='/curbside' component={CurbsidePage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/checkout-complete' component={CheckoutComplete} />
              <Route path='/phonenumber' component={PhoneNumber} />
              <Route path='/forgotpassword' component={ForgotPassword} />
              <Route path='/test' component={TestPage} />
            </Switch>
          </div>
        </div>  
        <Footer />     
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  cart:selectCart,
  cartItems:selectCartItems,
  itemsCount:selectCartItemsCount,
  cartTotal:selectCartItemsTotal
})

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

export default withRouter(connect(mapStateToProps)(App));
