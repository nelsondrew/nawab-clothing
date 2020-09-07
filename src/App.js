import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-im-and-sign-up.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';

class App  extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubsribeFromAuth = null

  componentDidMount () {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot( snapShot =>{
         this.setState({
           currentUser : {
             id : snapShot.id,
             ...snapShot.data()
           }
         })
         
      });
      
    }
    this.setState({ currentUser : userAuth});
    });
  }

  componentWillUnmount () {
    this.unsubsribeFromAuth();
  }

  render () {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        
        <Switch>
       <Route  exact  path='/' component = {Homepage}/>
        <Route  path='/shop' component = {ShopPage}/>
        <Route exact path='/signin' component = {SignInAndSignUpPage}/>
       
        </Switch>
      </div>
    );
  }
 
}

export default App;
