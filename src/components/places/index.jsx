import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { deleteSelectedPlace, sortByAsc, sortByDesc } from '../../actions/places'
import { useDispatch } from 'react-redux'

import Search from '../search'
import PlacesItem from './placesItem'
// import Pagination from './pagination'

import { Box, Typography, Grid } from '@mui/material';
import PagesStyles from './styles';
import CountryMap from '../countryMap';

const Places = ({ data, loading }) => {
  const [search, setSearch] = useState('');
  const [searchParam] = useState(["city", "country"]);

  // const [nextToken, setNextToken] = useState(null)
  // const [nextNextToken, setNextNextToken] = useState()
  // const [previousTokens, setPreviousTokens] = useState([])

  // const [currentPage, setCurrentPage] = useState(1);
  // const [placesPerPage] = useState(6);

  const dispatch = useDispatch();
  // SEARCH FUNCTION
  const searchPlace = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(search.toLowerCase()) > -1
        );
      });
    });
  }

  // SORT BY ASC - sorting places by ascending order
  const sortByASC = (value) => {
    let sortedData = _.sortBy(data, value);
    // CALL DISPATCH TO UPDATE STATE
    dispatch(sortByAsc(sortedData))
  }

  // SORT BY DESC - sorting places by descending order
  const sortByDESC = (value) => {
    let sortedData = _.reverse(_.sortBy(data, value));
    // CALL DISPATCH TO UPDATE STATE
    dispatch(sortByDesc(sortedData))
  }

  // DELETE PLACE
  const deletePlace = (placeId) => {
    console.log('deleting....', placeId)

    const deletedPlace = {
      id: placeId,
    };

    // Dispatch action - getPlaces passing the places array
    dispatch(deleteSelectedPlace(deletedPlace))
  }

  // Change Page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // const usePrevious = (value) => {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value
  //   }, [value]);
  //   return ref.current;
  // }

  // const prevData = usePrevious({data});

  if (loading) <span>loading data...</span>

  // Get current place
  // const indexOfLastPlace = currentPage * placesPerPage;
  // const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  // const currentPlaces = data.slice(indexOfFirstPlace, indexOfLastPlace)


  // const next = () => {
  //   setPreviousTokens((prev) => [...prev, nextToken])
  //   setNextToken(nextNextToken)
  //   setNextNextToken(null)
  // }

  // const prev = () => {
  //   setNextToken(previousTokens.pop())
  //   setPreviousTokens([...previousTokens])
  //   setNextNextToken(null)
  // }

  return (
    <PagesStyles>
      {/* MAP */}
      <CountryMap data={data} />

      {/* SEARCH */}
      {data.length > 0 &&
        <Search
          search={search}
          setSearch={setSearch}
          sortByDESC={sortByDESC}
          sortByASC={sortByASC}
        />
      }

      {/* PLACES */}
      <Box className="container">
        <Grid container spacing={4}>
          {data.length > 0 ?
            searchPlace(data).map((place) => (
              <PlacesItem key={place.id} place={place} deletePlace={deletePlace} />
            )) : (
              <Grid item xs={12}>
                <Typography variant="body1">You have not added any places yet.</Typography>
              </Grid>
            )
          }
        </Grid>
        {/* { data.length > 0 && (<Pagination placesPerPage={placesPerPage} totalPlaces={data.length} paginate={paginate}/>)} */}

        {/* {previousTokens.length > 0 && <Button onClick={prev} variant="outlined">Prev</Button>}
          <Button onClick={next} variant="outlined">Next</Button> */}

      </Box>
    </PagesStyles>
  )
}

Places.propTypes = {
  data: PropTypes.array,
}

// const mapStateToProps = state => ({
//   places: state.allPlaces
// })

export default Places
// export default connect(mapStateToProps, { getPlaces, deleteSelectedPlace })(Places)
