import React, { useContext, useState } from 'react';
import { ProfileContext } from '../context/ProfileContext';

const Filter = () => {
  const { handleInput } = useContext(ProfileContext);

  return(
    <header>
      <input
        type="text"
        onChange={ (event) => handleInput(event) }
      />
    </header>
  );
};