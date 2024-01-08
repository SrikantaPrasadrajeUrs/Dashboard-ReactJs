import React from 'react'
import Style from "./firstrow.module.css"
const Firstrow = () => {
  return (
    <div className={Style.firstrow}>
        <div className={Style.box}>
            <div className={Style.boxcont}>
                <h2>Total orders</h2><br />
                <h3>4805</h3>
                <p>+2.5% from last week</p>
              
            </div>
           <div className={Style.circle}></div>
        </div>
        <div className={Style.box2}>
            <div className={Style.boxcont}>
                <h2>Total Revenue</h2><br />
                <h3>$ 280.5</h3>
                <p>+6.5% from last week</p><br />
              
            </div>
           <div className={Style.circle2}></div>
        </div>
        <div className={Style.box3}>
            <div className={Style.boxcont}>
                <h2>Bounce rate</h2><br />
                <h3>8.4 k</h3>
                <p>+4.5% from last week</p>
              
            </div>
           <div className={Style.circle3}></div>
        </div>
    </div>
  )
}

export default Firstrow