import React from 'react'
//import {Link} from 'react-router-dom';
import Icon from '../../images/icons/iconoNav.png'
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'

const Nav = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-brand" to='../Inicio/Inicio.js'><i className='iconNav'><img src={ Icon } alt="iconoNavBar"/></i></button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <button className="navbar-brand" to='../News/News.js'>Tabacos</button>
          </li>
          <li className="nav-item">
          <button className="navbar-brand" to='/preentrega1-vasquez/src/components/ItemListContainer/ItemListContainer.js'>Papelillos</button>
          </li>
          <li className="nav-item">
          <button className="navbar-brand" to='/preentrega1-vasquez/src/components/Nosotros/Nosotros.js'>Nosotros</button>
          </li>
        </ul>
      </div>
      <div className='cartWidget'>
                <CartWidget/>
        </div>
  </nav>
  </div>
  )
}

export default Nav