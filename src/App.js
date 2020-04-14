import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import { connect } from 'react-redux';

import './App.css';
import theme from './theme/theme';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/authpage.component';
import Footer from './components/footer/footer.component';
import ContactPage from './pages/contact/contact.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {      
      if(userAuth){        
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id:snapshot.id,
              ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
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
              <Route path='/shop' component={ShopPage} />
              <Route path='/auth' component={AuthPage} />
              <Route path='/contact' component={ContactPage} />
            </Switch>
          </div>
        </div>  
        <Footer />     
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
