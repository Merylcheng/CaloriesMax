// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import RecipeList from "./Pages/RecipeList";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import MealPlanner from "./Pages/MealPlanner";
import FavList from "./Pages/FavList";
import RecipeDetails from "./Pages/RecipeDetails";
import DailySpecials from "./Pages/DailySpecials";
import EditCustom from "./Components/EditCustom";

function App() {
  return (
    <div className="App">
      <h1>Calories Max</h1>

      {/* <BrowserRouter> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/RecipeList" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/DailySpecials" element={<DailySpecials />} />
        <Route path="/MealPlanner" element={<MealPlanner />} />
        <Route path="/FavList" element={<FavList />} />
        <Route path="/EditCustom" element={<EditCustom />} />
      </Routes>
    </div>
  );
}

export default App;
//  <Route path="/MealPlanner" element={<MealPlanner />} />
