import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import List from '../List';
import LoadingIndicator from '../LoadingIndicator';

class FlightsList extends React.Component {
  componentDidMount() {
    const { getFlights } = this.props;
    getFlights(0, 5);
  }

  render() {
    const { loading, flights, error } = this.props;
    console.log('flight list props', this.props);
    if (loading) {
      return <ul>{LoadingIndicator}</ul>;
    }
    if (error !== false) {
      return (
        <div className="error">Something went wrong, please try again!</div>
      );
    }
    if (!isEmpty(flights)) {
      return <List items={flights} />;
    }
    return null;
  }
}

FlightsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType(PropTypes.string, PropTypes.boolean),
  flights: PropTypes.object.isRequired,
  getFlights: PropTypes.func.isRequired,
};

FlightsList.defaultProps = {
  error: null,
};

export default FlightsList;
