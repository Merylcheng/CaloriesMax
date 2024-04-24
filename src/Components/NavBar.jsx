import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>NavBar</div>
      <Link to="/Home">Home</Link> |
      <Link to="/RecipeList">Recipes</Link> |
      <Link to="/FavList">FavList</Link>


    </nav>
    
  )
}

export default NavBar