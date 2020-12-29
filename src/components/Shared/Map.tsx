import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { IMapProps } from '../../types/index'

const containerStyle = {
  width: '254px',
  height: '254px',
};

const Map: React.FC<IMapProps> = ({ lat, lng }) => {
  const center = {
    lat: +lat,
    lng: +lng,
  };
  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        <Marker position={center} />
        <></>
      </GoogleMap>
    </div>
  );
};

export default Map;
