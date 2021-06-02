
import './App.css';

import Header from '../header/Header';
import Tagbar from '../tagbar/Tagbar';
import Footer from '../footer/Footer';
import { Route, Switch } from 'react-router-dom';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      article: {}
    }
  }

  componentDidMount() {
    // get.then
  }

  render() {

    return (
      <div className="App page-container">
        <div className="content-wrap">
        <Header></Header>
        
        <Footer></Footer>
        </div>
        
      
      </div>
    );
  }
}

export default App;
