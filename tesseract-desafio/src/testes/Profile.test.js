import React from 'react';
import renderWithRouter from './renderWithRouter';
import Profile from '../componentes/Profile';
import { data } from './mockdata'

describe('Teste do componente Profile', () => {
  it("Verifica que renderiza a imagem e o login correto",() => {
    const { getByTestId } = renderWithRouter(
      <Profile 
        key={0}
        login={data[0].login}
        avatar_url={data[0].avatar_url}
      />
    );

    const img = getByTestId('img-profile');
    const loginName = getByTestId('login-name-profile');

    expect(img).toBeInTheDocument();
    expect(loginName).toBeInTheDocument();

    expect(img.src).toBe('https://avatars.githubusercontent.com/u/15040050?v=4')
    expect(loginName.textContent).toBe(' Acquati ');
  });
});