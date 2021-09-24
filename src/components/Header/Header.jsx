import React from 'react'
import Nav from '../Nav/Nav'
import {ReactComponent as Logo} from './../../assets/img/header/logo.svg'
import {ReactComponent as Personal} from './../../assets/img/header/personal-account-not-active.svg'
import * as styles from './Header.module.css'
import './burgerStyle.css'
import MediaQuery from 'react-responsive'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <NavLink to='/about-us'><Logo className={styles.logo}/></NavLink>
            <Nav />
            <NavLink to='/personal-account'><Personal className={styles.personal} /></NavLink>
            <NavLink to='/contacts'><button className={styles.btnFeedback}>Обратная связь</button></NavLink>
            <NavLink to='/about-us'><p>12:00</p></NavLink>
        
            <MediaQuery maxWidth={1024}> 
                <div className="hamburgerMenu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                    </label>
                
                    <ul className="menu__box">
                        <NavLink className='menu__item' to='/about-us'>О нас</NavLink>
                        <NavLink className='menu__item' to='/rent'>Аренда</NavLink>
                        <NavLink className='menu__item' to='/delivery'>Доставка</NavLink>
                        <NavLink className='menu__item' to='/where-to-ride'>Где кататься</NavLink>
                        <NavLink className='menu__item' to='/contacts'>Контакты</NavLink>
                    </ul>
                </div>
            </MediaQuery>
        </header>
    )
}

export default Header
