import React from 'react';
import Map from '../../Shared/Map';
import { LocationProps } from '../../../types/index'

const SearchedLocationMap: React.FC<LocationProps> = ({ location }) => {
  return (
    <div className='landedLocationMap__container'>
      <Map lat={location.lat} lng={location.lng} />
    </div>
  );
};

export default SearchedLocationMap;
