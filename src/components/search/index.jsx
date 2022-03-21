import React, { useState } from 'react'

import {
    TextField,
    Typography,
    Select,
    FormControl,
    MenuItem,
    InputLabel
} from '@mui/material';

import SearchStyles from './styles'

const Search = ({ search, setSearch, sortByASC, sortByDESC }) => {
    const [AscValue, setASC] = useState('');
    const [DescValue, setDESC] = useState('');

    const handleAscChange = (e) => {
        setASC(e.target.value)
        sortByASC(e.target.value)
    };

    const handleDescChange = (e) => {
        setDESC(e.target.value)
        sortByDESC(e.target.value)
    }

    return (
        <SearchStyles>
            <Typography variant="body2">Filters:</Typography>
            <TextField
                className="formField"
                label="Search Place"
                variant="outlined"
                color="primary"
                onChange={e => setSearch(e.target.value)}
                value={search}
                placeholder="Search Place..."
            />
            <Typography variant="body2">Sort By:</Typography>

            <FormControl fullWidth>
                <InputLabel id="asc-select">ASC</InputLabel>
                <Select
                    labelId="asc-select"
                    id="asc-select"
                    value={AscValue}
                    label="ASC"
                    onChange={handleAscChange}
                >
                    <MenuItem value={"city"}>City</MenuItem>
                    <MenuItem value={"country"}>Country</MenuItem>
                    <MenuItem value={"dateVisitedFrom"}>Date Visited</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="desc-select">DESC</InputLabel>
                <Select
                    labelId="desc-select"
                    id="desc-select"
                    value={DescValue}
                    label="DESC"
                    onChange={handleDescChange}
                >
                    <MenuItem value={"city"}>City</MenuItem>
                    <MenuItem value={"country"}>Country</MenuItem>
                    <MenuItem value={"dateVisitedFrom"}>Date Visited</MenuItem>
                </Select>
            </FormControl>
        </SearchStyles>
    )
}

export default Search
