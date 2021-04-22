/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import Page from '../../components/Page';
import axios from '../../utils/api';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/appointment');
      setAppointments(response.data.data);
      toast.info(response.data.message);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChecked = async (event, _editAppointment) => {
    const { checked: completed } = event.target;

    const newAppointments = appointments.map((appointment) => {
      if (appointment._id === _editAppointment._id) {
        return {
          ...appointment,
          isDone: completed,
        };
      }
      return appointment;
    });

    try {
      const response = await axios.put(
        `api/appointment/${_editAppointment._id}`,
        { ..._editAppointment, isDone: completed },
      );
      setAppointments(newAppointments);
      toast.info(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Page title="Lista de Agendamentos">
      {!isLoading && appointments.length === 0 && (
        <h4 className="mt-5 text-center">
          Olá! Ainda não existe nenhum agendamento para vacinação contra
          COVID-19.
        </h4>
      )}
      {!isLoading && appointments.length > 0 && (
        <Table bordered hover responsive="lg" className="mt-5">
          <thead>
            <tr>
              <th width="15%">Data do atendimento</th>
              <th width="15%">Horário do atendimento</th>
              <th width="40%">Nome do paciente</th>
              <th width="15%">Idade do paciente</th>
              <th width="15%">Status do atendimento</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.appointmentDate}</td>
                <td>{moment(appointment.appointmentTime).format('HH:mm')}</td>
                <td>{appointment.name}</td>
                <td>{`${Math.floor(appointment.age)} anos`}</td>
                <td>
                  <input
                    checked={appointment.isDone}
                    onChange={(event) => handleChecked(event, appointment)}
                    type="checkbox"
                  />
                  {appointment.isDone ? (
                    <span id="completed-message">Atendimento Concluído!</span>
                  ) : (
                    <span id="pending-message">Atendimento Pendente!</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Page>
  );
}
