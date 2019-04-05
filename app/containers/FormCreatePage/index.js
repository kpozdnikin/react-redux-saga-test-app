import { connect } from 'react-redux';
import FormCreatePage from './FormCreatePage';

function mapStateToProps(state) {
  const homeState = state.get('home');
  return {
    loading: homeState.get('loading'),
    error: homeState.get('error'),
  };
}

export default connect(mapStateToProps)(FormCreatePage);
