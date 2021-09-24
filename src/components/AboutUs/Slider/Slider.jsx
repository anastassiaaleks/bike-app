import React, { useState } from 'react'
import data from './../dataReviews'
import {ReactComponent as Author} from './../../../assets/img/aboutUs/author.svg'
import * as styles from './../AboutUs.module.css'

const Slider = () => {
    const [sliderId, setSliderId] = useState(0)

    function clickLeft(){
        sliderId>1 ? setSliderId(sliderId-1) : setSliderId(sliderId)
    }
    function clickRight(){
        sliderId<data.length-1-2 ? setSliderId(sliderId+1) : setSliderId(sliderId)
    }
    
    let list=data.filter(elem => elem.id===sliderId || elem.id===sliderId+1 || elem.id===sliderId+2).map((elem, index)=>{
        return (
            <div key={index} className={styles.reviewItem}>
                <p>{elem.text}</p>
                <span><Author className={styles.author} />{elem.author}</span>
            </div>
        )
    })
    return (
        <div className={styles.reviewsDiv}>
            <span onClick={()=>clickLeft()} className={styles.left}>&#9668;</span>
            <div className={styles.listReviews}>
                {list}
            </div>
            <span onClick={()=>clickRight()} className={styles.right}>&#9658;</span> 
        </div>
    )
}

export default Slider