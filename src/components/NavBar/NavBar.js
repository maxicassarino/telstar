import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav>
                <a className="navbar-brand logo" href="#">TELSTAR</a>
                <ul className="nav-links">
                    <li><a href="#">New in</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Ingresá a tu Cuenta</a></li>
                </ul>
                <div><CartWidget/></div>
            </nav>
        </div>
    )
}

export default NavBar