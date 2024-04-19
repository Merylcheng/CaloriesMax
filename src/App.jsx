  async function logMovies() {
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?minCalories=50&maxCalories=500&number=3&includeIngredients=tomato,cheese&addRecipeInstructions=true&apiKey=5fd761dd54a74faf8f5d37f3d4570012");
    const movies = await response.json();
    console.log(movies);
  }

function App() {

  logMovies()




    return (


  
 <h1>test</h1>

    )
  
}

export default App
