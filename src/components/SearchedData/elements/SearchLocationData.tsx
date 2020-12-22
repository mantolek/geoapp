import React from 'react';
import { LocationProps } from '../../../types/index'

const SearchLocationData: React.FC<LocationProps> = ({ location }) => {
  return (
    <div className='searchedLocationData__container'>
      <h3>Latest search:</h3>
      <p>IP: {location.ip}</p>
      <p>Lat: {location.lat} </p>
      <p>Lat: {location.lng} </p>
    </div>
  );
};

export default SearchLocationData;
