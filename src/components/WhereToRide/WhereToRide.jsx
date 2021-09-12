import React from 'react'
import * as styles from './WhereToRide.module.css'
import ride1 from './../../assets/img/whereToRide/ride1.svg'
import ride2 from './../../assets/img/whereToRide/ride2.svg'
import ride3 from './../../assets/img/whereToRide/ride3.svg'
import park1 from './../../assets/img/whereToRide/park1.jpg'
import park2 from './../../assets/img/whereToRide/park2.jpg'
import park3 from './../../assets/img/whereToRide/park3.jpg'
import park4 from './../../assets/img/whereToRide/park4.png'
import map from './../../assets/img/whereToRide/map.jpg'

const WhereToRide = () => {
    return (
        <section>
            <div className={styles.whereToRide}>
                <h1>Где кататься</h1>
                <h3>Веломаршрут в белорусскую Швейцарию</h3>
                <p>Мало кто знает, что и в Беларуси есть своя Швейцария, которая находится на Логойщине, а Витебском направлении. Всему виной перепад высот, однако от этого поездка на велосипеде по этой местности будет еще более живописной, особенно в межсезонье.</p>
                <p>Добравшись из Минска до Логойска, можно отдохнуть и перекусить в местных кафешках, проникнуться колоритом белорусской провинции. В самом же городе будет очень интересно покататься на велосипеде по старинному парку, осмотреть развалины дворца, принадлежавшего когда-то графскому роду Тышкевичей.</p>
                <div className={styles.imgRide}>
                    <img src={ride1} alt={ride1} />
                    <img src={ride2} alt={ride2} />
                    <img src={ride3} alt={ride3} />
                </div>
            </div>
            <div className={styles.routes}>
                <h3>Маршруты</h3>
                <div className={styles.info}>
                    <p>Длина «арт-маршрута» около 30 км, поэтому, если хочется объехать все за раз, то лучше сделать это в выходной. Но можно и в пару заездов. На практике, даже по кусочкам, этот маршрут оказался очень азартным и познавательным. Так как мы решили точно посмотреть все отмеченные на карте граффити, поездка превратилась в игру, где нужно не просто крутить педали, а находиться в поисках нужной стены. Не все граффити находятся в очевидных местах, некоторые придется поискать, но именно это делает поездку более увлекательным.</p>
                    <img src={map} alt={map} />
                </div>
                <h3>Популярные маршруты</h3>
                <div className={styles.parkImg}>
                    <div>
                        <img src={park1} alt={park1} />
                        <p>Лесной маршрут (15 км)</p>
                    </div>
                    <div>
                        <img src={park2} alt={park2} />
                        <p>Семейный маршрут (10 км)</p>
                    </div>
                    <div>
                        <img src={park3} alt={park3} />
                        <p>Городской маршрут (26  км) </p>
                    </div>
                    <div>
                        <img src={park4} alt={park4} />
                        <p>Водный маршрут (15 км)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhereToRide