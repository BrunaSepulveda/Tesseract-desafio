import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/componentes/Profile.module.css'

const Profile = ({ login, avatar_url }) => {
    return(
      <Link to={ `/detalhes/${login}` }> 
        <div className={ styles.profileContainer }>
          <img src={avatar_url} alt="Foto usuário"/>
          <div>
            <strong> {login} </strong>
          </div>
        </div>
      </Link>
    );
  };

export default Profile;