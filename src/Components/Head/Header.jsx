import React, { useState } from "react"
import "./Header.css"
import logo from "../pic/logo.png"
import resume from "../pic/vikrantresume.pdf"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#home'>About</a>
              </li>
              
              <li>
                <a href='#features'>Skills</a>
              </li>
              <li>
                <a href='#portfolio'>Projects</a>
              </li>
                        
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
              <li>
                <a className='home-btn' href={resume} download={resume}>GET RESUME</a>
              </li>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header