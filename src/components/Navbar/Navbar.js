import {NavLink} from 'react-router-dom';
import IconNav from '../../images/icons/iconoNav.png'
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'

const Nav = () => {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" >
      <NavLink className="navbar-brand-icon" to='/'><i className='iconNav'><img src={ IconNav } alt="iconoNavBar"/></i></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/femenine`}>Femeninos</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/male`}>Masculinos</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/set`}>Sets</NavLink>
          </li>
        </ul>
      </div>
      <div className='cartWidget'>
      <NavLink  to={`/cart`}><CartWidget/></NavLink>
      </div>
      <div>
      <NavLink  to={`/login`}>Ingresar</NavLink>
      <NavLink  to={`/register`}>Registrate!</NavLink>
      </div>
  </nav>
  </div>
  )
}

export default Nav