/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import Page from '../../components/Page';
import axios from '../../utils/api';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  // const [isDone, setIsDone] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/appointment');
      setAppointments(response.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="Appointments">
      app
      {appointments.length}
      <Table bordered hover>
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
              <td>
                <span>{appointment.appointmentDate}</span>
              </td>
              <td>
                <span>{moment(appointment.appointmentTime).format('HH:mm')}</span>
              </td>
              <td>
                <span>{appointment.name}</span>
              </td>
              <td>
                <span>{`${Math.floor(appointment.age)} anos`}</span>
              </td>
              <td>
                <span />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Page>
  );
}
