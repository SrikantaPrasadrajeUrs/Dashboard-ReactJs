import React from 'react'
import Style from "./sales.module.css"
import chartImage from './chart.jpg'; 
const SalesOverview = () => {
  return (
    <div className={Style.sales} >
        <h1>Sales Overview</h1>
        <img src={chartImage} alt="" />
    </div>
  )
}

export default SalesOverview