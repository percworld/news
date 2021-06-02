
import './App.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tagbar from '../tagbar/Tagbar';
import Articles from '../articles/Articles';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { getArticle } from '../../apiCalls'

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

  

  setArticle = async (id) => {
    const article = await getArticle(id);
    this.setState({ article: article });
  }

  render() {

    return (
      <div className="App page-container">
        <div className="content-wrap">
        <Header></Header>
        <Switch>
          <Route exact path="/" render={() => (<Articles articles={this.state.articles}/>)}></Route>
        </Switch>
        
        <Footer></Footer>
        </div>
        
      
      </div>
    );
  }
}

export default App;
