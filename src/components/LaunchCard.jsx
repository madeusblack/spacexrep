/* eslint-disable camelcase */
import React from 'react';
import YoutubeIframe from './YoutubeIframe';
import '../assets/styles/components/LaunchCard.scss';
import paceholder from '../assets/static/paceholder.jpg';

const LaunchCard = ({ title, mission_name, launch_date_utc, links, site_name_long, details }) => {
  const date = new Date(launch_date_utc);
  const launchDate = `Launch Date: ${date.toDateString()}`;
  return (
    <div className='launchCard'>
      {title && (
        <h2 className='cardTitle'>{title}</h2>
      )}
      <h4 className='missionName'>{mission_name}</h4>
      {links.mission_patch ?
        <img className='missionPatch' src={links.mission_patch} alt='mission patch' /> :
        <img className='missionPatch' src={paceholder} alt='mission patch' style={{ borderRadius: '52%' }} />}
      <h5 className='missionDate'>{launchDate}</h5>
      <YoutubeIframe source={links.youtube_id} />
      <h5 className='launchSite'>{site_name_long}</h5>
      <p className='aboutThisMission'>{details}</p>
    </div>
  );
};

export default LaunchCard;
