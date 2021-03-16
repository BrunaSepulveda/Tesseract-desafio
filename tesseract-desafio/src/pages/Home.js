import React from 'react';
import ProfileList from '../componentes/ProfileList';
import Filter from '../componentes/Filter';
import styles from '../styles/pages/Home.module.css';

const Home = () => {
  return(
    <div className={ styles.homeContainer }>
      <Filter/>
      <ProfileList/>
    </div>
  );
};

export default Home;