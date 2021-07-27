// import React from 'react'
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import graphSym from "./../images/graphSymbol.JPG";
import starSym from "./../images/star.jpg";

import React, { useState, useEffect} from 'react';
import {Pie} from "react-chartjs-2"

export default function SearchResults({ recipe }) {

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

    return(
        
        recipe.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className='imageGrid'>
                
                <img className='images'  onClick={() => window.open(recipe.recipe.url)} src={recipe.recipe.image} />
                <p className='recipeLabels' key={uuidv4()}>
                    {recipe.recipe.label}
                </p>

                    {/* <p>{recipe.recipe.totalNutrients.FAT.quantity}</p> */}
        
                <div className="icons">
                    <div>
                        <img className="graphIcon" src={graphSym}></img>
                        <div style={{ height: "300px", width: "300px" }}>
                        <Pie data={chartData}/>
                        </div>
                    </div>
                    <div>
                        <img className="graphIcon" src={starSym}></img>
                    </div>
                </div>
            </div>
        )
    )
}
