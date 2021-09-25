import React, {useContext, useRef} from 'react'
import './Order.css'
import backTo from './../../assets/img/order/backTo.png'
import orderBike from './../../assets/img/order/orderBike.png'
import {NavLink} from "react-router-dom";
import Data from '../../context'
import ScrollToTop from '../../ScrollToTop';

const Order = () =>{
    const data = useContext(Data)

    const orderName = useRef(null)
    const orderTel = useRef(null)
    const orderAddress = useRef(null)
    const orderBack = useRef(null)

    function addHelmet(elem) {
        return data.dataBikes[elem.id].helmet=!elem.helmet
    }
    function addLantern(elem) {
        return data.dataBikes[elem.id].lantern=!elem.lantern
    }
    function addLock(elem) {
        return data.dataBikes[elem.id].lock=!elem.lock
    }
    let totalPrice=0
    const list = data.dataBikes.map((elem) => {
        if (data.activeBikeItem.includes(elem.id)){
            totalPrice+=elem.price
            return (
                <div key={elem.id} className="orderItem">
                    <div><img src={orderBike} alt="" /></div>
                    <p>{elem.name}</p>
                    <input onChange={()=>{addHelmet(elem)}} type="checkbox" />
                    <input onChange={()=>{addLantern(elem)}} type="checkbox" />
                    <input onChange={()=>{addLock(elem)}} type="checkbox" />
                    <span>{elem.price} AED</span>
                </div>
            )
        }
    })
    function submitOrderForm(e) {
        e.preventDefault()
        let listLocal=JSON.parse(localStorage.getItem('orderList')) || []
        let order={
            orderId: Math.round(Math.random()*100000),
            bikes: data.dataBikes.filter(elem=>data.activeBikeItem.includes(elem.id)),
            customer: orderName.current.value,
            customerTel: orderTel.current.value,
            customerAdress: orderAddress.current.value,
            customerBack: orderBack.current.value || '',
            total: totalPrice
        }
        localStorage.setItem('orderList', JSON.stringify([...listLocal, order]))
        console.log(window.location.pathname)
        window.location.pathname='/approved'
    }
    ScrollToTop()
    return (
        <div>
            <div className="order">
                <h1>Заявка на аренду велосипедов</h1>
                <div className="caption">
                    <p></p>
                    <p>Название велосипедов</p>
                    <p>Шлем</p>
                    <p>Фонарик</p>
                    <p>Замок</p>
                    <p>Стоимость</p>
                </div>
                <div className="orderDiv">
                    {list}
                    <div className="orderBottom">
                        <NavLink to='/rent'><div className="divImg"><img src={backTo} alt="" /></div></NavLink>
                        <div className="totalDiv">
                            <div className="total">
                                <p>Доставка</p>
                                <p>Итого</p>
                            </div>
                            <div className="totalCount">
                                <p>0 AED</p>
                                <p>{totalPrice} AED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="orderForm">
                <form onSubmit={submitOrderForm}>
                    <div className="formDiv">
                        <div className="contactInfo">
                            <h4>Контактные данные</h4>
                            <input ref={orderName} type="text" required placeholder="Имя*" />
                            <input ref={orderTel} type="tel" required placeholder="Номер телефона*" />
                            <h4>Информация о доставке</h4>
                            <input ref={orderAddress} type="text" required placeholder="Адрес*" />
                            <h4>Возврат велосипеда</h4>
                            <input ref={orderBack} type="text" placeholder="Возврат по адресу" />
                        </div>
                        <div className="contactsRules">
                            <h4>Возвращение велосипеда</h4>
                            <p>На возвращение велосипеда даётся 1 час. 
                                Задача организации, в особенности же сложившаяся структура организации позволяет выполнять
                                Важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.</p>
                            <h4>Выбор адреса для возврата</h4>
                            <p>Вы также можете ввести адрес другого места, где мы заберем у вас велосипед. Задача организации, в особенности же сложившаяся структура организации позволяет выполнять
                                Важные задания</p>
                        </div>
                    </div>
                    <button className="bookBtn">Забронировать</button>
                </form>
            </div>
        </div>
    )
}

export default Order