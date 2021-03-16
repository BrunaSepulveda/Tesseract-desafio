import React from 'react';
import styles from '../styles/componentes/Profile.module.css'

const Profile = ({ login, avatar_url }) => {
    return(
      <div className={ styles.profileContainer }>
        <img src={avatar_url} alt="Foto usuário"/>
        <div>
          <strong> {login} </strong>
        </div>
      </div>
    );
  };

export default Profile;