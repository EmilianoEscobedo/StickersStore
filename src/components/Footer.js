import React from 'react'
import '../assets/css/Footer.css'
import linkedin from '../assets/statics/linkedin.png'
import twitter from '../assets/statics/twitter.png'
import github from '../assets/statics/github.png'

export default function Footer() {
  return (
    <>
      <footer>
        <p className="footer-copyrigth" >Emiiano Escobedo 2022©</p>
        <div className='footer-social'>
          <a target="a_blak" href="https://github.com/EmilianoEscobedo">
            <img src={github} alt="" />
          </a>
          <a target="a_blak" href="https://www.linkedin.com/in/emiliano-escobedo-a6a1b1141/">
            <img src={linkedin} alt="" />
          </a>
          <a target="a_blak" href="https://twitter.com/EmiTheDev_">
            <img src={twitter} alt="" />
          </a>
        </div>
        
      </footer>
    </>
  )
}
