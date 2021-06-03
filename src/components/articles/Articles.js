import './Articles.css';
import React from 'react';
import propTypes from 'prop-types';
import Tagbar from '../tagbar/Tagbar';

const Articles = ({articles, setArticle, categories, setCategories}) => {
  //handle click article set / create func for map
  const articlesToDisplay = articles.map((article, index) => {
    console.log(articles[0])
    return (
      <div className="article-container" key={article.updated_date}>
        <div className="article">
          {article.created_date}
        </div>
      </div>
    )
  }) 
  return (
    <div className="dashboard-container">
      <section className="stories-container">
        <p className="stories">TOP STORIES:</p>
        <div className="scroll-mauve">
         {articlesToDisplay} 
        </div>
      </section>
      <Tagbar categories={categories} setCategories={setCategories}></Tagbar>
    </div>
  )
}

export default Articles;

Articles.propTypes = {
  setArticle: propTypes.func,
  categories: propTypes.array
}