import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/Home">Home</Link> |<Link to="/RecipeList">Recipes</Link> |
      <Link to="/DailySpecials">DailySpecials</Link> |
      <Link to="/FavList">FavList</Link> |
      <Link to="/MealPlanner">MealPlanner</Link> |
    </nav>
  );
}

export default NavBar;
