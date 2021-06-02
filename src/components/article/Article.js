import './Article.css';
import React from 'react';
import propTypes from 'prop-types';


const Article = ({ article }) => {
  return (
    <div>
      SINGLE
    </div>
  )
}

export default Article;

Article.propTypes = {
  setArticle: propTypes.func,
  categories: propTypes.array
}