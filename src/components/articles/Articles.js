import './Articles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Tagbar from '../tagbar/Tagbar';

const Articles = ({articles, setArticle, categories, setCategories}) => {
  const handleClick = (article) => {
    setArticle(article);
  };

  const articlesToDisplay = articles.map((article, index) => {
    return (
      <Link to="/article" className="article-container" key={article.updated_date} onClick={() => handleClick(article)}>       
          {article.title}        
      </Link>
    )
  });

  return (
    <div className="dashboard-container">
      <section className="stories-container">
        <p className="stories">TOP STORIES:</p>
        <div className="scroll-mauve">
         {articles.length ? articlesToDisplay : <p>Loading Articles...</p>} 
        </div>
      </section>
      <Tagbar categories={categories} setCategories={setCategories}></Tagbar>
    </div>
  );
}

export default Articles;

Articles.propTypes = {
  setArticle: propTypes.func,
  categories: propTypes.array
}