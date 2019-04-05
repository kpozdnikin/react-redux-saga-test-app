/*
 * FormCreatePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import FlightForm from '../../components/FlightForm';
import './style.scss';

const FormCreatePage = () => (
  <div className="form-create-page">
    <Helmet>
      <title>Create New Flight</title>
      <meta
        name="description"
        content="Page for creating new flight with common data and type select"
      />
    </Helmet>
    <h1>Create New Flight</h1>
    <section>
      <h2>Try me!</h2>
      <FlightForm />
    </section>
  </div>
);

export default FormCreatePage;
