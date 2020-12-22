import React from 'react';
import Map from '../../Shared/Map';
import { LocationProps } from '../../../types/index'

const SearchedLocationMap: React.FC<LocationProps> = ({ location }) => {
  return (
    <div className='searchedLocationMap__container'>
      {location.lat !== '' && location.lng !== '' && location.ip !== '' ? (
        <Map lat={location.lat} lng={location.lng} />
      ) : <div className='searchedLocationMap__default'>X</div>}
    </div>
  );
};

export default SearchedLocationMap;
