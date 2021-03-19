import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOneProfile } from '../sevices/gitProfileAPI';
import styles from '../styles/pages/ProfileDetails.module.css'

const ProfileDetails = ({ match }) =>{
  const { login } = match.params;
  const[ userData, setUserData ] = useState({
    avatar_url: "",
    nome: "",
    qt_repositorios: 0,
    qt_segue: 0,
    qt_seguidores: 0,
    location:"",
    data_inicio: 0 
  })

  const fetchUser = async () => {
    const userInfor = await getOneProfile(login);
    setUserData({...userInfor})
  };

  useEffect(() => {
    fetchUser();
  }, [])
  
  const { avatar_url, nome, qt_repositorios, qt_segue, qt_seguidores, location, data_inicio } = userData;
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  const data = new Date(data_inicio)

  return(
    <div className={ styles.levelModalOverlay} >
      <div className={ styles.profileDetailsContainer }>
        <img src={avatar_url} alt={`Foto de ${ login }`}/>
        <strong>{login}</strong>
        <p data-testid='profileDetails'>
          <b>Nome:</b> {nome} <br/>
          <b>Localização:</b> {!location ? "Não informado " : location} <br/>
          <b>Número de repositórios públicos:</b> {qt_repositorios} <br/>
          <b>Número de pessoas que segue:</b> { qt_segue } <br/>
          <b>Número de seguidores:</b> { qt_seguidores} <br/>
          <b>Data de ingresso no Github:</b> { data.getDate() }/ { meses[(data.getMonth())] }/ { data.getFullYear() } <br/>
        </p>
        <Link to="/"> Voltar </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;