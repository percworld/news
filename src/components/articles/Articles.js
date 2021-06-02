import './Articles.css';
import React from 'react';
import propTypes from 'prop-types';
import Tagbar from '../tagbar/Tagbar';

const Articles = ({setArticle, categories, setCategories}) => {
  return (
    <div className="dashboard-container">
      <section className="stories-container">
        <div className="scroll-mauve">
          <p className="stories">TOP STORIES:</p>
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