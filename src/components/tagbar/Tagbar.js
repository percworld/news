import './Tagbar.css';
import React, { useState, useEffect } from 'react';


const Tagbar = ({ categories, setCategories, updateArticles }) => {
  const [isActive, setIsActive] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ]);
  const sections = ["home", "arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]
  
  const handleClick = async (section) => {
    const index = sections.indexOf(section);
    const tempActive = isActive;
    tempActive[index] = !tempActive[index];
    setIsActive(tempActive)
    await setCategories([section])
  };

  const getClass = activeTag => {
    return (
      activeTag && "active"
      )
    }
  const tags = sections.map((section, index) => {   
    return (
      <div className={`tag-container ${getClass(isActive[index])}`} key={section} id={section} onClick={() => handleClick(section)} data-cy="tag">
      {section}
    </div>
    )
  });

  useEffect(() => {
    categories.length && updateArticles(categories)
  },[categories]) 
  
  return (
    <div className="tags-container">
      <p className="choose-sections">CHOOSE SECTIONS:</p>
      {tags}
    </div>
  )
}

export default Tagbar;
