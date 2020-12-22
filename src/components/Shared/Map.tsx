import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { MapProps } from '../../types/index'

const containerStyle = {
  width: '254px',
  height: '254px',
};

const Map: React.FC<MapProps> = ({ lat, lng }) => {
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
