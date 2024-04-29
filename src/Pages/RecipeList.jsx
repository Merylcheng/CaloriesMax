import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Container, Box } from "@mui/material";
import meal3 from "../images/meal3.jpg";

function RecipeList() {
  const [recipeList, setRecipeList] = useState([]);
  const [calories, setCalories] = useState(2000);

  const handleInputChange = (event) => {
    setCalories(event.target.value); // Update state on input change
  };

  async function getRecipeList() {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?minCalories=100&maxCalories=${
          calories || 2000
        }&number=2&apiKey=d57dc75de23047b1ba9591e14fc72af1&sort=calories`
      );
      const data = await response.json();
      console.log("Data from API:", data);
      setRecipeList(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

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
      <Container
        maxWidth="s"
        sx={{
          padding: "20px",
          borderRadius: "10px",
          height: "800px",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="welcome-message" style={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            style={{
              marginBottom: "30px",
              fontFamily: "Playfair Display",
              fontWeight: 700,
            }}
          >
            Calories Max
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginBottom: "60px", fontFamily: "Roboto" }}
          >
            Input your calories per meal and find a delicious meal
          </Typography>

          <input
            type="number"
            placeholder="Calories (e.g 500)"
            onChange={handleInputChange}
            style={{ width: "300px", padding: "10px", fontSize: "16px" }}
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={getRecipeList}
            style={{ marginBottom: "20px" }}
          >
            Get Meal
          </Button>

          {recipeList.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div key={recipe.id}>
                <p>{recipe.title}</p>
                <p>Calories: {recipe.nutrition?.nutrients[0]?.amount} kcal</p>
                <img src={recipe.image} alt={recipe.title} />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Box>
  );
}

export default RecipeList;
