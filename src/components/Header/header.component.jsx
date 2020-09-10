import React from 'react';
import './header.styles.scss';
import {Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/Zara_Logo.svg';
import {auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import  CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer , LogoContainer , OptionsContainer ,OptionLink } from './header.styles';

const Header =  ({ currentUser ,hidden}) => (
    
   <HeaderContainer>
   <LogoContainer to='/'>
       <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to='/shop'> SHOP </OptionLink>
        <OptionLink to='/contact'> CONTACT </OptionLink>
        {
            currentUser ?
            <OptionLink onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
            : <OptionLink className='option' to='/signin'> SIGN IN</OptionLink>
        }
        <CartIcon/>
    </OptionsContainer>

     {   hidden ? null :
         <CartDropDown/>
       }
    </HeaderContainer>
)

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);