import React, { useContext } from 'react';
import './Header.css';
import {CgShoppingCart} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { Store } from '../../../store/context';

const Header = ({cartOpen}) => {

  const {cartItem} = useContext(Store)


  const totalQuantity = cartItem.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className='main-header' >
      <div className='header-content'>
        <ul className='left' >
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <Link to='/'><div className='center' onClick={()=>cartOpen(true)} >Medical Store</div></Link>
        <div className='right' >
          <span className='cart-icon' onClick={()=>cartOpen(false)} >
          <Link to='/cart'>
            <CgShoppingCart/>
 
            <span>{totalQuantity}</span>
            </Link>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header;
