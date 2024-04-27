import { useState, useEffect } from "react";

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

  return (
    <div>
      <h1>Your Favourite Recipes</h1>
      {favourites.map((fav) => (
        <div key={fav.id}>
          <p>{fav.fields.title}</p>
          <img src={fav.fields.image} alt={fav.fields.title} />
          <br />
          <button onClick={() => handleDelete(fav.id)}>Delete Recipe</button>
        </div>
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
