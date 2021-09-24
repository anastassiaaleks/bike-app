import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => {
    const mapData = {
        center: [53.902284, 27.561831],
        zoom: 15,
      };
      const coordinate = [53.902284, 27.561831];
    return (
        <YMaps>
            <Map id='map' width='100%' height='300px' defaultState={mapData}>   
                <Placemark geometry={coordinate} /> 
            </Map> 
        </YMaps>
    )
}
export default YandexMap