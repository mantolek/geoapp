import React from 'react';
import { ILocationProps } from '../../types/index'

const DisplayData: React.FC<ILocationProps> = ({ location }) => {
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
