import React, { useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import CountryMapStyles from './styles';

import UseCountriesNowAPI from '../../helpers/apiUtils';

const CountryMap = ({data}) => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN
    const [countryLongLatData, setCountryLongLatAPIData] = useState([]);
    const { apiData } = UseCountriesNowAPI('https://countriesnow.space/api/v0.1/countries/positions');

    useEffect(() => {
  
        if(apiData) {
            const countriesMap = apiData.data.reduce((map, country) => {
                    map[country.name] = country;
                    return map;
                }, {})

            const countryDataFiltered = data.map((visitedPlace) => {
                return countriesMap[visitedPlace.country]
            })

            console.log('countryDataFiltered', countryDataFiltered)
            setCountryLongLatAPIData(countryDataFiltered)
        }
    }, [data, apiData])

    
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
                countryLongLatData.map(({lat, long}) => (
                   
                    new mapboxgl.Marker()
                    .setLngLat([long, lat])
                    .addTo(map)
                ))
        }
        }, [countryLongLatData]);

    return (
       <CountryMapStyles id="mapContainer" className="map"/>
    )
}

export default CountryMap;
