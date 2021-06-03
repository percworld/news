import './Header.css';
import React from 'react';
// import logo from './logo.svg';
import { ReactComponent as Radio } from './radio.svg';

const Header = () => {
  return (
    <h1 className="App-header">
      <Radio className='radio'></Radio>
      <div data-cy="title">Paperbot</div>
      
    </h1>
  )
}

export default Header;