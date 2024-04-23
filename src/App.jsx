import { useState } from "react";
import MealList from './MealList'

function App() {
  
  const [mealData, setMealData] = useState('')
  const [calories, setCalories] = useState('')

  function handleChange(event) {
    setCalories(event.target.value)

  }  
  
  async function getMealData() {
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?minCalories=50&maxCalories=2000&number=10&apiKey=5fd761dd54a74faf8f5d37f3d4570012");
    const mealData = await response.json();
    setMealData(mealData);
    console.log(mealData)
  }

    return (
      <div className = 'App'>
      <h1>Calories Max</h1>
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

export default App
