import React from "react";
import data from './../dataReviews'
import {ReactComponent as Author} from './../../../assets/img/aboutUs/author.svg'
import * as styles from './../AboutUs.module.css'

const Slider = ({sliderId}) => {
    console.log(sliderId)

    const listReviews=data.filter(elem =>elem.id===sliderId-1 || elem.id===sliderId || elem.id===sliderId+1).map((elem) => {
        console.log(elem)
        return (
            <div key={elem.id} className={styles.reviewItem}>
                <p>{elem.text}</p>
                <span><Author className={styles.author} />{elem.author}</span>
            </div>
        )
    })
    return listReviews
}

export default Slider