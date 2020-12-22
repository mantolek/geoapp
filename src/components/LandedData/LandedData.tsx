import React, { useEffect, useState, useCallback } from 'react';
import LandedLocationData from './elements/LandedLocationData';
import LandedLocationMap from './elements/LandedLocationMap';

const LandedData: React.FC<{landedUserIP: string}> = ({landedUserIP}) => {
  const [landedUserLocation, setLandedUserLocation] = useState({
    lat: '',
    lng: '',
  });

  const getLandedUserData = useCallback(() => {
    fetch(
      `http://api.ipstack.com/${landedUserIP}?access_key=d17fbeab4644f1d7d3a5e0a8b72f677a`
    )
      .then((data) => data.json())
      .then((result) => {
        setLandedUserLocation({
          lat: result.latitude,
          lng: result.longitude,
        });
      })
      .catch((err) => console.log('Error landed data'));
  }, [landedUserIP]);

  useEffect(() => {
    getLandedUserData();
  }, [getLandedUserData]);
  return (
    <div className='landedData__container'>
      <LandedLocationMap location={landedUserLocation} />
      <LandedLocationData ip={landedUserIP} location={landedUserLocation} />
    </div>
  );
};

export default LandedData;
