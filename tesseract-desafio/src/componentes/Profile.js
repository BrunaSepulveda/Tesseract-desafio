import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/componentes/Profile.module.css'

const Profile = ({ login, avatar_url, index }) => {
    return(
      <Link to={ `/detalhes/${login}` }> 
        <div 
          className={ styles.profileContainer }
          data-testid={ `${index}-profile`}
        >
          <img 
            src={avatar_url}
            alt={`Foto de ${ login }`}
            data-testid='img-profile'
          />
          <div>
            <strong data-testid='login-name-profile'> {login} </strong>
          </div>
        </div>
      </Link>
    );
  };

export default Profile;