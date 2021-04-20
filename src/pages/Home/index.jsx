import React from 'react';
import Page from '../../components/Page';
import VaccineForm from '../../components/Forms/Form';

export default function Home() {
  return (
    <Page title="Olá, seja bem-vindo! Preencha as informações abaixo para confirmar seu agendamento.">
      <VaccineForm />
    </Page>
  );
}
