// eslint-disable-next-line no-unused-vars
import React from 'react';

import '../styles/Home.css'; // Import the CSS file
import Title from '../components/Title';
import Linktags from '../components/Linktags';
import HomeDecal from '../components/HomeDecal';

const Home = () => {
  return (
    <>
    <div className='back-image'>
      <div className='panel panel-text'>
        <Title />
        <Linktags />
      </div>
      <div className='panel panel-img'>
        <HomeDecal />
      </div>
    </div>
    </>
  );
};

export default Home;
