import React from 'react'
import { NavLink } from 'react-router-dom'
import * as styles from './ApprovedOrder.module.css'

const ApprovedOrder = () =>{
    const data=JSON.parse(localStorage.getItem('orderList'))
    console.log(data[data.length-1].totalPrice)
    const list=data[data.length-1].bikes.map((elem)=>{
        return (
            <div key={elem.id} className={styles.listItem}>
                <div className={styles.divImg}><img src={elem.src} alt="" /></div>
                <p>{elem.name}</p>
                <span>{elem.price} AED</span>
            </div>
        )
    })
    return (
        <div className={styles.orderApproved}>
            <h1>Ваш заказ успешно оформлен</h1>
            <div className={styles.list}>
                <div className={styles.listCaption}>
                    <p></p>
                    <p>Название велосипедов</p>
                    <p>Стоимость</p>
                </div>
                {list}
            </div>
            <div className={styles.total}>
                <div className={styles.totalCaption}>
                    <p>Доставка</p>
                    <p>Итого</p>
                </div>
                <div className={styles.totalCount}>
                    <p>0 AED</p>
                    <span>{data[data.length-1].total} AED</span>
                </div>
            </div>
            <div className={styles.divBtns}>
                <NavLink to='/personal-account'><div className="divImg"><button className={styles.toPersonalAcc}>В личный кабинет</button></div></NavLink>
                <NavLink to='/rent'><div className="divImg"><button className={styles.backToRent}>Назад на главную</button></div></NavLink>
            </div>
        </div>
    )
}

export default ApprovedOrder