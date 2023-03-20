import React, { } from 'react'
import Cookies from 'universal-cookie';

import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/styles.css'
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function navigateToComponent(component) {
    navigate("/");
    setTimeout(() => {
      const pos = document.getElementById(component);
      pos.scrollIntoView();
    }, 10);

  }
  const cookies = new Cookies();
  return (
    <div className='header'>
      <div id="menu-bar" className="fas fa-bars"></div>
      <div onClick={() => { navigate("/"); window.scrollTo(0, 0) }} className="logo"><span>T</span>ravel</div>
      <nav className="navbar">
        <div onClick={() => { navigate("/"); window.scrollTo(0, 0) }}>home</div>
        {(!cookies.get("user") && !cookies.get("admin")) &&
          <div style={{
            display: "flex",
          }}>
            <div onClick={() => { navigate("/Register"); window.scrollTo(0, 0) }}>register</div>
            <div onClick={() => { navigate("/Login"); window.scrollTo(0, 0) }}>login</div>
          </div>
        }
        {(location.pathname !== '/Register' && location.pathname !== '/Login') && <nav className='navbar'>
          <div onClick={() => { navigateToComponent("book") }}>book</div>
          <div onClick={() => { navigateToComponent("services") }}>services</div>
          <div onClick={() => { navigateToComponent("gallery") }}>gallery</div>
          <div onClick={() => { navigateToComponent("review") }}>review</div>
          <div onClick={() => { navigateToComponent("contact") }}>contact</div>
          {cookies.get("admin") && <div onClick={() => navigate("add")}>Add</div>}
        </nav>}
      </nav>
      {cookies.get("user") &&
        <div style={{
          display: "flex",
          alignItems: "center"
        }}>
          <div className='login-status' >User:</div>
          <div className='user-name'>{cookies.get("user")}</div>
          <button style={{ padding: "0" }} className='btn' onClick={() => {
            cookies.remove("user");
            navigate("/");
          }}>Logout</button>
        </div>}
      {cookies.get("admin") &&
        <div style={{
          display: "flex",
          alignItems: "center",
        }}>
          <div className='login-status'>Admin: {cookies.get("admin")}</div>
          <button style={{ padding: "0" }} className='btn' onClick={() => {
            cookies.remove("admin");
            navigate("/");
          }}>Logout</button>
        </div>}
    </div>
  )
}
