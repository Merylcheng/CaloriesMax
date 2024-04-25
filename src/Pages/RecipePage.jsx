
import { useState } from "react";

function RecipePage() {
    const [recipesData, setRecipesData] = useState('')
    const [calories, setCalories] = useState('')
  
    function handleChange(event) {
      setCalories(event.target.value)
  
    }  
    
    async function getRecipesData() {
      const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?minCalories=50&maxCalories=2000&number=10&apiKey=2d2853b3f2424c1b9ba394f8755887b6");
      // const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?minCalories=50&maxCalories=2000&number=10&apiKey=${process.env.REACT_APIKEY}`)
      const recipesData = await response.json();
      setRecipesData(recipesData);
      console.log(recipesData)


  return (

    <div>
    <h1>Recipes</h1>
    <section className = 'controls'>
      <input
      type='number'
      placeholder = 'Calories (eg. 500)'
      onChange={handleChange} />
    </section>
    <button onClick={getRecipesData}>Get Meal </button>
    </div>


  )
}
}


export default RecipePage