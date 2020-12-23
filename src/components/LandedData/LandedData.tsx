import React from 'react';
import { useGetdata } from '../../utils/useGetdata';
import DisplayData from '../Shared/DisplayData';
import DisplayMap from '../Shared/DisplayMap';

const LandedData: React.FC<{ landedUserIP: string }> = ({ landedUserIP }) => {
  const [, data] = useGetdata(landedUserIP, true);

  return (
    <div className='landedData__container'>
      <DisplayMap location={data} top={true} />
      <DisplayData ip={landedUserIP} location={data} />
    </div>
  );
};

export default LandedData;
