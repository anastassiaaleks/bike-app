import React, {useContext} from 'react'
import './Order.css'
import backTo from './../../../assets/img/order/backTo.png'
import orderBike from './../../../assets/img/order/orderBike.png'
import {NavLink} from "react-router-dom";
import Data from './../../../context'
import ScrollToTop from '../../../ScrollToTop';

const Order = () =>{
    const data=useContext(Data)
    ScrollToTop()

    const list = data.dataBikes.map((elem)=>{
        if (data.activeBikeItem.includes(elem.id)){
            return (
                <div key={elem.id} className="orderItem">
                    <div><img src={orderBike} alt="" /></div>
                    <p>{elem.name}</p>
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <span>{elem.price} AED</span>
                </div>
            )
        }
    })
    return (
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
                            <p>360 AED</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order