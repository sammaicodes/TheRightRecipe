import React, { useState, useEffect} from 'react'

import {Pie} from "react-chartjs-2"

const NutrientsChart = ({ recipe }) => { // props instead

  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: [`Energy [kcal]`, `FAT [g]`, `Carbs [g]`, `Sugar [g]`, `Protein [g]`],
      datasets: [
        {
          label: 'Nutrient Content',
          data: [recipe.recipe.totalNutrients.ENERC_KCAL.quantity, recipe.recipe.totalNutrients.FAT.quantity, recipe.recipe.totalNutrients.CHOCDF.quantity, recipe.recipe.totalNutrients.SUGAR.quantity, recipe.recipe.totalNutrients.PROCNT.quantity], // props.recipe.ENERC_KCAL.quantity
          backgroundColor: [
            `rgba(75, 192, 192, 0.6)`,
            `	#FF0000`,
            `	#FFFF00`
          ],
          borderWidth: 4
        }
      ] 
    })
  }

  useEffect(() => {
    chart()
  }, [])


  return (
    <>
      <div style={{ height: "100px", width: "100px" }}>
        {/* z-index of something highter than 0, and then center it somehow, and position absolute */}
        {/* make a close out x-button that takes that other method to clear that state */}
      <Pie data={chartData}/>
    </div>
    </>
  )
}
export default NutrientsChart
