import React from 'react';

export default (props) => {
  const API_KEY = 'AIzaSyDcz4-f5qmMei8XSTMMPySnLQ_mQ8PdFbI';
  const BASE_URL = 'https://maps.googleapis.com/maps/api/staticmap';
  const ZOOM_LEVEL = 11;
  const MAP_TYPE = 'satellite';
  const SIZE = `${props.size}x${props.size}`;
  const STATIC_MAP_URL = `${BASE_URL}?map_type=${MAP_TYPE}&key=${API_KEY}&center=${props.city},${props.country}&zoom=${ZOOM_LEVEL}&size=${SIZE}`;

  return (
    <img src={STATIC_MAP_URL} />
  );
};
