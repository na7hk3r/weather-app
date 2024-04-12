import React from 'react'
import './Footer.css'

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

  return (
    <div className='footer'>
        <p>&copy; {year} All rights reserved. Coded by <a href="https://smcurbelo.com/" target="_blank">S.M. Curbelo</a>`</p>
        <ul>
            <li><a href="https://github.com/na7hk3r/" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/smcurbelo/" target="_blank">LinkedIn</a></li>
        </ul>
    </div>
  )
}

export default Footer