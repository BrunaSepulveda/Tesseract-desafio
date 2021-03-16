import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import Profile from '../componentes/Profile';
import styles from '../styles/pages/ProfileList.module.css'


const ProfileList = () => {
 const { data } = useContext( ProfileContext);
 // const { name } = filterByName;
 // const profileList = filterByTag(name)
  return(
    <div className={ styles.profileListContainer }>
      { data.map((item) => <Profile login={item.login} avatar_url={item.avatar_url} />) }
    </div>
  );
};

export default ProfileList;
//