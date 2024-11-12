import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { useSelector } from 'react-redux'
import { RiCloseLargeLine } from "react-icons/ri";
import { Context } from '../../context';

export default function NavMenu() {

  const { closeMenu, menuActive } = useContext(Context);

  const cartState = useSelector(store => store.cart);

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);

  return (
    <nav className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>
      <Link to='/'>Main</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/all_products'>All products</Link>
      <Link to='/cart'>
        Cart
        {
          cartState.length === 0
          ? ''
          : <span>{ totalCount }</span>
        }
      </Link>
      <RiCloseLargeLine onClick={closeMenu} />
    </nav>
  )
}
