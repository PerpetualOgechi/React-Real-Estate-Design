import React from 'react'
import './GetStarted.css'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Getstarted With Homyz</span>
          <span className='secondaryText'>
            Subscribe and find super attractive price quotes from<br/>
            Find your residence soon
          </span>
          <button className="button">
            <Link to="/login">Get Started</Link>
          </button>
          
        </div>
      </div>
    </section>
  )
}

export default GetStarted