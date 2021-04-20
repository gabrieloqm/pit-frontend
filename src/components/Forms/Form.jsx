import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import TextInput from './TextInput';
import DatePickerField from './DatePicker';
import TimeSelectField from './TimeSelect';
import axios from '../../utils/api';

const VaccineForm = () => {
  const handleSubmit = async () => { // Testando a conexão com o backend e o db
    try {
      const response = await axios.get('/api/appointment');
      console.log(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        birthDate: null,
        appointmentTime: null,
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Campo obrigatório!').matches(/^[A-Za-z ]*$/, 'Por favor, insira um nome válido!'),
        birthDate: Yup.date().required('Campo obrigatório!').nullable(),
        appointmentTime: Yup.date().required('Campo obrigatório!').nullable(),
      })}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className="mt-5">
        <TextInput
          label="Nome"
          name="name"
          type="text"
          placeholder="Insira seu nome"
        />
        <br />

        <DatePickerField
          label="Data de nascimento"
          name="birthDate"
          placeholderText="Insira sua data de nascimento"
        />
        <br />

        <TimeSelectField
          label="Data do agendamento"
          name="appointmentTime"
          placeholderText="Selecione o dia e horário do seu agendamento"
        />

        <Button className="mt-5 text-center float-right" type="submit"> Confirmar Agendamento</Button>
      </Form>
    </Formik>
  );
};

export default VaccineForm;
