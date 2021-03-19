import React from 'react';
import { fireEvent } from '@testing-library/react';
import Filter from '../componentes/Filter';
import '@testing-library/jest-dom/extend-expect';
import data from './mockdata';
import renderWithRouter from './renderWithRouter';


let filterByLogin = '';

const handleInput = ({ target }) => {
  filterByLogin = target.value
};

const providerProps = {
  data,
  filterByLogin,
  handleInput,
}

describe('Teste do componente Filter', () => {
  it('Input inicia vazio',() => {

  const {getByTestId} = renderWithRouter(<Filter/>, providerProps);

    const input = getByTestId('input-login');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
  it('Altera o valor do input, que permanece aparente', () => {
    const {getByTestId} = renderWithRouter(<Filter/>, providerProps);
    const input = getByTestId('input-login');

    fireEvent.change(input, { target: { value: 'Acq' } });
    expect(input).toHaveValue('Acq');
  }); 
});