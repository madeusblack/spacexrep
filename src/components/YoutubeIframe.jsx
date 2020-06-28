/* eslint-disable camelcase */
import React from 'react';
import '../assets/styles/components/YoutubeIframe.scss';

const YoutubeIframe = ({ source }) => {
  const url = `https://www.youtube.com/embed/${source}`;
  return (
  // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe src={url} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />);
};
export default YoutubeIframe;
