//GET =>POST
//SHOULD USE PARAMS
//UNIQUE ID? POST NO NEED. EDIT HAS TO EXTRACT SPECIFICALLY
//CAN MAKE AIRTAABLE WITH DATE OPTIONS?
//SHOULD COMBINE EDIT FORM IN?

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MealPlanner() {
  const [plan, setPlan] = useState([]);
  const [newMeal, setNewMeal] = useState({ title: "", ingredients: "" }); //INITIALISE INPUT

  useEffect(() => {
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
          setPlan(planned.records); //storage
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching 203 data:", error.message);
      }
    }
    fetchPlanList();
  }, []); // empty dependency array means it runs once on mount

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
            title: newMeal.title,
            ingredients: newMeal.ingredients,
          },
        }),
      });

      if (response.ok) {
        const newItem = await response.json();
        console.log("New item added:", newItem);
        setNewMeal({ title: "", ingredients: "" }); // Clear input after adding
        setPlan((prevPlan) => [...prevPlan, newItem]); // Add new item to the plan list(storage)
      } else {
        throw new Error("Failed to add custom recipe");
      }
    } catch (error) {
      console.error("Error adding custom recipe:", error.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMeal({ ...newMeal, [name]: value }); //UPDATE STATE, SPREAD THEN OVERRIDE
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    addCustom();
  };

  return (
    <div>
      <h1>Schedule for the week</h1>

      <form onSubmit={handleAddCustom}>
        <fieldset>
          <legend>Plan Custom Recipe</legend>
          <label>
            Name:
            <input name="title" value={newMeal.title} onChange={handleChange} />
          </label>
          <br />
          <label>
            Ingredients:
            <input
              name="ingredients"
              value={newMeal.ingredients}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Custom Recipe</button>
        </fieldset>
      </form>

      <h2>Meal List</h2>
      <ul>
        {plan.map((meal, index) => (
          <li key={index}>
            <strong>{meal.fields.title}</strong>: {meal.fields.ingredients}
            <Link to={`/EditCustom/${meal.id}`}>
              <button>Edit Meal</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MealPlanner;

// https://api.spoonacular.com/recipes/random?number=1&apiKey=819bdff34c06457996f606323df51af6

// GET => POST
// DO YOUR STORAGE
// LINK TO ${}
