import React from 'react';
import Map from '../Shared/Map';
import { LocationProps } from '../../types/index';

const DisplayMap: React.FC<LocationProps> = ({ location, top }) => {
  if (top === true) {
    return (
      <div className='displayMap__container'>
        <Map lat={location.lat} lng={location.lng} />
      </div>
    );
  }
  return (
    <div className='displayMap__container'>
      {location.lat !== '' && location.lng !== '' && location.ip !== '' ? (
        <Map lat={location.lat} lng={location.lng} />
      ) : (
        <div className='displayMap__default'>X</div>
      )}
    </div>
  );
};

export default DisplayMap;
