import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import Profile from './Profile';
import styles from '../styles/componentes/ProfileList.module.css';


const ProfileList = () => {
 const { data, filterByLogin } = useContext( ProfileContext);

 const filterByInput = ( login ) => {
    const listProfile = data.filter((item) =>  (
      item.login.toUpperCase().includes(login.toUpperCase())));
    return listProfile;
  }

  const filteredList =  filterByInput(filterByLogin);

  return(
    <div className={ styles.profileListContainer }>
        { filteredList.map((item, index) => 
          <Profile key={index} login={item.login} avatar_url={item.avatar_url} index={index}/>) 
        }
    </div>
  );
};

export default ProfileList;
