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
            console.log('apiData', apiData.data);
            const countriesMap = apiData.data.reduce((map, country) => {
                    map[country.name] = country;
                    return map;
                }, {})

            const countryDataFiltered = data.map((visitedPlace) => {
                if(visitedPlace.country === 'Venezuela') {
                    return countriesMap['Venezuela, Bolivarian Republic of'];
                } else if(visitedPlace.country === 'Bolivia') {
                    return countriesMap['Bolivia, Plurinational State of Bolivia'];
                } else if(visitedPlace.country === 'Brunei') {
                    return countriesMap['Brunei Darussalam'];
                } else if(visitedPlace.country === 'Congo') {
                    return countriesMap['Congo, The Democratic Republic of the'];
                } else if(visitedPlace.country === 'Congo') {
                    return countriesMap['Congo, The Democratic Republic of the'];
                } else {
                    return countriesMap[visitedPlace.country]
                }
                
            })

            console.log('countryDataFiltered', countryDataFiltered)
            setCountryLongLatAPIData(countryDataFiltered)
        }
    }, [data, apiData])

    
    useEffect(() => {
        if (!mapboxgl.supported()) {
            alert('Your browser does not support Mapbox GL');
        } else {
            if(countryLongLatData.length > 0) {
             
                const map = new mapboxgl.Map({
                    container: 'mapContainer',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [9.6255, 50.4181],
                    zoom: 1,
                    });
                    console.log('countryLongLatData', countryLongLatData)
                    countryLongLatData.map((country) => (
                        
                        new mapboxgl.Marker()
                        .setLngLat([country.long, country.lat])
                        .addTo(map)
                    ))
            }
        }
        }, [countryLongLatData]);

    return (
       <CountryMapStyles id="mapContainer" className="map"/>
    )
}

export default CountryMap;
