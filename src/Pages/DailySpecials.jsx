import { useState, useEffect } from "react";

function DailySpecials() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMealRandom();
  }, []);

  async function getMealRandom() {
    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/random?number=3&apiKey=c001f538d0ad42f8a97dbe5294936302"
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
      <h2>Ideas for your meal</h2>

      {meals.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
}

export default DailySpecials;
