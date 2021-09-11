import React from 'react'
import Nav from '../Nav/Nav'
import {ReactComponent as Logo} from './../../assets/img/header/logo.svg'
import {ReactComponent as Personal} from './../../assets/img/header/personal-account-not-active.svg'
import * as styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <Logo className={styles.logo}/>
            <Nav />
            <Personal className={styles.personal} />
            <button>Обратная связь</button>
            <p>12:00</p>
        </header>
    )
}

export default Header
