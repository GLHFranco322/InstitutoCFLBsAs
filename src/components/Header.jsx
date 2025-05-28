import React, { useState } from 'react'
import './Header.css'
import Burger from './Burger'

const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false)

    const handleBurgerClick = () => {
        setBurgerActive((prev) => !prev)
    }

    return (
        <header id='main-header'>
            <div className="logo">
                <img src="/icons/logoInstituto.svg" id='logo-instituto' alt="" />
                <h1>Instituto CFL Buenos Aires</h1>
            </div>
            <div className="navs">
                <nav className="nav-header">
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#cursos">Cursos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                    </ul>
                </nav>
                <Burger onClick={handleBurgerClick} isActive={burgerActive} />
            </div>
        </header>
    )
}

export default Header