// import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
// import RecipePage from './Pages/RecipePage'
// import RecipeList from './Pages/RecipeList'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import MealPlanner from './Pages/MealPlanner'
import FavList from './Pages/FavList'

function App() {
  


    return (
      <div className='App'>
        <h1>Calories Max</h1>

    
        {/* <BrowserRouter> */} 
        <NavBar />
        <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/RecipeList" element={<RecipeList />} /> */}
        <Route path="/MealPlanner" element={<MealPlanner />} />
        <Route path="/FavList" element={<FavList />} />
        </Routes>

        {/* <RecipeList /> */}
        {/* <MealPlanner /> */}
        
       
      </div>
    )
  
}

export default App
