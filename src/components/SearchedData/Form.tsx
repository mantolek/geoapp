import React from 'react';
import { IFormProps } from '../../types/index'

const Form: React.FC<IFormProps> = ({ submit, setSearchUserIp, searchUserIp }) => {
  return (
    <div className='form__container'>
      <form onSubmit={(e) => submit(e)} className='form__wrapper'>
        <input
          type='text'
          onChange={(e) => setSearchUserIp(e.target.value)}
          value={searchUserIp}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;
