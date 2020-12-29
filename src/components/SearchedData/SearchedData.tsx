import React, { useState } from 'react';
import { checkInput } from '../../utils/validation';
import PopupBox from '../Shared/Popup';
import DisplayMap from '../Shared/DisplayMap';
import DisplayData from '../Shared/DisplayData';
import Form from './Form';
import { ISearchDataProps } from '../../types/index';
import { useGetdata } from '../../utils/useGetdata';

const SearchedData: React.FC<ISearchDataProps> = ({
  landedUserIP,
  setHistory,
}) => {
  const [error, setError] = useState('');
  const [searchUserIp, setSearchUserIp] = useState('');
  const [getData, data] = useGetdata(landedUserIP, false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkInput(searchUserIp, landedUserIP, setError)) return;

    getData()
      .then(() => {
        setHistory((oldArr: string[]) => [...oldArr, searchUserIp]);
        setSearchUserIp('');
      })
      .catch(() => console.log('Error search data'));
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
        <DisplayMap location={data} />
        <DisplayData location={data} />
      </div>
    </div>
  );
};

export default SearchedData;
