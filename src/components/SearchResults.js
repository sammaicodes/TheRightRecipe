import React  from 'react'
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import graphSym from "./../images/graphSymbol.JPG"



export default function SearchResults({ recipe }) {
    return(
        recipe.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className='imageGrid'  >
                
                <img className='images'  onClick={() => window.open(recipe.recipe.url)} src={recipe.recipe.image} />
                <p className='recipeLabels' key={uuidv4()}>
                    {recipe.recipe.label}
                </p>
                <img className="graphIcon" src={graphSym}></img>
            </div>
        )
    )
}
