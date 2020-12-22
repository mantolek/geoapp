import React, { useState, useContext } from 'react';
import { checkInput } from '../../utils/validation';
import PopupBox from '../Shared/Popup';
import SearchedLocationMap from './elements/SearchedLocationMap';
import SearchLocationData from './elements/SearchLocationData';
import Form from './elements/Form';
import { SearchDataProps} from '../../types/index'

const SearchedData: React.FC<SearchDataProps> = ({ landedUserIP, setHistory }) => {
  const [error, setError] = useState('');

  const [searchUserIp, setSearchUserIp] = useState('');
  const [searchUserLocation, setSearchUserLocation] = useState({
    lat: '',
    lng: '',
    ip: ''
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkInput(searchUserIp, landedUserIP, setError)) return;

    fetch(
      `https://cors-anywhere.herokuapp.com/api.ipstack.com/${searchUserIp}?access_key=f474c7cec0d2937b16d292418ba38a2a`
    )
      .then((data) => data.json())
      .then((result) => {
        setSearchUserLocation({
          lat: result.latitude,
          lng: result.longitude,
          ip: result.ip
        });

        setHistory((oldArr: string[]) => [...oldArr, searchUserIp]);
        setSearchUserIp('');
      })
      .catch((err) => console.log('Error search data'));
  };

  return (
    <div className='searchedData__container'>
      <PopupBox
        open={error === '' ? false : true}
        close={setError}
        errorMsg={error}
      />
      <Form
        submit={submit}
        searchUserIp={searchUserIp}
        setSearchUserIp={setSearchUserIp}
      />
      <div className='searchedData__wrapper'>
        <SearchedLocationMap location={searchUserLocation} />
        <SearchLocationData location={searchUserLocation} />
      </div>
    </div>
  );
};

export default SearchedData;
