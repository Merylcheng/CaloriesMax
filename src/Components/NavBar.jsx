// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav>
//       <Link to="/Home">Home</Link> |<Link to="/RecipeList">Recipes</Link> |
//       <Link to="/DailySpecials">DailySpecials</Link> |
//       <Link to="/FavList">FavList</Link> |
//       <Link to="/MealPlanner">MealPlanner</Link> |
//       <Link to="/Planner">Custom Planner</Link>
//     </nav>
//   );
// }

// export default NavBar;

import { Link } from "react-router-dom";

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="navbar-link"
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Scale up the link on hover
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset the scale on mouse leave
    >
      {children}
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="Home">
        <div className="navbar-brand">Calories Max</div>
      </Link>
      <div className="navbar-links">
        <NavLink to="/Home">Home</NavLink>

        <NavLink to="/RecipeList">Recipes</NavLink>

        <NavLink to="/DailySpecials">Daily Specials</NavLink>

        <NavLink to="/MealPlanner">Meal Planner</NavLink>

        <NavLink to="/FavList">
          <img
            src="/images/fav.png"
            alt="Favourites"
            className="navbar-icon"
            style={{
              width: "20px",
              height: "20px",
              transition: "transform 0.2s ease", // Add transition for smoother hover effect
            }}
          />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
