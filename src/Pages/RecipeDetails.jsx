import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipeImage, setRecipeImage] = useState("");
  const { recipeId } = useParams();

  useEffect(() => {
    async function getInstructions() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=c001f538d0ad42f8a97dbe5294936302`
        );
        const data = await response.json();
        console.log("Data from API:", data); // [{steps: [{step: xxx}]}] // data [0].steps
        setInstructions(data.analyzedInstructions[0].steps); // Accessing recipes array from the data object
        console.log(data.analyzedInstructions[0].steps);
        setIngredients(data.extendedIngredients);
        setRecipeImage(data.image);
      } catch (error) {
        console.error("Error fetching Instructions:", error);
      }
    }
    getInstructions();
  }, [recipeId]);

  return (
    <div>
      {recipeImage && <img src={recipeImage} alt="Recipe" />}
      <h2>Instructions </h2>
      {instructions?.map((instruction, index) => (
        <div key={index}>
          <div>
            <p>
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
      <button>Add to Favourite</button>;
    </div>
  );
}

export default RecipeDetails;
