# React + Vite

Progress
API fetch works.

data.analyzedInstructions[0].steps

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
const [instructions, setInstructions] = useState([]);
const { recipeId } = useParams();

useEffect(() => {
async function getInstructions() {
try {
const response = await fetch(
`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=819bdff34c06457996f606323df51af6`
);
const data = await response.json();
console.log("Data from API:", data); // [{steps: [{step: xxx}]}] // data [0].steps
setInstructions(data[0].steps); // Accessing recipes array from the data object
console.log(data[0].steps);
} catch (error) {
console.error("Error fetching Instructions:", error);
}
}
getInstructions();
}, [recipeId]);

return (
<div>
<h1>Instructions - </h1>
{/_ {instructions && instructions.length > 0 ? ( _/}
{instructions?.map((instruction, index) => (
<div key={index}>
<div>
<p>
Step {instruction.number}. {instruction.step}
</p>
</div>
</div>
))}
</div>
);
}

export default RecipeDetails;
