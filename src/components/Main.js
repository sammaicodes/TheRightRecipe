/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

import Axios from "axios"
import "../App.css"
import { v4 as uuidv4 } from "uuid"

function Main({ randomRecipes }) {
  const [query, setQuery] = useState(``)
  const [query2, setQuery2] = useState(``)
  const [recipes, setrecipes] = useState([])
  /* eslint-disable max-len */
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}%26${query2}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&field=label&field=image&field=url&field=ingredientLines&field=totalNutrients`
  /* eslint-enable max-len */

  const getRecipe = async () => {
    const result = await Axios.get(url)
    setrecipes(result.data.hits)
    console.log(result)
  }

  const onSubmit = e => {
    e.preventDefault()
    getRecipe()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Ingredient 1'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <input
          type='text'
          placeholder='Ingredient 2'
          value={query2}
          onChange={e => setQuery2(e.target.value)}
        />

        <input type='submit' value='Search' />
      </form>

      <div>
        {recipes !== []
                    && recipes.map(recipe => (
                      recipe.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null
                            && (
                              <div
                                className='recipeTile'
                                onClick={() => window.open(recipe.recipe.url)}
                              >
                                <img className='recipeTile__img' src={recipe.recipe.image} />
                                <p className='recipeTile__name' key={uuidv4()}>
                                  {recipe.recipe.label}
                                </p>
                              </div>
                            )
                    ))}
      </div>
      <div>
        {randomRecipes !== []
              && randomRecipes.map(recipe => (
                recipe.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null
                      && (
                        <div onClick={() => window.open(recipe.recipe.url)}>
                          <img src={recipe.recipe.image} />
                          <p key={uuidv4()}>
                            {recipe.recipe.label}
                          </p>
                        </div>
                      )
              ))}
      </div>
    </div>
  )
}
export default Main
