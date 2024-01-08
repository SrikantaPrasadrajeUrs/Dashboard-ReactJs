import React from 'react'
import SideMenu from './Components/SideMenu'
import Navbar from './Components/Navbar'
import "./global.css";
import Firstrow from './Firstrow';
import SalesOverview from './Components/SalesOverview';
import Trending from './Components/Trending';
const App = () => {
  return (
    <div>
        <SideMenu/>
        <Navbar/>
        <Firstrow/>
        <SalesOverview/>
        <Trending/>
    </div>
  )
}

export default App