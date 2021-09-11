import React from 'react'
import { NavLink } from 'react-router-dom'
import * as styles from './Nav.module.css'

const Nav = () =>{
    return (
        <nav className={styles.nav}>
            <NavLink to='/about-us'>О нас</NavLink>
            <NavLink to='/rent'>Аренда</NavLink>
            <NavLink to='/delivery'>Доставка</NavLink>
            <NavLink to='/where-to-ride'>Где кататься</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
        </nav>
    )
}

export default Nav