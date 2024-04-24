import { useState, useEffect } from "react";
// import Airtable from "airtable";


function FavList() {

const [favourites, setFavourites] = useState([]);

useEffect(() => {
    async function fetchFavList() {
    const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%202";
   
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`, // Replace YOUR_API_KEY with your Airtable API key
      }
    })
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setFavourites(data.records);
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchFavList();

}, []);


//issue with map

  return (
    <div>
      <h1>Your Favourite Recipes</h1>
      {favourites.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      
    
      
    </div>
  );
}


export default FavList




