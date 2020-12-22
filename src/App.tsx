import React, { useEffect, useState } from 'react';
import './Styles.scss';
import publicIp from 'public-ip';
import { LoadScript } from '@react-google-maps/api';
import SearchedData from './components/SearchedData/SearchedData';
import LandedData from './components/LandedData/LandedData';
import SearchedHistory from './components/SearchHistory/SearchHistory';

// Example IP
// 193.176.86.57
// 109.173.214.181

const App: React.FC = () => {
  const [landedUserIP, setLandedUserIP] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);

  const getClientOnLoadIp = async () =>
    await publicIp.v4({
      fallbackUrls: ['https://ifconfig.co/ip'],
    });

  useEffect(() => {
    getClientOnLoadIp().then((el) => setLandedUserIP(el));
  }, []);

  return (
    <div className='container'>
      <SearchedHistory history={history} />
      <div className='wrapper'>
        <LoadScript googleMapsApiKey={'AIzaSyArXpvasOvs4IdZP9a-SDQ1rJ0xCZscDaA'}>
          <LandedData landedUserIP={landedUserIP} />
          <SearchedData landedUserIP={landedUserIP} setHistory={setHistory} />
        </LoadScript>
      </div>
    </div>
  );
};

export default App;
