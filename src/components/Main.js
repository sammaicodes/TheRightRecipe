/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import SearchResults from './SearchResults';
import NutrientsChart from './components/NutrientsChart'
import Axios from "axios";
import "../App.css"
import { Chart } from 'react-chartjs-2';

function Main({ randomRecipes, chart }) {
  const [query, setQuery] = useState(``)
  const [query2, setQuery2] = useState(``)
  const [query3, setQuery3] = useState(``)
  const [query4, setQuery4] = useState(``)
  const [recipes, setrecipes] = useState([])
  // Have a new state hook here that keeps track of the selected recipe's nutritional facts. 
  // Default is null.Then have some method that sets this state to be eqaul to the infomration that you want to display. 
  // Then send that information down as a prop when this state != null. You would render the NutrientsChart.js conditionally depending on if this is !null. 
  /* eslint-disable max-len */
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}%26${query2}%26${query3}%26${query4}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&field=label&field=image&field=url&field=ingredientLines&field=totalNutrients`
  /* eslint-enable max-len */

  const getRecipe = async () => {
    const result = await Axios.get(url)
    setrecipes(result.data.hits)
    console.log(result.data.hits)
  }

  const onSubmit = e => {
    e.preventDefault()
    getRecipe()
  }

  const onGraphSelect = e => {
    e.preventDefault()
    chart()
  }
    
  // handleDisplayNutition = (activeRecipe) => { set the state of the current active recipe -- set that state to an object containing the entire recipe (which is the parameter) }
    
    // handleHideNutrition = () => { just clears that state to be null }

  return (
    <div>
      <p className="instructions">Enter ingredients on hand or a combination of dish name, ingredients, and/or health label (e.g. vegan): </p>
      <form onSubmit={onSubmit} className="formStyle">
        <input
          type='text'
          placeholder='e.g. Pizza or Basil'
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="inputStyle"
        />
        <input
          type='text'
          placeholder='e.g. Tomato'
          value={query2}
          onChange={e => setQuery2(e.target.value)}
          className="inputStyle"
        />
        <input
          type='text'
          placeholder='e.g. Pineapple'
          value={query3}
          onChange={e => setQuery3(e.target.value)}
          className="inputStyle"
        />
         <input
          type='text'
          placeholder='e.g. Chicken or Vegan'
          value={query4}
          onChange={e => setQuery4(e.target.value)}
          className="inputStyle"
        />

        <input type='submit' value='Search' className='submitStyle'/>
      </form>

{/* if (selectedRecipe != null) { <NutritionChart chartInfo = {currentlyActiveNutirion (the state that we set above)} } */}
      <div className="grid">
        {recipes !== []
                    && recipes.map(recipe => {
                      return (
                        <>
                      <SearchResults recipe={recipe} onGraphSelect={onGraphSelect}/> 
                      <NutrientsChart recipe={recipe} />
                      </>
                      ) 
                      
                      // Send as a prop that method above to set the currently active nutirion, then call it when you click on taht button (and pass the current recipe object as the argument)
                    })}
      </div>
      <div className="grid">
        {randomRecipes !== []
              && randomRecipes.map(recipe => {
                return <SearchResults recipe={recipe}/>
        })}
      </div>
    </div>
  )
}
export default Main
