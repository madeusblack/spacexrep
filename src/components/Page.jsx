/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import LaunchCard from './LaunchCard';
import CardContainer from './CardContainer';

const Page = ({ numberOfPage, numberOfItems, launches }) => {
  let actualitem;
  const cards = [];
  if (launches[0]) {
    if (numberOfPage > 1) {
      actualitem = (numberOfPage - 1) * numberOfItems;
    } else {
      actualitem = numberOfPage;
    }
    for (let i = 0;i < numberOfItems; i++) {
      if (launches[actualitem].flight_number !== undefined) {
        cards.push(<LaunchCard key={launches[actualitem].flight_number} {...launches[actualitem]} />);
      }
      actualitem++;
    }
  }
  return (
    <CardContainer>
      {cards}
    </CardContainer>
  );
};
export default Page;
