/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-else-return */
import React from 'react';
import useInitialState from '../Hooks/useInitialState';
import '../assets/styles/App.scss';
import CardContainer from '../components/CardContainer';
import LaunchCard from '../components/LaunchCard';

const API = 'https://api.spacexdata.com/v3/launches';
const Home = () => {
  const lastest = useInitialState(`${API}/latest`);
  const next = useInitialState(`${API}/next`);

  if (lastest.mission_name && next.mission_name) {
    return (
      <>
        <CardContainer>
          <LaunchCard key={lastest.id} {...lastest} title='Lastest Launch' />
          <LaunchCard key={next.id} {...next} title='Next Launch' />
        </CardContainer>
      </>
    );
  } else {
    return (
      <h1>Loading...</h1>
    );
  }
};
export default Home;
