import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import meal3 from "../images/meal3.jpg";

// Initialize with default value
function EditCustom() {
  const [meal, setMeal] = useState({
    date: "",
    meal: "",
    title: "",
    details: "",
  });
  const { mealId } = useParams(); //extract parameter from url

  useEffect(() => {
    async function fetchMeal() {
      const url = `https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203/${mealId}`;

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
          const mealData = await response.json();
          console.log("Meal Data:", mealData);
          setMeal(mealData.fields); //storage
        } else {
          throw new Error("Failed to fetch meal");
        }
      } catch (error) {
        console.error("Error fetching meal:", error.message);
      }
    }

    fetchMeal();
  }, [mealId]); //ONLY RE RUN WHEN DEPENDENCY CHANGES

  async function updateMeal() {
    const url = `https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203/${mealId}`;
    try {
      const response = await fetch(url, {
        method: "PATCH", //edit airtable
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0",
        },
        body: JSON.stringify({
          fields: {
            date: meal.date,
            meal: meal.meal,
            title: meal.title,
            details: meal.details,
          },
        }),
      });

      if (response.ok) {
        console.log("Meal updated successfully");
      } else {
        throw new Error("Failed to update meal");
      }
    } catch (error) {
      console.error("Error updating meal:", error.message);
    }
  }
  //update state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({ ...meal, [name]: value });
  };

  //update meal data in airtable
  const handleSubmit = (e) => {
    e.preventDefault();
    updateMeal();
  };

  return (
    //value from setMeal(xxx) bound to meal object, thus input reflect updated value
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
        <h1>Edit Meal</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input name="date" value={meal.date} onChange={handleChange} />
          </label>
          <br />
          <label>
            Meal:
            <input name="meal" value={meal.meal} onChange={handleChange} />
          </label>
          <br />
          <label>
            Name:
            <input name="title" value={meal.title} onChange={handleChange} />
          </label>
          <br />
          <label>
            Ingredients:
            <input
              name="details"
              value={meal.details}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Update Meal</button>
        </form>
      </div>
    </Box>
  );
}

export default EditCustom;

// GET => PATCH
/* // ## Update -> EditForm

### happy Path

- Click Pen -> EditHolidayPage
  - Link -> pass ID
- EditHolidayPage
  - useParams -> extract ID (USE {})
  - fetch -> single holiday
  - fill up the controlled form
- User fill in the form and press update button
  - collect all the info user typed in
  - fire PUT -> Server
    - know id -> URL
    - know body
- Response come back
  - Return to MainPage
    - useNavigate (NOT SURE HOW TO IMPLEMENT)

Only if the user does NOT makes a mistake */
