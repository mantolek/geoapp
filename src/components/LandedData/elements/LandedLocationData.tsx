import React from 'react';
import { LocationProps} from '../../../types/index'

const SearchLocationData: React.FC<LocationProps> = ({ ip, location }) => {
  return (
    <div className='landedLocationData__container'>
      <h3>Your data:</h3>
      <p>IP: {ip}</p>
      <p>Lat: {location.lat} </p>
      <p>Lat: {location.lng} </p>
    </div>
  );
};

export default SearchLocationData;
