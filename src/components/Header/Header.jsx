import React from 'react'
import Nav from '../Nav/Nav'
import {ReactComponent as Logo} from './../../assets/img/header/logo.svg'
import {ReactComponent as Personal} from './../../assets/img/header/personal-account-not-active.svg'
import * as styles from './Header.module.css'
import MediaQuery from 'react-responsive'

const Header = () => {
    return (
        <header>
            <Logo className={styles.logo}/>
            <Nav />
            <Personal className={styles.personal} />
            <button className={styles.btnFeedback}>Обратная связь</button>
            <p>12:00</p>
            <MediaQuery maxWidth={1024}>
                {/* <input className={styles.check} type='checkbox' /> */}
                <button className={styles.menu}>
                    <span>&#9776;</span>
                </button>
            </MediaQuery>
        </header>
    )
}

export default Header
