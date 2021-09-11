import React, { useState } from 'react'
import * as styles from './AboutUs.module.css'
import {ReactComponent as Cycling} from './../../assets/img/aboutUs/about-us-img.svg'
// import {ReactComponent as Author} from './../../assets/img/aboutUs/author.svg'
// import data from './dataReviews'
import Slider from './Slider/Slider'

const AboutUs = () => {
    const [sliderId, setSliderId] = useState(0)

    function clickLeft(){
        sliderId>1 ? setSliderId(sliderId-1) : setSliderId(4)
    }
    function clickRight(){
        sliderId<4 ? setSliderId(sliderId+1) : setSliderId(0)
    }
    
    return (
        <section>
            <div className={styles.aboutUs}>
                <h1>О нас</h1>
                <div className={styles.info}>
                    <div>
                        <p>Мы - дружная команда увлеченных людей, которые собрались вместе, чтобы заниматься любимым делом. И мы хотели бы, чтобы как можно больше людей разделило с нами привязанность к двухколесному другу</p>
                        <p>Постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. </p>
                    </div>
                    <Cycling />
                </div>
            </div>
            <div className={styles.reviews}>
                <h3>Отзывы</h3>
                <div className={styles.listReviews}>
                    <Slider sliderId={sliderId}/>
                    <span onClick={()=>clickLeft()} className={styles.left}>&#5176;</span>
                    <span onClick={()=>clickRight()} className={styles.right}>&#5171;</span>
                </div>
            </div>
        </section>
    )
}

export default AboutUs