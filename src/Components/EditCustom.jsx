import { useState } from "react";

function EditRecipe() {
  const [edit, setEdit] = useState("");

  async function handleEdit() {
    const url = `https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203/${edit.id}`;
    try {
      const response = await fetch(url, {
        method: "PATCH", // Use PATCH method to update existing record
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
        },
        body: JSON.stringify({
          fields: {
            id: edit.id,
            title: edit.title, // Update fields as needed
            // Add more fields here if needed
          },
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      const updatedRecord = await response.json();
      console.log("Custom recipe updated:", updatedRecord);
      setEdit({
        // Reset state after successful update
        id: "",
        title: "",
        // Reset other fields if needed
      });
    } catch (error) {
      console.error("Error updating edit data:", error);
    }
  }

  const handleChange = (event) => {
    setEdit({ ...edit, [event.target.name]: event.target.value }); // Update state for the changed input
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit();
        }}
      >
        <fieldset>
          <legend>Edit Custom Recipe</legend>
          <label>
            Name:
            <input name="title" value={edit.title} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Edit Custom Recipe</button>
        </fieldset>
      </form>
    </div>
  );
}

export default EditRecipe;
