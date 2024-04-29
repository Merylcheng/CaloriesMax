import { NavLink } from "react-router-dom";
import "../NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand"></div>
      <div className="navbar-links">
        <NavLink to="/Home" className="navbar-link">
          <span className="larger-text">Calories Max</span>
        </NavLink>

        <NavLink to="/Home" className="navbar-link">
          Home
        </NavLink>
        <NavLink to="/RecipeList" className="navbar-link">
          Recipes
        </NavLink>
        <NavLink to="/DailySpecials" className="navbar-link">
          Daily Specials
        </NavLink>
        <NavLink to="/MealPlanner" className="navbar-link">
          Meal Planner
        </NavLink>
        <NavLink to="/FavList" className="navbar-link">
          FavList
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
