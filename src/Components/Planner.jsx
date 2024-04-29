//GET =>POST
//SHOULD USE PARAMS
//UNIQUE ID? POST NO NEED. EDIT HAS TO EXTRACT SPECIFICALLY
//CAN MAKE AIRTAABLE WITH DATE OPTIONS?
//SHOULD COMBINE EDIT FORM IN?

import { useState } from "react";

function Planner() {
  const [plan, setPlan] = useState({
    //INITIALISG
    title: "",
    ingredients: "",
    plannedItems: [],
  });

  async function fetchPlanList() {
    const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0",
        },
      });

      if (response.ok) {
        const planned = await response.json();
        console.log("Data from Airtable 203:", planned);
        setPlan({ ...plan, plannedItems: planned.records }); // Set plannedItems state with fetched data
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching 203 data:", error);
    }
  }

  async function addCustom() {
    const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0",
        },
        body: JSON.stringify({
          fields: {
            title: plan.title,
            ingredients: plan.ingredients,
          },
        }),
      });

      if (response.ok) {
        const newItem = await response.json();
        console.log("New item added:", newItem);
        setPlan({ ...plan, title: "", ingredients: "" }); // Clear input fields after adding
        fetchPlanList(); // Reload data after adding
      } else {
        throw new Error("Failed to add custom recipe");
      }
    } catch (error) {
      console.error("Error adding custom recipe:", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value }); //take note of array
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCustom();
  };

  return (
    <div>
      <h1>Ideas for your meal</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Plan Custom Recipe</legend>
          <label>
            Name:
            <input name="title" value={plan.title} onChange={handleChange} />
          </label>
          <br />
          <label>
            Ingredients:
            <input
              name="ingredients"
              value={plan.ingredients}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Custom Recipe</button>
        </fieldset>
      </form>

      <div>
        <h2>Planned Items</h2>
        <ul>
          {plan.plannedItems.map((meal, index) => (
            <li key={index}>
              <strong>{meal.fields.title}</strong>: {meal.fields.ingredients}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Planner;

/* // ## Update -> EditForm

### happy Path

- Click Pen -> EditHolidayPage
  - Link -> pass ID
- EditHolidayPage
  - useParams -> extract ID
  - fetch -> single holiday
  - fill up the controlled form
- User fill in the form and press update button
  - collect all the info user typed in
  - fire PUT -> Server
    - know id -> URL
    - know body
- Response come back
  - Return to MainPage
    - useNavigate

Only if the user does NOT makes a mistake */

// import { Link } from "react-router-dom";

// function NavLink({ to, children }) {
//   return (
//     <Link
//       to={to}
//       className="navbar-link"
//       onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Scale up the link on hover
//       onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset the scale on mouse leave
//     >
//       {children}
//     </Link>
//   );
// }

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <Link to="Home">
//         <div className="navbar-brand">Calories Max</div>
//       </Link>
//       <div className="navbar-links">
//         <NavLink to="/Home">Home</NavLink>

//         <NavLink to="/RecipeList">Recipes</NavLink>

//         <NavLink to="/DailySpecials">Daily Specials</NavLink>

//         <NavLink to="/MealPlanner">Meal Planner</NavLink>

//         <NavLink to="/FavList">
//           <img
//             src="/images/fav.png"
//             alt="Favourites"
//             className="navbar-icon"
//             style={{
//               width: "20px",
//               height: "20px",
//               transition: "transform 0.2s ease", // Add transition for smoother hover effect
//             }}
//           />
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
