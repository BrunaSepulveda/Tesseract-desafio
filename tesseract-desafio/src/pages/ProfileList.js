import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import Profile from '../componentes/Profile';
import Filter from '../componentes/Filter'
import styles from '../styles/pages/ProfileList.module.css';


const ProfileList = () => {
 const { data, filterByLogin } = useContext( ProfileContext);

 const filterByInput = ( login ) => {
    const listProfile = data.filter((item) =>  item.login.toUpperCase().includes(login.toUpperCase()));
    return listProfile;
  }

  const filteredList =  filterByInput(filterByLogin);

  return(
    <div>
      <Filter/>
    <div className={ styles.profileListContainer }>
      { filteredList.map((item) => 
          <Profile login={item.login} avatar_url={item.avatar_url} />) 
      }
    </div>
    </div>
  );
};

export default ProfileList;
//