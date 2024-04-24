# React + Vite

Progress
API fetch works.

import { useState } from "react";

function RecipePage() {
const [mealData, setMealData] = useState('')
const [calories, setCalories] = useState('')

    function handleChange(event) {
      setCalories(event.target.value)

    }

    async function getMealData() {
      const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?minCalories=50&maxCalories=2000&number=10&apiKey=2d2853b3f2424c1b9ba394f8755887b6");
    //   const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?minCalories=50&maxCalories=2000&number=10&apiKey=${process.env.REACT_APIKEY}`)
      const mealData = await response.json();
      setMealData(mealData);
      console.log(mealData)

return (

    <div className = 'RecipePage'>

    <section className = 'controls'>
      <input
      type='number'
      placeholder = 'Calories (eg. 500)'
      onChange={handleChange} />
    </section>
    <button onClick={getMealData}>Get Meal </button>
    </div>

)
}
