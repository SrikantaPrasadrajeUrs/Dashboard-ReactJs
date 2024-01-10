import React from 'react'
import Style from "./trending.module.css"
const Trending = () => {
  return (
    <div className={Style.trending}>
        <h1>Trending</h1>
        
        <hr />

        <h4>Jeans <span id={Style.greendot}></span> </h4>
        <h4>Watches <span id={Style.greendot}></span> </h4>
        <h4>Glasses <span id={Style.greendot}></span> </h4>
         <h4>Bags <span id={Style.greendot}></span> </h4>
    </div>
  )
}

export default Trending
