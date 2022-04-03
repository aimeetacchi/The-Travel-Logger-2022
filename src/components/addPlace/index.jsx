import React, { useState, useEffect, useRef } from 'react';
import { Storage } from 'aws-amplify'

import { addNewPlace } from '../../actions/places'
import { useDispatch } from 'react-redux'

import awsExports from '../../aws-exports'
import AddPlaceStyles from './styles';
import Select from 'react-select'

import {
    TextField,
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
} from '@mui/material';


const AddPlace = ({ countriesSelect }) => {
    const firstTimeRender = useRef(true);

    const [formState, setFormState] = useState({
        country: '',
        city: '',
        description: '',
        favourite: false,
        dateVisitedFrom: null,
        dateVisitedTo: null,
        file: null
    })

    const [imageState, setImageState] = useState({
        file: null
    })

    const [place, setPlaceState] = useState({
        country: '',
        city: '',
        description: '',
        favourite: false,
        dateVisitedFrom: null,
        dateVisitedTo: null,
        file: {},
    });

    const dispatch = useDispatch();

    // Setting input of form fields
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    // ADD Place Function ====
    const addPlace = async (e) => {
        e.preventDefault();
        e.target.reset();
        console.log('this is running! addplace')


        try {
            const result = await Storage.put(imageState.name, imageState, {
                contentType: 'image/jpg'
            })

            if (result) {
                const image = {
                    bucket: awsExports.aws_user_files_s3_bucket,
                    region: awsExports.aws_user_files_s3_bucket_region,
                    key: 'public/' + result.key
                }

                setPlaceState({
                    country: formState.country,
                    city: formState.city,
                    description: formState.description,
                    favourite: formState.favourite,
                    dateVisitedFrom: formState.dateVisitedFrom,
                    dateVisitedTo: formState.dateVisitedTo,
                    file: image
                });

            }


        } catch (error) {
            console.log('Error uploading file:', error)
        }
    }

    // // Calling Add Place API function
    // const callAPIcreatePlaces = (place) => {
    //     // RUN ADD ACTION === PASSING THE RETURNED DATA ADDED TO API

    //     // Empty Form State ---
    // }

    useEffect(() => {

        if (!firstTimeRender.current) {
            console.log("places data has changes to running use effect")
            dispatch(addNewPlace(place));
        }
        // eslint-disable-next-line
    }, [place])

    useEffect(() => {
        firstTimeRender.current = false
    }, [])

    const colourStyles = {
        menuList: styles => ({
            ...styles,
            background: '#22577A'
        }),
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            background: isFocused
                ? '#183c55'
                : isSelected
                    ? '#102a3b'
                    : undefined,
            zIndex: 1
        }),
        menu: base => ({
            ...base,
            zIndex: 100
        })
    }

    if (countriesSelect.length <= 0) {
        return <span>loading form...</span>
    }

    return (
        <AddPlaceStyles mb={5}>
            <form className="container" onSubmit={addPlace}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Select
                            required
                            // label="Single select"
                            options={countriesSelect}
                            styles={colourStyles}
                            defaultValue={countriesSelect[227]}
                            onChange={(value) => setInput('country', value.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            className="formField"
                            label="Add City"
                            variant="outlined"
                            color="secondary"
                            required
                            onChange={e => setInput('city', e.target.value)}
                            value={formState.city}
                            placeholder="Add City"
                        // error={cityErr}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            className="formField"
                            label="Add Description"
                            variant="outlined"
                            color="secondary"
                            onChange={e => setInput('description', e.target.value)}
                            value={formState.description}
                            placeholder="Add a short description about the place"
                            multiline
                            rows={4}
                        // error={descriptionErr}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box>
                            <label htmlFor="start">Start date:</label>
                            <input
                                onChange={e => setInput('dateVisitedFrom', e.target.value)}
                                className="formField"
                                type="date"
                                id="start"
                                name="trip-start"
                                min="1999-01-01" max="2021-12-31" />
                        </Box>

                        <Box>
                            <label htmlFor="start">End date:</label>
                            <input
                                onChange={e => setInput('dateVisitedTo', e.target.value)}
                                className="formField"
                                type="date"
                                id="end"
                                name="trip-end"
                                min="1999-01-01" max="2021-12-31" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            type="file"
                            color="secondary"
                            onChange={e => setImageState(e.target.files[0])}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControlLabel
                            label="Favourite"
                            control={
                                <Checkbox
                                    checked={formState.favourite}
                                    onChange={e => setInput('favourite', e.target.checked)}
                                    name="favourite"
                                    color="secondary"
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <input type="submit" className="submitbutton" value="Add Place" />
                    </Grid>
                </Grid>
            </form>
        </AddPlaceStyles>
    )
}

export default AddPlace
