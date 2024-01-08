import React from 'react'
import Style from "./sidemenu.module.css"
const SideMenu = () => {
  return (
    <div id={Style.sidebar}>
        <div id={Style.logo} align="center">D A S H B O A R D</div>
        <hr />
        <div className={Style.contents}>
            <h2>DashBoard</h2>
            <h2>Default</h2>
            <h2>Alternate</h2>
            <h2>Graphical</h2>
            <h2>Application</h2>
            <h2>Email</h2>
            <h2>ChatBox</h2>
            <h2>File Manager</h2>
            <h2>Contacts</h2>
            <h2>Todo List</h2>
        </div>
    </div>
  )
}

export default SideMenu