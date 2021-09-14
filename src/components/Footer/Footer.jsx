import React from 'react'
import * as styles from './Footer.module.css'
import Facebook from './../../assets/img/footer/facebook.svg'
import Insta from './../../assets/img/footer/insta.svg'

const Footer = () => {
    return (
        <footer>
            <section className={styles.footer}>
                <div className={styles.footerTop}>
                    <ul className={styles.ulTop}>
                        <li>Аренда велосипедов</li>
                        <li>Правила</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                        <li>Обратная связь</li>
                    </ul>
                    <ul className={styles.ulBottom}>
                        <li>Правила</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                        <li>Обратная связь</li>
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