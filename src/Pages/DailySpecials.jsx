import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import meal3 from "../images/meal3.jpg";

function DailySpecials() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMealRandom() {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?number=3&apiKey=a8c5cbd02cdf4263b070a05a48cc77b3"
        );
        const data = await response.json();
        console.log("Data from API:", data);
        setMeals(data.recipes); // Accessing recipes array from the data object
      } catch (error) {
        console.error("Error fetching Random Meal:", error);
      }
    }
    getMealRandom();
  }, []);

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
        <h2>Ideas for your meal</h2>
        <ImageList sx={{ width: 1000, height: 700 }}>
          {meals.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <ImageListItem key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <ImageListItemBar title={recipe.title} />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </div>
    </Box>
  );
}

export default DailySpecials;
