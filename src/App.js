import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom'
import SignInPage from './pages/sign-in-page/sign-in-page.components';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route path='/shop' component={ ShopPage }/>
          <Route path='/signin' component={ SignInPage }/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
