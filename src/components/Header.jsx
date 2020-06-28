import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <div className='header__container'>
      <Link to='/'>HOME</Link>
      <Link to='/browse'>BROWSE</Link>
      <Link to='/about'>ABOUT THIS PROJECT</Link>
    </div>
  </header>
);
export default Header;
