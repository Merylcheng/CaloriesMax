import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function RecipeDetails() {
  const [recipe, setRecipe] = useState(); //state variable holds details of recipe fetched from api

  const { recipeId } = useParams(); //fetch uniqiue id from api url
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=083d38774aef44bbbb8eee5cf234fc95`
        );
        const data = await response.json();
        console.log("Data from API:", data); // [{steps: [{step: xxx}]}] // data [0].steps
        setRecipe(data); //storage
      } catch (error) {
        console.error("Error fetching recipe details", error);
      }
    }
    getDetails();
  }, [recipeId]);

  async function addList() {
    const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%202";
    try {
      const response = await fetch(url, {
        method: "POST", //add things to airtable
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`, // Replace YOUR_API_KEY with your Airtable API key
        },
        body: JSON.stringify({
          //sent this to airtable
          fields: {
            id: recipeId,
            title: recipe.title,
            image: recipe.image,
            instructions: recipe.instructions,
          },
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const newItem = await response.json();
      console.log("New item added:", newItem);
    } catch (error) {
      console.error("Error fetching list data:", error);
    }
  }

  const handleClick = () => {
    console.log("buttonClick");
    addList();
    setSavedMessage("Recipe saved to favorites!");
    // Clear the message after a few seconds
    setTimeout(() => {
      setSavedMessage("");
    }, 5000);
  };
  // && is conditional rendering
  return (
    <div>
      <Container
        fixed
        style={{
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          height: "130vh",
        }}
      >
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}

        <h2>{recipe?.title}</h2>
        {recipe?.image && <img src={recipe.image} alt="Recipe" />}
        <h2>Instructions </h2>
        {recipe?.analyzedInstructions[0].steps.map((recipe, index) => (
          <div key={index}>
            <div>
              <p>
                Step {recipe.number}. {recipe.step}
              </p>
            </div>
          </div>
        ))}
        <h2>Ingredients</h2>
        {recipe?.extendedIngredients.map((recipe, index) => (
          <div key={index}>
            <ul>
              <li> {recipe.original}</li>
            </ul>
          </div>
        ))}
        {savedMessage && <h3>{savedMessage}</h3>}
        <button onClick={handleClick}>Add to Favourite</button>
      </Container>
    </div>
  );
}

export default RecipeDetails;
