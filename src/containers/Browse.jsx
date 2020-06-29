/* eslint-disable no-else-return */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Page from '../components/Page';
import ItemsPerPage from '../components/ItemsPerPage';
import useInitialState from '../Hooks/useInitialState';
import Paginator from '../components/Paginator';
import Container from '../components/Container';

const API = 'https://api.spacexdata.com/v3/launches';
const Browse = ({ itemsPerPage, actualPage, totalItems }) => {
  const launchList = useInitialState(API);
  if (launchList.isData !== false) {
    return (
      <>
        <Container>
          <ItemsPerPage numberOfItems={itemsPerPage} />
          <Paginator itemsPage={itemsPerPage} />
        </Container>
        <Page numberOfPage={actualPage} numberOfItems={itemsPerPage} launches={launchList} maxItems={totalItems} />
        <Container>
          <Paginator itemsPage={itemsPerPage} />
          <ItemsPerPage numberOfItems={itemsPerPage} />
        </Container>
      </>
    );
  } else {
    return (
      <h1>Loading</h1>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    itemsPerPage: state.itemsPerPage,
    actualPage: state.actualPage,
    totalItems: state.totalItems,

  };
};

export default connect(mapStateToProps, null)(Browse);
