import React, { useContext, useEffect, useRef } from 'react'
import './Rent.css'
import promo from './../../assets/img/rent/promo.png'
import Popup from 'reactjs-popup';
import Data from './../../context'
import ChooseBike from './ChooseBike/ChooseBike';
import ScrollToTop from '../../ScrollToTop';
import { useLocation } from "react-router-dom";

const Rent = () => { 
    const data=useContext(Data)  
    const openBtn=useRef(null)
    const path = useLocation()
    useEffect(()=>{
        data.dataBikeTypes.map((el)=>{
            data.activeType.includes(el.typeName)===true ? data.itemsActiveType.current[el.id].classList.add('activeType') : console.log(el.typeName)
          })
    }, [path])
    useEffect(()=>{
        data.activeType.length>0 ? openBtn.current.classList.remove('displayNone') : openBtn.current.classList.add('displayNone')
    }, [data.activeType])
    ScrollToTop()
    const bikeList=data.dataBikeTypes.map((elem, i)=>{
        return (
            <div key={elem.id} className='bikeTypeItem'>
                <img src={elem.src} alt="" />
                <div className='itemInfo'>
                    <span>{elem.type}</span>
                    <div className='price'>
                        <p>{elem.price} AED</p>
                        <div className='btns'>
                            <Popup
                            trigger={<button className='info'>?</button>}
                            position="bottom center"
                            on={['hover', 'focus']}
                            >
                                <div className='tooltipDiv'>
                                    {elem.addInfo} 
                                </div>
                            </Popup>
                            <button
                             onClick={()=>{data.chooseBikeType(i, elem.typeName)}}
                             className='add'
                             ref={elem => data.itemsActiveType.current[i] = elem} 
                            >+</button>
                        </div>
                    </div>
                </div>
            </div>     
        )
    })
    return (
        <section>
            <div className='promo'>
                <div className='promoTop'>
                    <h1>Аренда велосипедов с доставкой</h1>
                    <img className='gifts' src={promo} alt="" />
                </div>
            </div>
            <div className='bikes'>
                <h3>Тип велосипеда</h3>
                <div className='bikeTypes'>
                    {bikeList}
                </div>
                <p className='find' >Выберите тип</p>
            </div>


            <div ref={openBtn} className='displayNone'>
                <ChooseBike />
            </div>


        </section>
    )
}

export default Rent