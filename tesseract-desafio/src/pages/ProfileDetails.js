import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOneProfile } from '../sevices/gitProfileAPI';
import styles from '../styles/pages/ProfileDetails.module.css'

const ProfileDetails = ({ match }) =>{
  const { login } = match.params;
  const[ userData, setUserData ] = useState({
    nome: "",
    qt_repositorios: 0,
    qt_seguidores: 0,
    data_inicio: 0 
  })

  const fetchUSer = async () => {
    const userInfor = await getOneProfile(login);
    setUserData({...userInfor})
    console.log({userInfor})
  };

  useEffect(() => {
    fetchUSer();
  }, [])
  
  const {nome, qt_repositorios, qt_seguidores, data_inicio } = userData;

  return(
    <div className={ styles.profileDetailsContainer }>
      <strong>{nome}</strong>
      <p>
        {nome} possui {qt_repositorios} repositórios públicos,
        mantém { qt_seguidores} seguidores e criou sua conta no Github na data {data_inicio}. 
      </p>
      <Link to="/"> Voltar </Link>
    </div>
  );
};

export default ProfileDetails;