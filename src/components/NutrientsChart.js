import React, { useState, useEffect} from 'react'

import {Pie} from "react-chartjs-2"

const NutrientsChart = ({ recipe }) => { 

  const [chartData, setChartData] = useState({})


  const chart = () => {
    setChartData({
      labels: [`Energy [kcal]`, `FAT [g]`, `Carbs [g]`, `Sugar [g]`, `Protein [g]`],
      datasets: [
        {
          label: 'Nutrient Content',
          data: [recipe.recipe.totalNutrients.ENERC_KCAL.quantity, recipe.recipe.totalNutrients.FAT.quantity, recipe.recipe.totalNutrients.CHOCDF.quantity, recipe.recipe.totalNutrients.SUGAR.quantity, recipe.recipe.totalNutrients.PROCNT.quantity], // props.recipe.ENERC_KCAL.quantity
          backgroundColor: [
            `#adcace`,
            `#FF0000`,
            `#FFFF00`,
            `#adca00`,
            `#8c7dce`
          ],
          borderWidth: 4
        }
      ] 
    })
  }

  useEffect(() => {
    chart()
  }, [])

//   const onGraphSelect = e => {
//     e.preventDefault()
//     chart()
//   }


  return (
    <>
      <div style={{ height: "100px", width: "100px" }}>
      <Pie data={chartData}/>
        {/* z-index of something highter than 0, and then center it somehow, and position absolute */}
        {/* make a close out x-button that takes that other method to clear that state */}
    </div>
    </>
  )
}
export default NutrientsChart
