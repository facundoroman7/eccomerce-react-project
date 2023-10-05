import { Link } from 'react-router-dom'
import '../hoja-de-estilo/NavBar.css'
import imgLogo from '../imagenes/libro.png'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'


const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='logo'>
          <Link to="/">
           <img src={imgLogo} alt="logo de la pagina" className='img-logo' />
          </Link>
        </div>
        <ul className='links'>
          <li>Inicio</li>
          <li>Envios</li>
          <Menu >
            <MenuButton className='link-dropdown'>
            <i className="bi bi-caret-down">libros</i>
            </MenuButton>
            <MenuList>

              <Link to={`/categoria/${"fantasía"}`}>
              <MenuItem color="black">fantasía</MenuItem>
              </Link>

              <Link to={`/categoria/${"desarrollo"}`}> 
              <MenuItem color="black">desarrollo</MenuItem>
              </Link>

              <Link to={`/categoria/${"motivación"}`}>
              <MenuItem color="black">motivacion</MenuItem>
              </Link>  

            </MenuList>
          </Menu>
          <li>Nosotros</li>
        </ul>
        <Link to={"/cart"}>
            <CartWidget />
        </Link>
      </nav>

    </header>
  )
}

export default NavBar