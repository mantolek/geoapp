import React from 'react';
import { LocationProps } from '../../types/index'

const DisplayData: React.FC<LocationProps> = ({ location }) => {
  return (
    <div className='displayData__container'>
      <h3>Latest search:</h3>
      <p>IP: {location.ip}</p>
      <p>Lat: {location.lat} </p>
      <p>Lat: {location.lng} </p>
    </div>
  );
};

export default DisplayData
