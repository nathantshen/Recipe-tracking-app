import React, { useState } from "react";

function RecipeCreate(props) {
 const [name , setName] = useState("")
 const [cuisine , setCuisine] = useState("")
 const [photo , setPhoto] = useState("")
 const [ingredients , setIngredients] = useState("")
 const [preparation , setPreparation] = useState("")
 const submitForm=(e)=>{
   e.preventDefault();
   /*console.log(name , cuisine , photo , ingredients , preparation)*/
   const recipe = {
     name,
     cuisine,
     photo,
     ingredients,
     preparation
   };
   props.addRecipe(recipe);
   setName("")
   setCuisine("")
   setPhoto("")
   setIngredients("")
   setPreparation("")
  }
  const changeName=(e)=>{
    setName(e.target.value)
  }
  const changeCuisine=(e)=>{
    setCuisine(e.target.value)
  }
  const changePhoto=(e)=>{
    setPhoto(e.target.value)
  }
  const changeIngredients=(e)=>{
    setIngredients(e.target.value)
  }
  const changePreparation=(e)=>{
    setPreparation(e.target.value)
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={submitForm}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" value={name} onChange={changeName}/></td>
            <td><input name="cuisine" value={cuisine} onChange={changeCuisine}/></td>
            <td><input name="photo" value={photo} onChange={changePhoto}/></td>
            <td><textarea name="ingredients" className="content_td" value={ingredients} onChange={changeIngredients}/></td>
            <td><textarea name="preparation" className="content_td" value={preparation} onChange={changePreparation}/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
