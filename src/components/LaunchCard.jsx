/* eslint-disable camelcase */
import React from 'react';
import YoutubeIframe from './YoutubeIframe';
import '../assets/styles/components/LaunchCard.scss';
import paceholder from '../assets/static/paceholder.jpg';

const LaunchCard = ({ title, mission_name, launch_date_utc, links, launch_site, details }) => {
  const date = new Date(launch_date_utc);
  const launchDate = `Launch Date: ${date.toDateString()}`;
  const launchPlace = `Launch Site: ${launch_site.site_name_long}`;
  const MissionDetails = `About this mission: ${details}`;
  return (
    <div className='launchCard'>

      {title && (
        <h2 className='cardTitle'>{title}</h2>
      )}
      <div className='name_patch'>
        <h4 className='missionName'>{mission_name}</h4>
        {links.mission_patch ?
          <img className='missionPatch' src={links.mission_patch} alt='mission patch' /> :
          <img className='missionPatch' src={paceholder} alt='mission patch' style={{ borderRadius: '52%' }} />}

      </div>
      {(links.flickr_images.length > 0) &&
        <img className='flickr' src={links.flickr_images[0]} alt='' />}
      <h5 className='missionDate'>{launchDate}</h5>
      <h5 className='launchSite'>{launchPlace}</h5>

      <YoutubeIframe className='youtubeIframe' source={links.youtube_id} />
      <p className='aboutThisMission'>{MissionDetails}</p>
      {links.wikipedia &&
        <a className='groupInfo' href={links.wikipedia} target='blank_'>More info about this launch group (Wikipedia)</a>}
    </div>
  );
};

export default LaunchCard;
