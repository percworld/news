import './Articles.css';
import React from 'react';
import propTypes from 'prop-types';

const Articles = ({setArticle, categories}) => {
  return (
    <div className="dashboard-container">
      <section className="mauve-container">
        <div className="scroll-mauve">
          TOP STORIES:
        </div>
      </section>
      <div className="tags-container">
        <p>Filter by category:</p>
      </div>
    </div>
  )
}

export default Articles;

Articles.propTypes = {
  setArticle: propTypes.func,
  categories: propTypes.array
}