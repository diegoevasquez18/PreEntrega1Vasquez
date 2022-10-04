import React from 'react'
import {Link} from 'react-router-dom';
import Icon from '../../images/icons/iconoNav.png'
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'

const abrirCarro = () => {
  console.log('click')
}

const Nav = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" >
      <Link className="navbar-brand-icon" to='/'><i className='iconNav'><img src={ Icon } alt="iconoNavBar"/></i></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="navbar-brand" to={`/category/femeninos`}>Femeninos</Link>
          </li>
          <li className="nav-item">
          <Link className="navbar-brand" to={`/category/masculinos`}>Masculinos</Link>
          </li>
          <li className="nav-item">
          <Link className="navbar-brand" to={`/category/set`}>Sets</Link>
          </li>
        </ul>
      </div>
      <div className='cartWidget' onClick={abrirCarro}>
                <CartWidget/>
        </div>
  </nav>
  </div>
  )
}

export default Nav