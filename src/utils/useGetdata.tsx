import { useState, useEffect, useCallback } from 'react';

export const useGetdata = (ip: string, initial: boolean) => {
  const [data, setData] = useState({
    lat: '',
    lng: '',
    ip: '',
  });

  const getData = useCallback(async () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/api.ipstack.com/${ip}?access_key=f474c7cec0d2937b16d292418ba38a2a`
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
