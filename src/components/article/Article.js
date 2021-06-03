import './Article.css';
import React from 'react';
import { Link } from 'react-router-dom'; 
import propTypes from 'prop-types';
import { formatDate } from '../../utilities';
import { ReactComponent as BackArrow } from './back-arrow.svg';

const Article = ({ article }) => {
  const { title, byline, created_date, section, subsection, abstract, url, multimedia } = article;
  return (
    <div className="article-container">
      <article className="article-single">
        <Link to="/" id="arrow-container" data-cy="back">
          <BackArrow className="back-arrow"></BackArrow>
        </Link>
        <p id="title" data-cy="single-title">{title}</p>
        <p id="author">{byline}</p>
        <p id="date">Published {formatDate(created_date)}
          <span id="date"> - {section} {subsection} news</span>
        </p>
        {multimedia && 
        <div>
          <img className="image" src={multimedia[0].url} alt={multimedia[0].caption}></img>
          <p id="author">{multimedia[0].copyright}</p>
          <p id="date">{multimedia[0].caption}</p>
          {abstract && <p id="date">{abstract}</p>}
        </div>}
        <a href={url} className='details-link' target='_blank' rel='noreferrer'>Click Here to View the Article</a>
      </article>
    </div>
  )
}

export default Article;

Article.propTypes = {
  setArticle: propTypes.func,
  categories: propTypes.array
}