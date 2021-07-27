import React, { useState, useEffect} from 'react'

import {Pie} from "react-chartjs-2"
import axios from "axios"

const NutrientsChart = ({ recipe }) => {
  const [chartData, setChartData] = useState({})


  const chart = () => {
    setChartData({
      labels: [`Energy [kcal]`, `FAT [g]`, `Carbs [g]`, `Sugar [g]`, `Protein [g]`],
      datasets: [
        {
          label: 'Nutrient Content',
          data: [recipe.ENERC_KCAL.quantity, recipe.FAT.quantity, recipe.CHOCDF.quantity, recipe.SUGAR.quantity, recipe.PROCNT.quantity],
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
      <div style={{height: "500px", width: "500px"}}>
      <Pie data={chartData}/>
    </div>
    </>
  )
}
export default NutrientsChart
