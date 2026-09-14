import './Header.css'
import BurgerShackLogo from './assets/burger-shack-logo.png'


function Header({ sidebarOpen, setSidebarOpen }) {
    return (
        <header className="header">
            <div className="left-side">
                <button className="sidebar" onClick={() => setSidebarOpen(!sidebarOpen)}  aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={sidebarOpen}><i className={`fa-solid fa-x ${sidebarOpen ? "fa-x-open" : ""}`}></i><i className={`fa-solid fa-burger ${sidebarOpen ? "fa-burger-closed" : ""}`}></i></button>
                <button className="map-btn">Access the map</button>
            </div>
            <div className="logo"><img src={BurgerShackLogo} alt="Burger Shack Logo"/></div>
            <div className="right-side">
                <button className="delivery">Delivery / Takeaway</button>
            </div>
        </header>
    );
}

export default Header