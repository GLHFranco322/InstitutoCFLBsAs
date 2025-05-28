import React from 'react'
import './Burger.css'

const Burger = ({ onClick, isActive }) => {
    return (
        <article
            className={`burger${isActive ? ' active' : ''}`}
            onClick={onClick}
            tabIndex={0}
            role="button"
            aria-pressed={isActive}
        >
            <span style={{ opacity: 0 }}></span>
            <span></span>
            <span></span>
        </article>
    )
}

export default Burger