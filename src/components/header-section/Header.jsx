import React, {useState} from 'react'
import './Header.css' 
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler"
import { Link } from 'react-router-dom'



const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="Logo" width={100} />
        </Link>
        

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => ! prev)}>
          <BiMenuAltRight size={30} />
        </div>

        <OutsideClickHandler onOutsideClick={() => {
          setMenuOpened(false)
        }}>
         <div className="flexCenter h-menu" 
          style={getMenuStyles(menuOpened)}>
            <Link to="/residence">Residencies</Link>
            <Link to="/value">Our Value</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Get Started</Link>
            <button className='button'>
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </OutsideClickHandler>

       
      </div>
      
    </section>
  )
}

export default Header