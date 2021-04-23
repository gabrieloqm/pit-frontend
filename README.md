# pit-frontend
Desafio referente à implementação do frontend de uma aplicação de agendamento da vacinação contra a COVID-19. Em relação aos agendamentos e sua visualização, devemos seguir algumas regras:

- O agendamento deve ser feito em uma página por um formulário.
- Deve ser criada uma página para consultar os agendamentos marcados.
- O resultado dos agendamentos deve ser agrupado por dia e hora do agendamento.
- O paciente deve informar seu nome, data de nascimento e dia e horário para o agendamento.
- Os campos do formulário devem ter validação, todos são obrigatórios.
- O enfermeiro deve ser capaz de informar o status do atendimento na listagem.
- Quando o usuário recarregar a página, os dados não podem ser perdidos.

## :blue_book: Instruções de uso

- Baixe o repositório através do comando `git clone https://github.com/gabrieloqm/pit-frontend.git`
- Instale os pacotes necessários para esta aplicação através do `yarn` ou `npm install`
- Verifique a variável de ambiente em `.env.example` e crie um arquivo `.env` inserindo o valor para a variável. A API está rodando no endereço `http://localhost:3333`, que é referente a mesma porta definida no projeto `pit-backend`.
- Após iniciar o backend, inicie a aplicação utilizando `yarn start`
- Através do `yarn test`, verifique os resultados dos testes construídos.
