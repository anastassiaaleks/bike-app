import React, {useState} from 'react'
import './PersonalAcc.css'
import ScrollToTop from '../../ScrollToTop'

const PersonalAcc = () =>{

    const [localData, setLocalData]=useState(JSON.parse(localStorage.getItem('orderList')) || [])

    const remove=(id)=>{
        const updatelocalData=localData.filter((item)=> item.orderId!==id)
        setLocalData(updatelocalData)
        localStorage.setItem('orderList', JSON.stringify(updatelocalData))
    }
    const listBike=localData.map((elem)=>{
        return (
            <div key={elem.orderId} className="wholeItem">
                <div className="personalItem">
                    <p>Заказ № {elem.orderId}</p>
                    <p>{elem.total} AED</p>
                    <p>В обработке</p>
                </div>
                <div className="hidden">
                    <div className="hiddenCaption">
                        <p>Велосипеды</p>
                        <p>Сумма</p>
                    </div>
                    {elem.bikes.map((e)=>{
                        return (
                            <div key={+e.id+elem.orderId} className="hiddenItem">
                                <p>{e.name} </p>
                                <p>{e.price} AED</p>
                            </div>
                        )
                    })}
                    <button onClick={()=>{remove(elem.orderId)}} className="cancel">Отменить заказ</button>
                </div>
            </div>
        )
    })
    ScrollToTop()
    return (
        <div className="personalDiv">
            <h1>Личный кабинет</h1>
            <div className="personalCaption">
                <p>Номер заказа</p>
                <p>Стоимость</p>
                <p>Статус</p>
            </div>
            <div>
                {listBike}
            </div>
        </div>
    )
}

export default PersonalAcc