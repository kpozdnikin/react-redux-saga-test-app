import React from 'react';
import { mount, configure } from 'enzyme';
import { fromJS } from 'immutable';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FlightForm from '../../../components/FlightForm';
import { initialState as homeReducerState } from '../../HomePage/reducer';
import FormCreatePage from '../index';

configure({ adapter: new Adapter() });

describe('<List />', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store;

  beforeAll(() => {
    const initialState = fromJS({
      home: homeReducerState,
    });
    store = mockStore(initialState);
  });

  it('can render and update a counter', () => {
    // Test first render and effect
    const history = createBrowserHistory();
    act(() => {
      const renderedComponent = mount(
        <Provider store={store}>
          <Router history={history}>
            <FormCreatePage />
          </Router>
        </Provider>,
      );
      expect(renderedComponent.find(FlightForm).length).toBe(1);
    });
  });
});
