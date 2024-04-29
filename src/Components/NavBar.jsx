// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav
//       style={{
//         backgroundColor: "rgba(0, 0, 0, 0.7)",
//         color: "white",
//         padding: "10px",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <h1 style={{ margin: "0", marginRight: "auto", fontSize: "1.5em" }}>
//         Calories Max
//       </h1>
//       <div>
//         <Link
//           to="/Home"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             marginRight: "10px",
//             fontSize: "1.2em",
//           }}
//         >
//           Home
//         </Link>
//         <Link
//           to="/RecipeList"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             marginRight: "10px",
//             fontSize: "1.2em",
//           }}
//         >
//           Recipes
//         </Link>
//         <Link
//           to="/DailySpecials"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             marginRight: "10px",
//             fontSize: "1.2em",
//           }}
//         >
//           Daily Specials
//         </Link>

//         <Link
//           to="/MealPlanner"
//           style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
//         >
//           Meal Planner
//         </Link>
//         <Link
//           to="/FavList"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             marginRight: "10px",
//             fontSize: "1.2em",
//           }}
//         >
//           Favourite List
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

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
