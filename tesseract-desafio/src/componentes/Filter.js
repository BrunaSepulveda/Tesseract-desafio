import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import styles from '../styles/componentes/Filter.module.css'

const Filter = () => {
  const { handleInput } = useContext(ProfileContext);

  return(
    <header className={ styles.filterContainer }>
      <input
        type="text"
        onChange={ (event) => handleInput(event) }
        placeholder="Buscar por login"
      />
    </header>
  );
};

export default Filter;