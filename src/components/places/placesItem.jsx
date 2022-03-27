import dayjs from 'dayjs';
import PropTypes from 'prop-types'

import { Card, CardContent, Typography, Grid } from '@mui/material';
import { FavoriteBorderRounded, InfoOutlined, DeleteForever } from '@mui/icons-material';

import PlacesGridStyles from './styles';


const PlacesItem = ({ place, deletePlace }) => {

  return (
    <PlacesGridStyles item xs={12} md={6}>
      <Card key={place.id} className="place">
        <div onClick={() => deletePlace(place.id)} className="classdelete"><DeleteForever /></div>
        <CardContent>
          {place.file.key !== 'public/undefined' && <img src={`https://${place.file.bucket}.s3.amazonaws.com/${place.file.key}`} className="placeImg" alt='place' />}
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography variant="h2" className="placeCountry">{place.country}</Typography>

              <Typography variant="body1" className="placeCity">{place.city}</Typography>

              {place.description && <Typography variant="body1" className="placeDescription">{place.description}</Typography>}

              <Typography variant="body1" className="placeDate"><strong>Date:</strong> {dayjs(place.dateVisitedFrom).format('DD/MM/YYYY')} - {dayjs(place.dateVisitedTo).format('DD/MM/YYYY')}</Typography>

            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                {place.favourite && (<FavoriteBorderRounded />)}
              </Typography>
            </Grid>
          </Grid>

        </CardContent>
        <InfoOutlined />
      </Card>
    </PlacesGridStyles>
  )
}

PlacesItem.propTypes = {
  place: PropTypes.object,
  deletePlace: PropTypes.func
}

export default PlacesItem

