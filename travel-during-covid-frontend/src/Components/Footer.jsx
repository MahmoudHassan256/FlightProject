import React from 'react'
import '../styles/styles.css'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Footer() {
  const location=useLocation();
  const navigate = useNavigate();
  function  navigateToComponent(component){
    const pos=document.getElementById(component);
    pos.scrollIntoView();
  }    return (

    <section className="footer">

      <div className="box-container">

        <div className="box">
          <h3>about us</h3>
          <p>Random words inert here when needed Random words inert here when needed.</p>
        </div>
        <div className="box">
          <div onClick={() => { navigate("/"); window.scrollTo(0, 0) }}>home</div>
          <div onClick={() => { navigate("/Register"); window.scrollTo(0, 0) }}>register</div>
          <div onClick={() => { navigate("/Login"); window.scrollTo(0, 0) }}>login</div>
          {location.pathname === '/' &&
            <div className='box'>
              <div onClick={() => { navigateToComponent("book") }}>book</div>
              <div onClick={() => { navigateToComponent("services") }}>services</div>
              <div onClick={() => { navigateToComponent("gallery") }}>gallery</div>
              <div onClick={() => { navigateToComponent("review") }}>review</div>
              <div onClick={() => { navigateToComponent("contact") }}>contact</div>
            </div>
          }
          </div>
          <div className="box">
            <h3>follow us</h3>
            <div>facebook</div>
            <div>instagram</div>
            <div>twitter</div>
            <div>linkedin</div>
          </div>
        </div>

        <h1 className="credit"> created by <span> muhammad sarahni and mahmoud hasan </span> | all rights reserved! </h1>

    </section>
  )
}
