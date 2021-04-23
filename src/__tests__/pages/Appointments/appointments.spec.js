import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppointmentList from '../../../pages/Appointments';

describe('AppointmentList Page', () => {
  it('Must contains a filter button', () => {
    render(<AppointmentList />);

    const filterButton = screen.getByRole('button', {
      name: 'Filtrar',
    });

    expect(filterButton).toBeInTheDocument();
  });

  it('Must contains a remove filter button', () => {
    render(<AppointmentList />);

    const removeFilterButton = screen.getByRole('button', {
      name: 'Remover filtro',
    });

    expect(removeFilterButton).toBeInTheDocument();
  });
});
