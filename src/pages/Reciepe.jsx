import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
  const [searchResults, setSearchResults] = useState({});
  const { Reciepe } = useParams();

  const apiKey = '116623bb7f334733a703dab0e78d401c';
  const apiUrl = 'https://api.spoonacular.com/recipes/';

  useEffect(() => {
    searchRecipe();
  }, [Reciepe]);

  async function searchRecipe() {
    try {
      const response = await fetch(`${apiUrl}${Reciepe}/information?apiKey=${apiKey}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <div className="recipe-text">
        <div className="bannerimg">
          <img src={searchResults.image} alt="" />
        </div>
        <div className="py-5">
          <div className="container">
            <h5 className="fw-bold fs-2 mb-5">{searchResults.title}</h5>
            <p dangerouslySetInnerHTML={{ __html: searchResults.summary }}></p>
          </div>          
        </div>
      </div>
    </>
  );
}

export default Recipe;
