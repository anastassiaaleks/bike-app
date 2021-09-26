import React, { useRef } from 'react'
import * as styles from './ContactUsForm.module.css'

const ContactUsForm = () => {
    const inputName = useRef(null)
    const inputTel = useRef(null)
    const inputCheck = useRef(null)
    function submitForm(e){
        e.preventDefault()
        localStorage.setItem('contactInfo', JSON.stringify([inputName.current.value, inputTel.current.value]))
        inputName.current.value=''
        inputTel.current.value=''
        inputCheck.current.checked=false
        alert('Заявка отправлена. В ближайшее время с Вами свяжутся.')
    }
    return (
        <form onSubmit={submitForm}>
            <span>Оставить заявку</span>
            <p>Остались вопросы? Свяжитесь с нами</p>
            <div className={styles.inputDiv}>
                <input ref={inputName} minLength='2' type="text" name="name" placeholder="Имя*" required />
                <input ref={inputTel} pattern='375[0-9]{7}' minLength='10' type="tel" name="telephone" placeholder="+375-" required />
            </div>
            <div className={styles.consent}>
                <input ref={inputCheck} className={styles.check} type="checkbox" required />
                <span>Согласие на обработку персональных данных</span>
            </div>
            <button className={styles.btnSend}>Отправить</button>
        </form>
    )
}

export default ContactUsForm