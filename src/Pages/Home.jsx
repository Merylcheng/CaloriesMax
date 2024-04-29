import { Button, Typography, Container, Box } from "@mui/material";
import meal2 from "../images/meal2.jpg"; // Import your image
import { Link } from "react-router-dom";
import "../fonts.css"; // Import the CSS file where you define your fonts

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${meal2})`, // Specify the imported image
        backgroundSize: "cover", // Adjust background size as needed
        backgroundPosition: "center", // Center the background image
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="s"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)", // White with 80% opacity
          padding: "20px", // Add some padding for better readability
          borderRadius: "10px", // Add some border radius for aesthetics
          height: "700px",
          width: "80%",
          display: "flex", // Make container a flex container
          flexDirection: "column", // Arrange children vertically
          justifyContent: "center", // Center items vertically
          alignItems: "center", // Center items horizontally
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
            }} // Example of applying font family and weight
          >
            Calories Max
          </Typography>
          <Typography
            variant="h5" // Change the variant to adjust font size
            gutterBottom
            style={{ marginBottom: "60px", fontFamily: "Roboto" }} // Example of applying font family
          >
            Your Ultimate Destination for Effortless Meal Planning and Calorie
            Tracking!
          </Typography>

          <Link to="/RecipeList">
            <Button variant="contained" color="primary">
              Let's Get Started!
            </Button>
          </Link>
        </div>
      </Container>
    </Box>
  );
}

export default Home;
