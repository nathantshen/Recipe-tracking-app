import React, { useState } from "react";

const Recipe =(props)=>{
return <tr>
  <td>{props.recipes.name}</td>
  <td>{props.recipes.cuisine}</td>
  <td><img src={props.recipes.photo}/></td>
  <td className="content_td">><p>{(props.recipes.ingredients)}</p></td>
  <td className="content_td"><p>{(props.recipes.preparation)}</p></td>
  <td>
    <button name="delete" onClick={()=>props.deleteRecipe(props.index)}>Delete</button>
  </td>
      </tr> 
}

export default Recipe