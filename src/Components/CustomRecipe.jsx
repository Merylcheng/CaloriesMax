import { useState } from "react";

function CustomRecipe() {
  const [custom, setCustom] = useState("");

  async function handleEdit() {
    const url = `https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203/${custom.id}`;
    try {
      const response = await fetch(url, {
        method: "PATCH", // Use PATCH method to update existing record
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
        },
        body: JSON.stringify({
          fields: {
            id: custom.id,
            title: custom.title, // Update fields as needed
            // Add more fields here if needed
          },
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      const updatedRecord = await response.json();
      console.log("Custom recipe updated:", updatedRecord);
      setCustom({
        // Reset state after successful update
        id: "",
        title: "",
        // Reset other fields if needed
      });
    } catch (error) {
      console.error("Error updating custom data:", error);
    }
  }

  const handleChange = (event) => {
    setCustom({ ...custom, [event.target.name]: event.target.value }); // Update state for the changed input
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
            <input name="title" value={custom.title} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Edit Custom Recipe</button>
        </fieldset>
      </form>
    </div>
  );
}

export default CustomRecipe;

{
  /* {custom.map((custom) => (
            <div key={custom.id}>
              <p>{custom.title}</p>
            </div> */
}

// ## Update -> EditForm

// ### happy Path

// - Click Pen -> EditHolidayPage
//   - Link -> pass ID
// - EditHolidayPage
//   - useParams -> extract ID
//   - fetch -> single holiday
//   - fill up the controlled form
// - User fill in the form and press update button
//   - collect all the info user typed in
//   - fire PUT -> Server
//     - know id -> URL
//     - know body
// - Response come back
//   - Return to MainPage
//     - useNavigate

// Only if the user does NOT makes a mistake

// import { useState } from "react";

// function CustomRecipe() {
//   const [custom, setCustom] = useState("");

//   async function handleEdit() {
//     const url = `https://api.airtable.com/v0/app1DjsWsd6bMZV9r/Table%203/${custom.id}`;
//     try {
//       const response = await fetch(url, {
//         method: "PATCH", // Use PATCH method to update existing record
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer patDqswSJ4ZdyuxUH.9fe043f753120d01ac021eb008b5f3a09a8f6400aa2a16d1e36733632fd3dcc0`,
//         },
//         body: JSON.stringify({
//           fields: {
//             id: custom.id,
//             title: custom.title, // Update fields as needed
//             // Add more fields here if needed
//           },
//         }),
//       });
//       if (!response.ok) {
//         throw new Error("Failed to update data");
//       }
//       const updatedRecord = await response.json();
//       console.log("Custom recipe updated:", updatedRecord);
//       setCustom({
//         // Reset state after successful update
//         id: "",
//         title: "",
//         // Reset other fields if needed
//       });
//     } catch (error) {
//       console.error("Error updating custom data:", error);
//     }
//   }

//   const handleChange = (event) => {
//     setCustom({ ...custom, [event.target.name]: event.target.value }); // Update state for the changed input
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleEdit();
//         }}
//       >
//         <fieldset>
//           <legend>Edit Custom Recipe</legend>
//           <label>
//             Name:
//             <input name="title" value={custom.title} onChange={handleChange} />
//           </label>
//           <br />
//           <button type="submit">Edit Custom Recipe</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default CustomRecipe;
