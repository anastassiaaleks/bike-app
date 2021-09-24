import React from 'react'
import * as styles from './Footer.module.css'
import Facebook from './../../assets/img/footer/facebook.svg'
import Insta from './../../assets/img/footer/insta.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <section className={styles.footer}>
                <div className={styles.footerTop}>
                    <ul className={styles.ulTop}>
                        <NavLink to='/rent'>Аренда велосипедов</NavLink>
                        <NavLink to='/rent'><li>Алюминий</li></NavLink>
                        <NavLink to='/rent'><li>Карбон</li></NavLink>
                        <NavLink to='/rent'><li>Горные/городские</li></NavLink>
                        <NavLink to='/rent'><li>Городские эконом</li></NavLink>
                    </ul>
                    <ul className={styles.ulBottom}>
                        <NavLink to='/rules'>Правила</NavLink>
                        <NavLink to='/about-us'>Отзывы</NavLink>
                        <NavLink to='/contacts'>Контакты</NavLink>
                        <NavLink to='/contacts'>Обратная связь</NavLink>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    <p>Политика конфиденциальности</p> 
                    <div>
                        <span>&#169; BikePark, 2021</span> 
                        <div className={styles.social}>
                            <img src={Facebook} alt="" />
                            <img src={Insta} alt="" />
                        </div>  
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer