import React from 'react';
import { connect } from 'react-redux';
import { setPage } from '../actions/index';

const PageNumber = (props) => {
  const { number } = props;
  const handleSetPage = () => {
    props.setPage(number);
  };
  return (
    <>
      <h6 onClick={handleSetPage}>{ number }</h6>
    </>
  );
};
const mapDispathToProps = {
  setPage,
};
export default connect(null, mapDispathToProps)(PageNumber);
