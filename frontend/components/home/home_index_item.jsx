import React from 'react';

const HomeIndexItem = ({ home }) => {
  return (
    <div className="home-index-item">
      <p className="home-category-30">{home["address"]}</p>
      <p className="home-category-15">${home["price"]}</p>
      <p className="home-category-15">{home["beds"]}</p>
      <p className="home-category-15">{home["baths"]}</p>
      <p className="home-category-25">{home["location"]}</p>
    </div>
  )
}

export default HomeIndexItem;