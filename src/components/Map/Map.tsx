import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import token from '../../token'; // Mapbox token
import { setBounds } from '../../rtk/actions';
import { setPlacesAsync } from '../../rtk/async-actions';
import { RootState, AppDispatch, CardInterface } from '../../rtk/store';
import useStyles from './MapStyle';
import { Bounds } from '../../types/types';

import Map from 'react-map-gl';
import { MapRef, Marker } from 'react-map-gl';
import { Paper, Rating, Typography } from '@mui/material';
import { getUrlBoundsList } from '../../api-requests/URLS';

function OverviewMap() {
  const mapRef = useRef<MapRef>();
  const dispatch = useDispatch<AppDispatch>();
  const bounds: Bounds = useSelector((state: RootState) => state.bounds);
  const places = useSelector((state: RootState) => state.places);
  const type = useSelector((state: RootState) => state.filters.type);
  const rating = useSelector((state: RootState) => state.filters.rating);
  const [activeIndex, setActiveIndex] = useState<any>(0);

  const { classes } = useStyles();

  const onChange = () => {
    dispatch(setBounds(mapRef.current?.getBounds()));
  };

  useEffect(() => {
    const isRendered = (bounds._ne) as any as boolean;

    if (isRendered) {
      // dispatch<AppDispatch>(setPlacesAsync(getUrlBoundsList({
      //   bl_latitude: bounds?._sw.lat,
      //   bl_longitude: bounds?._sw.lng,
      //   tr_longitude: bounds?._ne.lng,
      //   tr_latitude: bounds?._ne.lat,
      // })));
    }
  }, [bounds, type]);

  return (
    <Map
      ref={ mapRef }
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
        bearing: 0,
        pitch: 0,
      }}
      mapboxAccessToken={ token }
      style={{ width: '100%', height: '85vh' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onLoad={ onChange }
      onMoveEnd={ onChange }
    >
      { 
        places?.map((place: CardInterface, index: number) => {
          const hasCoordinates = place.latitude as boolean;
          const numberRating = place.rating === undefined ? 0 : place.rating;
          const isGreaterThan = numberRating as number >= rating;
    
          if ( hasCoordinates && isGreaterThan ) {
            return <div
              key={ index }
              onMouseEnter={ () => setActiveIndex(index) }
              onMouseLeave={ () => setActiveIndex(undefined) }
            >
              <Marker 
                style={{ zIndex: activeIndex === index ? 3 : "unset" }}
                longitude={ place.longitude } 
                latitude={ place.latitude } 
                anchor="bottom"
              >
                <Paper elevation={ 4 } className={ classes.marker }>
                  <Typography variant="subtitle1" className={ classes.markerTitle }>
                    { place.name }
                  </Typography>
                  <img src={ place.photo ? place.photo?.images?.large?.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' } className={ classes.markerIcon }/>
                  <Rating name="rating" size="small" value={ place?.rating } precision={ 0.5 } readOnly className={ classes.markerRating }/>
                </Paper>
              </Marker>
            </div>
          }
        })
      }
    </Map>
  )
}

export default OverviewMap;
