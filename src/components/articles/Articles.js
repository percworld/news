import './Articles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Tagbar from '../tagbar/Tagbar';

const Articles = ({articles, setArticle, categories, setCategories, updateArticles }) => {
  const handleClick = (article) => {
    setArticle(article);
  };

  const articlesToDisplay = articles.map((article, index) => {
    return (
      <Link to="/article" className="article-container" key={index} onClick={() => handleClick(article)} data-cy="article-title">       
          {article.multimedia && <img className="small-image" src={article.multimedia[1].url} alt={article.multimedia[1].caption}></img>}
          {article.title}        
      </Link>
    )
  });

  return (
    <div className="dashboard-container">
      <section className="stories-container">
        <p className="stories">TOP STORIES:</p>
        <div className="story-container">
          {articles.length ? articlesToDisplay : <p>Loading Articles...</p>}
        </div>
      </section>
      <Tagbar categories={categories} setCategories={setCategories} updateArticles={updateArticles}></Tagbar>
    </div>
  );
}

export default Articles;

Articles.propTypes = { 
  articles: propTypes.array.isRequired,
  setArticle: propTypes.func.isRequired,
  categories: propTypes.array.isRequired,
  setCategories: propTypes.func.isRequired,
  updateArticles: propTypes.func.isRequired
}
