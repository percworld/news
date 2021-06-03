import './Tagbar.css';
import React, { useState, useEffect } from 'react';


const Tagbar = ({ categories, setCategories }) => {
  const [clicked, setClicked] = useState([]); 
  const [active, setActive] = useState('');
  
  const sections = ["all", "arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]
  const handleClick = section => {
    if (clicked.includes(section)) {
      const tempClicked = clicked;
      tempClicked.splice(tempClicked.indexOf(section), 1);
      setClicked(tempClicked);
      setCategories(tempClicked);
    } else {
      setClicked([section, ...clicked]);
      setCategories(clicked);
    }
  };

  const tags = sections.map(section => {
    if (clicked.includes(section)) {
      //setActive('active')
    }

    return (
      <div className={`tag-container ${active}`} key={section} id={section} onClick={() => handleClick(section)}>
        {section}
      </div>
    )
  });

  return (
    <div className="tags-container">
      <p className="choose-sections">CHOOSE SECTIONS:</p>
      {tags}
    </div>
  )
}

export default Tagbar;
