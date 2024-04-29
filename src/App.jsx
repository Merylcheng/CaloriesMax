// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import RecipeList from "./Pages/RecipeList";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import MealPlanner from "./Pages/MealPlanner";
import FavList from "./Pages/FavList";
import RecipeDetails from "./Pages/RecipeDetails";
import DailySpecials from "./Pages/DailySpecials";
// import Planner from "./Components/Planner";
import EditCustom from "./Pages/EditCustom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/RecipeList" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/DailySpecials" element={<DailySpecials />} />
        <Route exact path="/MealPlanner" element={<MealPlanner />} />
        <Route path="/FavList" element={<FavList />} />
        {/* <Route path="/Planner" element={<Planner />} /> */}
        {/* <Route path="/EditCustom" element={<EditCustom />} /> */}
        <Route path="/EditCustom/:mealId" element={<EditCustom />} />
      </Routes>
    </div>
  );
}

export default App;
//  <Route path="/MealPlanner" element={<MealPlanner />} />
