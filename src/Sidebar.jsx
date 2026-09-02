import { useState } from 'react'
import Header from './Header'
import './Sidebar.css'
import Home from './assets/home.png'
import Menu from './assets/menu.png'
import Restaurants from './assets/restaurants.png'
import History from './assets/history.png'
import FranchiseSidebar from './assets/franchise-sidebar.png'
import Contact from './assets/contact.png'
import Logo from './assets/burger-shack-circle-logo.png'



function Sidebar({sidebarOpen}) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const menuItems = [
    { name: 'HOME', image: Home },
    { name: 'MENU', image: Menu },
    { name: 'RESTAURANTS', image: Restaurants },
    { name: 'HISTORY OF BURGER SHACK', image: History },
    { name: 'FRANCHISE', image: FranchiseSidebar },
    { name: 'CONTACT', image: Contact }
  ]

    return (
        <div className={`sidebar-container ${sidebarOpen ? "sidebar-container-visible" : ''}`}>
          <div className="list-container">
            <div className="sidebar-upper-squares">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            <div className="list-and-image">
               <div className="list">
                <ul>
                  {menuItems.map((item, index) => (
                  <li key={item.name} onClick={() => setSelectedItem(index)} onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}>
                   <div className={`logo-container ${selectedItem === index ? 'logo-container-visible' : ""}`}><img src={Logo} alt="Burger Shack Logo" /></div> {item.name}
                  </li>))
                  }
                </ul>
               </div>
               <div className="images">
                <div className="image-container">
                  {hoveredItem !== null && (
                    <img src={menuItems[hoveredItem].image} alt={menuItems[hoveredItem].name}/>)
                  }
                </div>
               </div>
            </div>
            <div className="sidebar-lower-squares">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>
        </div>
    );
}

export default Sidebar