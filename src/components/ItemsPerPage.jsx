/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-destructuring */
import React from 'react';
import { connect } from 'react-redux';
import { setItems, setPage } from '../actions/index';
import '../assets/styles/components/ItemsPerPage.scss';

const ItemsPerPage = (props) => {
  const { numberOfItems } = props;
  let newNumberOfItems;
  const handleSetItems = () => {
    if (props.numberOfItems === 20) {
      newNumberOfItems = props.numberOfItems - 10;
    } else {
      newNumberOfItems = props.numberOfItems + 10;
    }
    props.setItems(newNumberOfItems);
    props.setPage(1);
  };

  return (
    <h6 className='itemsPerPage' onClick={handleSetItems}>
      Items per Page: {numberOfItems}
    </h6>
  );
};
const mapDispathToProps = {
  setItems,
  setPage,
};

export default connect(null, mapDispathToProps)(ItemsPerPage);

