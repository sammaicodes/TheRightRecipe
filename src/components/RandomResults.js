import React from 'react'
import { v4 as uuidv4 } from "uuid";
import "../App.css"

export default function SearchResults({ recipe }) {
    return (
        recipe.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null
                            && (
                              <div className='recipeTile' onClick={() => window.open(recipe.recipe.url)} >
                                <img className='recipeTile__img' src={recipe.recipe.image} />
                                <p className='recipeTile__name' key={uuidv4()}>
                                  {recipe.recipe.label}
                                </p>
                              </div>
                            )
    )
}
