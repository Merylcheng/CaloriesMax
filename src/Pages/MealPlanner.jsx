import { useState, useEffect } from "react";

function MealPlanner() {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    async function fetchPlanList() {
      const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203";

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
        const planned = await response.json();
        console.log("Data from Airtable:", planned);
        setPlan(planned.records);
        console.log(planned.records);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchPlanList();
  }, []);

  return (
    <div>
      <h1>Ideas for your meal</h1>

      {plan.map((plan) => (
        <div key={plan.id}>
          <p>{plan.title}</p>
          <img src={plan.image} alt={plan.title} />
        </div>
      ))}
    </div>
  );
}

export default MealPlanner;

// https://api.spoonacular.com/recipes/random?number=1&apiKey=819bdff34c06457996f606323df51af6
