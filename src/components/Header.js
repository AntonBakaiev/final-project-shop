import React from 'react';
import { Link } from 'react-router-dom'
import { useCart } from './hooks/useCart';

function Header(props) {
  
  const { totalPrice} = useCart();


    return (
        <header className="d-flex justify-between align-center p-40">
        <Link to="/">
        <div className="d-flex align-center">
          
            <img width={40} height={40} src="/img/logo.jpg" alt="logo" />
            
            <div className="headerInfo">
              <h3 className="text-uppercase">Your.ring_UA</h3>
              <p className="opacity-5">вироби з бісеру</p>
            </div>
         
        </div>
         </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
           <img className='mr-10' src="/img/Shop-cart.svg" alt="Cart" />
            <span> {totalPrice} грн</span>
          </li>
          <li className="mr-30 cu-p">
            <Link to="/favorites">
              <img src="/img/favorite.svg" alt="favorite" />
            </Link>
          </li>
          <li className="cu-p">
            <Link to="/orders">
               <img src="/img/Union.svg" alt="Union" />
            </Link>
          </li>
        </ul>
      </header>
    );
}

export default Header;