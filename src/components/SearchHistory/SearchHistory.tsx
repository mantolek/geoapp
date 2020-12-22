import React from 'react';

const SearchHistory: React.FC<{history: string[]}> = ({history}) => {
  return (
    <div className='searchHistory__container'>
      <div className='searchHistory__wrapper'>
        <p>History:</p>
        <ul>
          {history &&
            history.map((input: string, i: number) => {
              return (
                <li key={input + i}>
                  {i + 1} - {input}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SearchHistory;
