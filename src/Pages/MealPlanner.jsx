import { useState, useEffect } from "react";

function MealPlanner() {
  const [plan, setPlan] = useState("");

  useEffect(() => {
    async function fetchPlanList() {
      const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
          },
        });
        if (response.ok) {
          const planned = await response.json();
          console.log("Data from Airtable 203:", planned);
          setPlan(planned); // Set entire plan object
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching 203 data:", error);
      }
    }
    fetchPlanList();
  }, []);

  async function addCustom() {
    const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
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
        setPlan({}); // Clear input fields after adding
      } else {
        throw new Error("Failed to add custom recipe");
      }
    } catch (error) {
      console.error("Error adding custom recipe:", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value });
  };

  const handleAddCustom = () => {
    addCustom();
  };

  return (
    <div>
      <h1>Ideas for your meal</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddCustom();
        }}
      >
        <fieldset>
          <legend>Plan Custom Recipe</legend>
          <label>
            Name:
            <input
              name="title"
              value={plan.title || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Ingredients:
            <input
              name="ingredients"
              value={plan.ingredients || ""}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Custom Recipe</button>
        </fieldset>
      </form>
      {/* <button onClick={handleAddCustom}>Add Custom Recipe</button> */}
    </div>
  );
}

export default MealPlanner;

// https://api.spoonacular.com/recipes/random?number=1&apiKey=819bdff34c06457996f606323df51af6

// function MealPlanner() {
//   const [plan, setPlan] = useState([]);
//   const [newMealId, setNewMealId] = useState("");
//   const [newMealTitle, setNewMealTitle] = useState("");

//   useEffect(() => {
//     async function fetchPlanList() {
//       const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";

//       try {
//         const response = await fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
//           },
//         });
//         const planned = await response.json();
//         console.log("Data from Airtable 203:", planned);
//         setPlan(planned.records);
//       } catch (error) {
//         console.error("Error fetching 203 data:", error);
//       }
//     }
//     fetchPlanList();
//   }, []);

//   async function addCustom(id, title) {
//     const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
//         },
//         body: JSON.stringify({
//           fields: {
//             id: id,
//             title: title,
//           },
//         }),
//       });

//       const newItem = await response.json();
//       console.log("New item added:", newItem);
//       // After adding the new item, you may want to refresh the plan list
//       setPlan([...plan, newItem]); // Add the new item to the plan list
//     } catch (error) {
//       console.error("Error adding custom recipe:", error);
//     }
//   }

//   const handleAddCustom = () => {
//     if (newMealId && newMealTitle) {
//       addCustom(newMealId, newMealTitle);
//       setNewMealId("");
//       setNewMealTitle("");
//     } else {
//       alert("Please enter ID and title for the custom recipe.");
//     }
//   };

//   return (
//     <div>
//       <h1>Ideas for your meal</h1>

//       {plan.map((meal) => (
//         <div key={meal.id}>
//           <p>{meal.fields.title}</p>
//           <img src={meal.fields.image} alt={meal.fields.title} />
//         </div>
//       ))}

//       <div>
//         <input
//           type="text"
//           placeholder="Enter ID"
//           value={newMealId}
//           onChange={(e) => setNewMealId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter Title"
//           value={newMealTitle}
//           onChange={(e) => setNewMealTitle(e.target.value)}
//         />
//         <button onClick={handleAddCustom}>Add Custom Recipe</button>
//         {/* <button onClick={() => handleDelete(plan.id)}>Edit</button> */}
//       </div>
//     </div>
//   );
// }

// export default MealPlanner;

// import { useState, useEffect } from "react";

// function MealPlanner() {
//   const [plan, setPlan] = useState({ title: "", ingredients: "" });

//   useEffect(() => {
//     async function fetchPlanList() {
//       const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";

//       try {
//         const response = await fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
//           },
//         });
//         if (response.ok) {
//           const planned = await response.json();
//           console.log("Data from Airtable 203:", planned);
//           setPlan(planned); // Set entire plan object
//         } else {
//           throw new Error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error("Error fetching 203 data:", error);
//       }
//     }
//     fetchPlanList();
//   }, []);

//   async function addCustom() {
//     const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
//         },
//         body: JSON.stringify({
//           fields: {
//             title: plan.title,
//             ingredients: plan.ingredients,
//           },
//         }),
//       });

//       if (response.ok) {
//         const newItem = await response.json();
//         console.log("New item added:", newItem);
//         setPlan({ title: "", ingredients: "" }); // Clear input fields after adding
//       } else {
//         throw new Error("Failed to add custom recipe");
//       }
//     } catch (error) {
//       console.error("Error adding custom recipe:", error);
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPlan({ ...plan, [name]: value });
//   };

//   const handleAddCustom = () => {
//     addCustom();
//   };

//   return (
//     <div>
//       <h1>Ideas for your meal</h1>

//       {plan.title && (
//         <div>
//           <p>{plan.title}</p>
//         </div>
//       )}

//       <div>
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter Title"
//           value={plan.title}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="ingredients"
//           placeholder="Enter Ingredients"
//           value={plan.ingredients}
//           onChange={handleChange}
//         />
//         <button onClick={handleAddCustom}>Add Custom Recipe</button>
//       </div>
//     </div>
//   );
// }

// export default MealPlanner;
