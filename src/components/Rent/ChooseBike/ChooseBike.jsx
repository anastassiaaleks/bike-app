import React, { useContext, useEffect } from 'react'
import dataBikes from './dataBikes'
import './ChooseBike.css'
import Data from './../../../context'
import { NavLink, useLocation } from "react-router-dom";

const ChooseBike = () => {
    const data=useContext(Data)
    const path = useLocation()
    useEffect(()=>{
        dataBikes.map((el)=>{
            data.activeBikeItem.includes(el.id)===true ? data.selectedBikes.current[el.id].classList.add('activeBikeItem') : console.log('')
        })
    }, [path])

    const elemsBike=data.activeType.map((elem)=>{
        let elemBike=[]
        dataBikes.map((e)=>{
            return e.type===elem ? elemBike=[...elemBike, e] : null
        })
        return elemBike
    })
    let elemBikelist=elemsBike.map((elem)=>{
        return (
            elem.map((e)=>{
                return(
                    <div key={e.id} className="bikeItem">
                        <div className="bikeItemTop">
                            <span>{e.frameSize}&#34;</span>
                            <p>{e.brand}</p>
                        </div>
                        <div className="imgDiv">
                        <img src={e.src} alt="" />
                        </div>
                        <h3>{e.name}</h3>
                        <span>{e.price} AED/день</span>
                        <button
                            onClick={()=>{data.selecteBikeItem(e.id, elem)}}
                            className='chooseBike'
                            ref={elem => data.selectedBikes.current[e.id] = elem}
                        >Выбрать</button>
                    </div>
                )
            }
        ))               
    })
    
    return (
        <div className='mainDivBike'>
            <div className="bikesList">
                {elemBikelist}
            </div>
            <NavLink to='/order'><button  className='nextStep'>Далее</button></NavLink>
            
        </div>
    )
}

export default ChooseBike