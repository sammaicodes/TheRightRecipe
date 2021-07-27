import React, { useState } from 'react'
import './App.css'
import Axios from "axios"
import Header from './components/Header'
import Main from './components/Main'
import NutrientsChart from './components/NutrientsChart'

function App() {
  const [randomRecipes, setRandomRecipes] = useState([])

  const randomUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=random&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&random=true&field=label&field=image&field=url&field=ingredientLines&field=totalNutrients`

  const getRandom = async () => {
    const result = await Axios.get(randomUrl)
    setRandomRecipes(result.data.hits)
    console.log(result.data.hits)
  }

  return (
    <>
      <Header getRandom={getRandom} />
      <Main randomRecipes={randomRecipes} />
      <NutrientsChart/>

    </>
  )
}

export default App
