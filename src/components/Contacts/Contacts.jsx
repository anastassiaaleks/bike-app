import React from 'react'
import ContactUsForm from '../ContactUsForm/ContactUsForm';
import * as styles from './Contacts.module.css'
import YandexMap from './YandexMap';
import ScrollToTop from '../../ScrollToTop';
const Contacts = () => {
    ScrollToTop()
    return (
        <section className={styles.contactsSection}>
            <h1>Контакты</h1>
            <div className={styles.contacts}>
                <div className={styles.info}>
                    <div className={styles.personalInfo}>
                        <div>
                            <span>Номер телефона</span>
                            <p>999 999 999</p>
                        </div>
                        <div>
                            <span>E-mail</span>
                            <p>info@bikerental.ae</p>
                        </div>
                        <div>
                            <span>Адрес шоурума</span>
                            <p>Страна А, город Б, ул. АААА</p>
                        </div>
                    </div>
                </div>
                <ContactUsForm />
            </div>
            <YandexMap />
        </section>
        
    )
}

export default Contacts