import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">GRID</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">New in</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Marcas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Ingresá a tu Cuenta</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar