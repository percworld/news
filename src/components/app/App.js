
import './App.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Articles from '../articles/Articles';
import Article from '../article/Article';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { getArticles } from '../../apiCalls'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      article: {},
      categories: []
    }
  }

  componentDidMount() {
    // get.then
  }

  setCategories = (categories) => {
    this.setState({ categories: categories })
  }

  setArticle = article => {
    this.setState({ article: article });
  }

  render() {

    return (
      <div className="App page-container">
        <div className="content-wrap">
        <Header></Header>
        <Switch>
          <Route exact path="/" render={() => (<Articles articles={this.state.articles} setArticle={this.setArticle}/>)}></Route>
          <Route path="/article" render={() => (<Article article={this.state.article} />)}></Route>
        </Switch>
        
        <Footer></Footer>
        </div>
        
      
      </div>
    );
  }
}

export default App;
