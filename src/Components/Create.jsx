import { useState, useEffect } from "react";

function Create() {
  const [add, setAdd] = useState([]);

  const displayfield ={
    fields: {
        'name': fish
    }
  }

  useEffect(() => {
    async function addList() {
      const url = "https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%202";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`, // Replace YOUR_API_KEY with your Airtable API key
          },
          body: JSON.stringify(displayfield)
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const airtable = await response.json();
        console.log("Data from Airtable:", airtable);
        setAdd(airtable.records);
        console.log(airtable.records);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    addList();
  }, []);

  const handleAdd =

  return (
    <div>
      Create
      <button onClick={handleAdd}>Add to Planner</button>
    </div>
  );
}

export default Create;
