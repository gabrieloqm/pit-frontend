import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { toast } from 'react-toastify';
import TextInput from './TextInput';
import DatePickerField from './DatePicker';
import TimeSelectField from './TimeSelect';
import axios from '../../utils/api';

const VaccineForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const birthDate = moment(values.birthDate).format('DD/MM/YYYY');
    const appointmentDate = moment(values.appointmentTime).format('DD/MM/YYYY');
    // const appointmentTime = moment(values.appointmentTime).format('HH:mm');
    const { name, appointmentTime } = values;
    const age = moment().diff(values.birthDate, 'years', true);

    try {
      const response = await axios.post('/api/appointment', {
        name, birthDate, age, appointmentDate, appointmentTime, isDone: false,
      });
      toast.success(response.data.message);
      resetForm();
    } catch (error) {
      toast.error(error.response.data.message);
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

        <Button className="mt-5 text-center float-right" type="submit">
          Confirmar Agendamento
        </Button>

      </Form>
    </Formik>
  );
};

export default VaccineForm;
