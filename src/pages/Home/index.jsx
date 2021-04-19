import React from 'react';
import Page from '../../components/Page';
import SignupForm from '../../components/Forms/Form';

export default function Home() {
  return (
    <Page title="Olá, seja bem-vindo! Preencha as informações abaixo para confirmar seu agendamento.">
      <SignupForm />
    </Page>
  );
}
