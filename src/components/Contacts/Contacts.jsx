import React from 'react'
import * as styles from './Contacts.module.css'
const Contacts = () => {
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
                <form >
                    <span>Оставить заявку</span>
                    <p>Остались вопросы? Свяжитесь с нами</p>
                    <div className={styles.inputDiv}>
                        <input type="text" name="name" placeholder="Имя*" required />
                        <input type="tel" name="telephone" placeholder="Номер телефона*" required />
                    </div>
                    <div className={styles.consent}>
                        <input className={styles.check} type="checkbox" />
                        <span>Согласие на обработку персональных данных</span>
                    </div>
                    <button className={styles.btnSend}>Отправить</button>
                </form>
            </div>
            <div className={styles.map}></div>
        </section>
    )
}

export default Contacts