import React, { useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import CountryMapStyles from './styles';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWltZWVzaGFkb3c4NCIsImEiOiJjbDE2ajI2Z24wZ2JyM2NzMWF2cHRzdDFnIn0.5g0sMXTYLEDb54qjg5qxrg';

const CountryMap = ({countryAPIData}) => {
    useEffect(() => {

        if (!mapboxgl.supported()) {
            alert('Your browser does not support Mapbox GL');
        } else {
            const map = new mapboxgl.Map({
                container: 'mapContainer',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [9.6255, 50.4181],
                zoom: 1,
                });

                countryAPIData.map(({lat, long}) => (
                    new mapboxgl.Marker()
                    .setLngLat([long, lat])
                    .addTo(map)
                ))
        }
                
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [countryAPIData]);
         
        

    return (
       <CountryMapStyles id="mapContainer" className="map"/>
    )
}

export default CountryMap;
