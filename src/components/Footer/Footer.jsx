import React from 'react'
import * as styles from './Footer.module.css'
import {ReactComponent as Facebook} from './../../assets/img/footer/facebook.svg'
import {ReactComponent as Insta} from './../../assets/img/footer/insta.svg'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerMain}>
                <div className={styles.footerTopMiddle}>
                    <div className={styles.footerTop}>
                        <p>Аренда велосипедов</p>
                        <ul className={styles.footerTopUl}>
                            <li>Правила</li>
                            <li>Отзывы</li>
                            <li>Контакты</li>
                            <li>Обратная связь</li>
                        </ul>
                    </div>
                    <ul className={styles.footerMiddleUl}>
                        <li>Алюминий</li>
                        <li>Карбон</li>
                        <li>Горные/городские</li>
                        <li>Городские эконом</li>
                    </ul>
                </div>
                <div className={styles.footerBottom}>
                    <p>Политика конфиденциальности</p>
                    <div className={styles.footerBottomP}>
                        <p>&#169; BikePark, 2021</p>                
                        <div className={styles.social}>
                            <Facebook className={styles.facebook} />
                            <Insta className={styles.insta} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer