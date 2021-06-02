import './Tagbar.css';
import React, { useState, useEffect } from 'react';

const Tagbar = ({ categories, setCategories }) => {
  const sections = ["all", "arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]
  const tags = sections.map(section => {
    return (
      <div className="tag-container">
        {section}
      </div>
    )
  })
  return (
    <div className="tags-container">
      <p>Filter by category:</p>
      {tags}
    </div>
  )
}

export default Tagbar;
