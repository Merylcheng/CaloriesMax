import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function RecipeDetails () {
    const [instructions, setInstructions ] = useState([]);
    const { recipeId } = useParams();

    useEffect(()=>{
    async function getInstructions() {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=819bdff34c06457996f606323df51af6`);
        const data = await response.json();
        console.log('Data from API:', data);
        setInstructions(data.recipes); // Accessing recipes array from the data object
        console.log(data.recipes)
    } catch (error) {
        console.error('Error fetching Instructions:', error);
      }
      getInstructions();
    }
    }, [recipeId])

    return (
        <div>
        <h1>Instructions - </h1>
        {/* {instructions && instructions.length > 0 ? ( */}
            {instructions.map((instruction, index) => (
                <div key={index}>
                    <p>
                        {instruction.name}
                        {instruction.step}
                   
                      
                    </p>
                </div>
            ))}
     
    </div>
);
}
    
    export default RecipeDetails
    // {instruction.steps.map((step, stepIndex) => (
    //     <li key={stepIndex}>{step.step}</li>