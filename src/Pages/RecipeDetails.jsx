import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    async function getInstructions() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=819bdff34c06457996f606323df51af6`
        );
        const data = await response.json();
        console.log("Data from API:", data); // [{steps: [{step: xxx}]}] // data [0].steps
        setInstructions(data.analyzedInstructions[0].steps); // Accessing recipes array from the data object
        console.log(data.analyzedInstructions[0].steps);
        setIngredients(data.extendedIngredients);
      } catch (error) {
        console.error("Error fetching Instructions:", error);
      }
    }
    getInstructions();
  }, [recipeId]);

  return (
    <div>
      <h1>Instructions - </h1>

      {instructions?.map((instruction, index) => (
        <div key={index}>
          <div>
            <p>
              <img src={instruction.image} alt={instruction.title} />
              Step {instruction.number}. {instruction.step}
            </p>
          </div>
        </div>
      ))}

      <h2>Ingredients</h2>
      {ingredients?.map((ingredient, index) => (
        <div key={index}>
          <ul>
            <li> {ingredient.original}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeDetails;
