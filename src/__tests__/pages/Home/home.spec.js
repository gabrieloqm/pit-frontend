import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../../pages/Home';

describe('Home Page', () => {
  it('Must contains all three forms labels', () => {
    render(<Home />);

    const formsFields = ['Nome', 'Data de nascimento', 'Data do agendamento'];

    formsFields.map((fieldName) => expect(screen.getByText(fieldName)).toBeInTheDocument());
  });

  it('Must contains a submit button', () => {
    render(<Home />);

    const submitButton = screen.getByRole('button', {
      name: 'Confirmar Agendamento',
    });

    expect(submitButton).toBeInTheDocument();
  });
});
