/*
 * FormCreatePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class FormCreatePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="form-create-page">
        <Helmet>
          <title>Create New Flight</title>
          <meta
            name="description"
            content="Page for creating new flight with common data and type select"
          />
        </Helmet>
        <h1>Create New Flight</h1>
      </div>
    );
  }
}
