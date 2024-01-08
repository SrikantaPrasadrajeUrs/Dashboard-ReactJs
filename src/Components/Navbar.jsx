import React from 'react'
import Style from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={Style.navbar}>
        <input type="text" name="" placeholder='Search'/>
        <div id={Style.profile}>
            <img src="" alt="Image" />
          <div id={Style.profcont}><h4>Profile Name</h4>
            <h4>Designation</h4></div>
        </div>
        </div>
  )
}

export default Navbar