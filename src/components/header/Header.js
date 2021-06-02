import './Header.css';
import React from 'react';
// import logo from './logo.svg';
import { ReactComponent as Radio } from './radio.svg';

const Header = () => {
  return (
    <header className="App-header">
      <Radio className='radio'></Radio>
      <div>Paperboy</div>
      
    </header>
  )
}

export default Header;