import React from 'react'
import './Navbar.css'
import logo from '../../../assets/logo.png'
import House from '../../../assets/house.svg'
import Us from '../../../assets/us.png'
import Email from '../../../assets/email.png'

function Navbar () {
  return (
    <nav className='container-fluid container-nav'>
      <div className='Row container-row container-fluid'>
        <div className="col-6">
          <img src={logo} alt="" className='logo' />
        </div>
        <div className="col-6 links">
          <div >
            <img src={House} alt="logo" className='logo-link' />
            <a href="#">HomePage</a>
          </div>
          <div>
            <img src={Us} alt="logo" className='logo-link' />
            <a href="#">Sobre Nós</a>
          </div>
          <div>
            <img src={Email} alt="logo" className='logo-link' />
            <a href="#">Contatenos</a>
          </div>

        </div>
      </div>


    </nav>
  )
}

export default Navbar
