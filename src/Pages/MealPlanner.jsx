//GET =>POST
//SHOULD USE PARAMS
//UNIQUE ID? POST NO NEED. EDIT HAS TO EXTRACT SPECIFICALLY
//CAN MAKE AIRTAABLE WITH DATE OPTIONS?
//SHOULD COMBINE EDIT FORM IN?

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import meal3 from "../images/meal3.jpg";

function MealPlanner() {
  const [plan, setPlan] = useState([]);
  const [newMeal, setNewMeal] = useState({
    date: "",
    meal: "",
    title: "",
    details: "",
  }); //INITIALISE INPUT

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
            date: newMeal.date,
            meal: newMeal.meal,
            title: newMeal.title,
            details: newMeal.details,
          },
        }),
      });

      if (response.ok) {
        const newItem = await response.json();
        console.log("New item added:", newItem);
        setNewMeal({ date: "", meal: "", title: "", details: "" }); // Clear input after adding
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
    <Box
      sx={{
        backgroundImage: `url(${meal3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h1>Schedule for the week</h1>

        <form onSubmit={handleAddCustom}>
          <fieldset>
            <legend>Plan Custom Recipe</legend>
            <label>
              Date:
              <input
                name="date"
                value={newMeal.date}
                placeholder="Monday, Tuesday etc"
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Meal:
              <input
                name="meal"
                value={newMeal.meal}
                placeholder="breakfast, lunch, dinner"
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Name:
              <input
                name="title"
                value={newMeal.title}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Details:
              <input
                name="details"
                value={newMeal.details}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <button type="submit">Add Custom Recipe</button>
          </fieldset>
        </form>

        <h2>Meal List</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Meal</th>
              <th>Title</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plan.map((meal, index) => (
              <tr key={index}>
                <td>{meal.fields.date}</td>
                <td>{meal.fields.meal}</td>
                <td>{meal.fields.title}</td>
                <td>{meal.fields.details}</td>
                <td>
                  <Link to={`/EditCustom/${meal.id}`}>
                    <button>Edit Meal</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}
export default MealPlanner;

// https://api.spoonacular.com/recipes/random?number=1&apiKey=819bdff34c06457996f606323df51af6

// GET => POST
// DO YOUR STORAGE
// LINK TO ${}
