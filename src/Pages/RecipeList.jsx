import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function RecipeList(){
    const [recipeList, setRecipeList] = useState([]);
    const [calories, setCalories] = useState('')

    const handleInputChange = (event) => {
        setCalories(event.target.value); // Update state on input change
      };
    
    useEffect(()=>{
      getRecipeList();
    },[]);
    
    async function getRecipeList() {
      try {
        const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?minCalories=50&maxCalories=2000&number=10&apiKey=2d2853b3f2424c1b9ba394f8755887b6');
        const data = await response.json();
        console.log('Data from API:', data);
        setRecipeList(data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }
    
      return (
        <div>
             <input
      type='number'
      placeholder = 'Calories (eg. 500)'
      onChange={handleInputChange} />
   
    <button onClick={getRecipeList}>Get Meal </button>

          {recipeList.map((recipe) => (
            <Link to = {`/recipe/${recipe.id}`} key ={recipe.id}>
            <div key={recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </div>
            </Link>
          ))}
        </div>
      );
    }
    
    export default RecipeList;