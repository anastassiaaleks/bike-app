import React from 'react'
import * as styles from './AboutUs.module.css'
import {ReactComponent as Cycling} from './../../assets/img/aboutUs/about-us-img.svg'
// import {ReactComponent as Author} from './../../assets/img/aboutUs/author.svg'
// import data from './dataReviews'
import Slider from './Slider/Slider'

const AboutUs = () => {
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
                <Slider />
            </div>
        </section>
    )
}

export default AboutUs