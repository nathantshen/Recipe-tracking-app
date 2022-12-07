import React from "react";
import Recipe from "./Recipe"

function RecipeList(props) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
       {props.recipes.map((recipes, index)=>(
    <Recipe recipes = {recipes} deleteRecipe = {props.deleteRecipe} index = {index}/>
    ))}
        </tbody>
      </table>
    </div>
  );
}

/* <td >
  
  </td> */

export default RecipeList;
