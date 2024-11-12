import React, { useContext, useState } from 'react'
import NavMenu from '../NavMenu'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { IoMenu } from "react-icons/io5";
import { Context } from '../../context';

export default function Header() {

  const { openMenu, menuActive } = useContext(Context);

  return (
    <header className={[s.header, menuActive ? s.active : ''].join(' ')}>
        <div className='wrapper'>
          <Link to='/'>LOGO</Link>
          <NavMenu />
          <IoMenu onClick={openMenu} />
        </div>
    </header>
  )
}
