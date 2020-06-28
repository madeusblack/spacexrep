import React from 'react';
import PageNumber from './PageNumber';
import '../assets/styles/components/Paginator.scss';
import useInitialState from '../Hooks/useInitialState';

const API = 'https://api.spacexdata.com/v3/launches';

const Paginator = ({ itemsPage }) => {
  const pages = [];
  let isReady = false;
  const lastest = useInitialState(`${API}/latest`);
  const totalItems = lastest.flight_number;
  const numberOfPages = Math.ceil(totalItems / itemsPage)
  for (let i = 1;i <= numberOfPages ;i++) {
    pages.push(<PageNumber key={i.id} number={i} />);
  }
  isReady = true;
  if (isReady) {
    return (
      <div className='pagesContainer'>
        {pages}
      </div>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <h1>Loading...</h1>
    );
  }

};
export default Paginator;
