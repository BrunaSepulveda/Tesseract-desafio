import React from 'react';
import { screen, fireEvent} from '@testing-library/react'
import ProfileList from '../componentes/ProfileList';
import '@testing-library/jest-dom/extend-expect';
import data from './mockdata';
import renderWithRouter from './renderWithRouter';



describe('Teste do componente ProfileList', () => {
  it('Renderiza todos os perfis da lista quando não há nada no buscador', async () => {
    
    const filterByLogin = '';
    const providerProps = {
      data,
      filterByLogin,
    }
    renderWithRouter(<ProfileList/>, providerProps);

    await screen.findByText('thesocialdev');
    const profileseven = await screen.findByTestId('6-profile');
    const profileone = await screen.findByTestId('0-profile');

    expect(profileseven).toBeInTheDocument();
    expect(profileone).toBeInTheDocument();
  });
  it('Renderiza apenas os perfis de acordo com o filtro salvo no contexto ', async () => {
    const filterByLogin = 'Acqua';;
    const providerProps = {
      data,
      filterByLogin,
    }
    renderWithRouter(<ProfileList/>, providerProps);

    await screen.findByText('Acquati');
    const profileone = await screen.findByTestId('0-profile');

    expect(screen.queryByText('thesocialdev')).toBeNull();
    expect(screen.queryByText('evandrododo')).toBeNull();
    expect(profileone).toBeInTheDocument();
  });
  it('Ao clicar em um dos perfis redireciona para página de detalhes',async () =>{
    const filterByLogin = 'Acqua';;
    const providerProps = {
      data,
      filterByLogin,
    }
    const { history } = renderWithRouter(<ProfileList/>, providerProps);

    await screen.findByText('Acquati');
    const profileone = await screen.findByTestId('0-profile');

    fireEvent.click(profileone);

    expect(history.location.pathname).toBe('/detalhes/Acquati');
  });
});