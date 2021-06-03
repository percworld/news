import './Articles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Tagbar from '../tagbar/Tagbar';

const Articles = ({articles, setArticle, categories, setCategories}) => {
  const handleClick = (article) => {
    setArticle(article);
  };

  const filteredArticles = articles.filter(article => {
    return categories.includes(article.section)
  });

  const articlesToDisplay = articles.map((article, index) => {
    return (
      <Link to="/article" className="article-container" key={index} onClick={() => handleClick(article)}>       
          <img className="small-image" src={article.multimedia[1].url} alt={article.multimedia[1].caption}></img>
          {article.title}        
      </Link>
    )
  });

  const filteredArticlesToDisplay = filteredArticles.map((article, index) => {
    return (
      <Link to="/article" className="article-container" key={index} onClick={() => handleClick(article)}>
        <img className="small-image" src={article.multimedia[1].url} alt={article.multimedia[1].caption}></img>
        {article.title}
      </Link>
    )
  });

  return (
    <div className="dashboard-container">
      <section className="stories-container">
        <p className="stories">TOP STORIES:</p>
        <div className="scroll-mauve">
          {categories.length ?
             articles.length ? filteredArticlesToDisplay : <p>Loading Articles...</p> 
            :  articles.length ? articlesToDisplay : <p>Loading Articles...</p>
          }
        </div>
      </section>
      <Tagbar categories={categories} setCategories={setCategories}></Tagbar>
    </div>
  );
}

export default Articles;

Articles.propTypes = {  // !isRequired
  setArticle: propTypes.func,
  categories: propTypes.array
}