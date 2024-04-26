import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);
  const [calories, setCalories] = useState(2000);

  const handleInputChange = (event) => {
    setCalories(event.target.value); // Update state on input change
  };

  async function getRecipeList() {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?minCalories=100&maxCalories=${
          calories || 2000
        }&number=2&apiKey=819bdff34c06457996f606323df51af6&sort=calories`
      );
      const data = await response.json();
      console.log("Data from API:", data);
      setRecipeList(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Calories (e.g 500)"
        onChange={handleInputChange}
      />
      <button onClick={getRecipeList}>Get Meal </button>

      {recipeList.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div key={recipe.id}>
            <p>{recipe.title}</p>
            <p>Calories: {recipe.nutrition?.nutrients[0]?.amount} kcal</p>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;
