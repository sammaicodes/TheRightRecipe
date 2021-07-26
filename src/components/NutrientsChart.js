import React, { useState, useEffect} from 'react'

import {Pie} from "react-chartjs-2"
import axios from "axios"

const NutrientsChart = () => {
  const [chartData, setChartData] = useState({})


  const chart = () => {
    setChartData({
      labels: [`Energy [kcal]`, `FAT [g]`, `Carbs [g]`, `Sugar [g]`, `Protein [g]`],
      datasets: [
        {
          label: 'nutrient content',
          data: [2060.537165192573, 151.05105011497682, 53.38915276701316, 22.887731066636007, 138.33597374029884],
          backgroundColor: [
            `rgba(75, 192, 192, 0.6)`,
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
