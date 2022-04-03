import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listPlaces } from '../../../graphql/queries'
import { getPlaces } from '../../../actions/places'

import AddPlace from '../../addPlace';
import Places from '../../places';

import {
    Grid,
    Container,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const PlacesPage = () => {
    const [countryAPIData, setCountryAPIData] = useState([]);
    const [countryFlagsData, setCountryFlagsData] = useState([]);

    const data = useSelector((state) => state.allPlaces.data);
    const loading = useSelector((state) => state.allPlaces.loading);
    const completeDeletedPlace = useSelector((state) => state.allPlaces.completeDeletedPlace);

    const dispatch = useDispatch();
    // places: { data, loading, completeDeletedPlace }, getPlaces, deleteSelectedPlace


    useEffect(() => {
        // if(!_.isEmpty(data) && !_.isEqual(prevData, data)) {
        const fetch = async () => {

            try {

                // const variables = {
                //   nextToken,
                //   limit: 4,
                // }

                // console.log('variables', variables)

                // === Uses the Amplify API category to call the AppSync GraphQL API with the listPlaces query. Once the data is returned, the items array is passed in to the setPlaces function to update the local state.
                // const placesData = await API.graphql(graphqlOperation(listPlaces, variables))
                const placesData = await API.graphql(graphqlOperation(listPlaces))
                const data = placesData.data.listPlaces.items

                // setNextNextToken(placesData.data.listPlaces.nextToken)

                dispatch(getPlaces(data))
            } catch (err) {
                console.log('error fetching places', err)
                // dispatch({
                //     type: Types.FAILED_GET_PLACES,
                //     payload: err.response.data
                // }) 
            }
        }
        fetch();

        // }, [nextToken, completeDeletedPlace])
        // eslint-disable-next-line
    }, [completeDeletedPlace])

    useEffect(() => {
        // FLAG API.
        const fetchFlags = async () => {
            try {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                const res = await fetch("https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode", requestOptions);

                const countryFlagsData = await res.json();

                // const countryDataFiltered = data.map((visitedPlace) => countryData.data.filter((country) => {
                //   count++
                //   return visitedPlace.country.toLowerCase() === country.name.toLowerCase()
                // }))

                const countryFlagsMap = countryFlagsData.data.reduce((map, country) => {
                    map[country.name.toLowerCase()] = country;
                    return map;
                }, {})

                const countryFlagDataFiltered = data.map((visitedPlace) => {
                    return countryFlagsMap[visitedPlace.country.toLowerCase()]
                })
                setCountryFlagsData(countryFlagDataFiltered)
                // console.log('count', count)
                // console.log('flags', countryFlagsMap)
                //console.log('filtered', countryFlagDataFiltered);

            } catch (error) {
                console.log('error', error)
            }
        }

        const getCountries = async () => {
            try {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                const res = await fetch("https://countriesnow.space/api/v0.1/countries/positions", requestOptions);

                const countryData = await res.json();

                // console.log('COUNTRIES API', countryData.data)

                const countriesMap = countryData.data.reduce((map, country) => {
                    map[country.name.toLowerCase()] = country;
                    return map;
                }, {})

                const countryDataFiltered = data.map((visitedPlace) => {
                    return countriesMap[visitedPlace.country.toLowerCase()]
                })

                setCountryAPIData(countryDataFiltered)

                // console.log('All Countries', countriesMap)
                //console.log('All Countries filtered', countryDataFiltered);

            } catch (error) {
                console.log('error', error)
            }
        }

        if (data && data?.length > 0) {
            fetchFlags();
            getCountries();
        }

    }, [data]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <AddPlace />
                </Container>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <Places data={data} loading={loading} countryAPIData={countryAPIData} />
                </Container>
            </Grid>
        </Grid>
    )
}

export default PlacesPage
