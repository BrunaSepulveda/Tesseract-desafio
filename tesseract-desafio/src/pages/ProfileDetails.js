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

  const fetchUser = async () => {
    const userInfor = await getOneProfile(login);
    setUserData({...userInfor})
  };

  useEffect(() => {
    fetchUser();
  }, [])
  
  const {nome, qt_repositorios, qt_seguidores, data_inicio } = userData;
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezemro"];
  const data = new Date(data_inicio)

  return(
    <div className={ styles.levelModalOverlay} >
      <div className={ styles.profileDetailsContainer }>
        <strong>{nome}</strong>
        <p>
          {nome} possui {qt_repositorios} repositórios públicos,
          mantém { qt_seguidores} seguidores e criou sua conta no Github no dia { data.getDate() } do
          mês de { meses[(data.getMonth())] } do ano { data.getFullYear() }. 
        </p>
        <Link to="/"> Voltar </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;