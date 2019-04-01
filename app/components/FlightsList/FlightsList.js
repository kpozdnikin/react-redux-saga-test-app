import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import ListItem from '../ListItem';
import LoadingIndicator from '../LoadingIndicator';
import RepoListItem from '../../containers/RepoListItem';

class FlightsList extends React.Component {
  componentDidMount() {
    const { getFlights } = this.props;
    getFlights(0, 5);
  }

  render() {
    const { loading, flights, error } = this.props;
    if (loading) {
      return <List component={LoadingIndicator} />;
    }
    if (error !== false) {
      const ErrorComponent = () => (
        <ListItem item="Something went wrong, please try again!" />
      );
      return <List component={ErrorComponent} />;
    }
    if (flights !== false) {
      return <List items={flights} component={RepoListItem} />;
    }
    return null;
  }
}

FlightsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  flights: PropTypes.array.isRequired,
  getFlights: PropTypes.func.isRequired,
};

FlightsList.defaultProps = {
  error: null,
};

export default FlightsList;
