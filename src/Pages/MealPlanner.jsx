import { useState, useEffect } from "react";

function MealPlanner() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMealRandom();
  }, []);

  async function getMealRandom() {
    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/random?number=3&apiKey=083d38774aef44bbbb8eee5cf234fc952"
      );
      const data = await response.json();
      console.log("Data from API:", data);
      setMeals(data.recipes); // Accessing recipes array from the data object
    } catch (error) {
      console.error("Error fetching Random Meal:", error);
    }
  }

  return (
    <div>
      <h1>Ideas for your meal</h1>

      {meals.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
}

export default MealPlanner;

// https://api.spoonacular.com/recipes/random?number=1&apiKey=819bdff34c06457996f606323df51af6
