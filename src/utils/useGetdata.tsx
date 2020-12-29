import { useState, useEffect, useCallback } from 'react';
import { corsURL, access_key } from '../constants/index'

export const useGetdata = (ip: string, initial: boolean) => {
  const [data, setData] = useState({
    lat: '',
    lng: '',
    ip: '',
  });

  const getData = useCallback(async () => {
    fetch(
      `${corsURL}api.ipstack.com/${ip}?access_key=${access_key}`
    )
      .then((data) => data.json())
      .then((result) => {
        setData({
          lat: result.latitude,
          lng: result.longitude,
          ip: result.ip,
        });
      })
      .catch(() => console.log('Error search data'));
  }, [ip]);

  useEffect(() => {
    if (!initial) return;
    getData();
  }, [initial, getData]);

  return [getData, data] as const;
};
