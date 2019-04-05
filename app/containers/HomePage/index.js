import { connect } from 'react-redux';
import HomePage from './HomePage';

function mapStateToProps(state) {
  const homeState = state.get('home');
  return {
    loading: homeState.get('loading'),
    error: homeState.get('error'),
  };
}

export default connect(mapStateToProps)(HomePage);
