import React from 'react';
import '../assets/styles/components/CardContainer.scss';

const CardContainer = ({ children }) => (
  <section className='cardContainer'>
    {children}
  </section>
);
export default CardContainer;
