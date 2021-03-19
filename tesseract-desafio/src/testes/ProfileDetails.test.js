import React from 'react';
import { screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { dataMember } from './mockdata';
import renderWithRouter from './renderWithRouter';
import ProfileDetails from '../pages/ProfileDetails';

describe('Teste da tela ProfileDetails', () => {

  it('testa se a API é chamada e que renderiza os dados escolhidos', async () => {

    jest.spyOn(global, "fetch");

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(dataMember),
    });  

    const match = { params: { login: "Acquati"  }}
    
    renderWithRouter(<ProfileDetails match={ match }/>)

    await screen.findByText('Acquati');
    expect(globalThis.fetch).toBeCalledTimes(1);

    const informations = await screen.findByTestId('profileDetails');


    expect(informations).toBeInTheDocument();
    expect(informations.textContent).toContain("Nome: Leandro Acquati");
    expect(informations.textContent).toContain("Localização: Bauru, SP");
    expect(informations.textContent).toContain("Número de repositórios públicos: 31");
    expect(informations.textContent).toContain("Número de pessoas que segue: 9");
    expect(informations.textContent).toContain("Número de seguidores: 5");
    expect(informations.textContent).toContain("Data de ingresso no Github: 8/ Out/ 2015");
  });
});