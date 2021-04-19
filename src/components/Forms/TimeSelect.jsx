/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import DatePicker from 'react-datepicker';
import { useField, useFormikContext } from 'formik';
import { Col, Row, Container } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

function TimeSelectField({ label, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  const { name } = props;
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={3}><label htmlFor={name}><b>{label}</b></label></Col>
        <Col>
          <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={(val) => {
              setFieldValue(field.name, val);
            }}
            showTimeSelect
            dateFormat="dd/MM/yyyy  h:mm aa"
            timeIntervals={60}
            minDate={new Date()}
          />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </Col>

      </Row>

    </Container>
  );
}

export default TimeSelectField;
