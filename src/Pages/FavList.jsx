import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

function FavList() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    async function fetchFavList() {
      const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%202";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`, // Replace YOUR_API_KEY with your Airtable API key
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const airtable = await response.json();
        console.log("Data from Airtable:", airtable);
        setFavourites(airtable.records);
        console.log(airtable.records);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchFavList();
  }, []);

  async function handleDelete(deleteId) {
    const url = `https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%202/${deleteId}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch deleted data");
      }
      const deletedItem = await response.json();
      console.log("Item removed:", deletedItem);
      setFavourites(favourites.filter((fav) => fav.fields.id !== deleteId));
    } catch (error) {
      console.error("Error fetching deleted data:", error);
    }
  }

  const [expandedId, setExpandedId] = useState(null); // State to track expanded card

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? null : id); // Toggle expanded state
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Your Favorite Recipes
      </Typography>
      {favourites.map((fav) => (
        <Card key={fav.id} sx={{ maxWidth: 445, marginBottom: 2 }}>
          <CardMedia
            component="img"
            height="240"
            image={fav.fields.image}
            alt={fav.fields.title}
          />
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {fav.fields.title}
            </Typography>
            <Collapse in={expandedId === fav.id} timeout="auto" unmountOnExit>
              <Typography variant="body2" color="text.secondary">
                {fav.fields.instructions}
              </Typography>
            </Collapse>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleDelete(fav.id)}>
              Delete Recipe
            </Button>
            <Button
              size="small"
              onClick={() => handleExpandClick(fav.id)} // Expand click handler
            >
              {expandedId === fav.id ? "Collapse" : "Expand"} Instructions
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default FavList;

//component>fav item>fetch>return
{
  /* <img src={recipe.image} alt={recipe.title} /> */
}

// [{field: "Name", direction: "desc"}]

// async function handleDelete(deleteId) {
//   const url = `https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%202/${deleteId}`;
//   try {
//   const response = await fetch(url, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
//     },
//   });
//   if (!response.ok) {
//     throw new Error("Failed to fetch deleted data");
//   }
//   const deletedItem = await response.json();
//   console.log("Item removed:", deletedItem);
//   setFavourites(favourites.filter((fav) => fav.fields.id !== deleteId));
//   } catch (error) {
//     console.error("Error fetching deleted data:", error);
//   }
// }
