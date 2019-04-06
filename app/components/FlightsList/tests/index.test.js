import React from 'react';
import { mount, configure } from 'enzyme';
import { fromJS } from 'immutable';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { initialState as homeReducerState } from '../../../containers/HomePage/reducer';
import List from '../../List';
import mockFlights from '../../../tests/flights';
import FlightsList from '../FlightsList';

configure({ adapter: new Adapter() });

describe('<FlightsList />', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store;

  beforeAll(() => {
    const initialState = fromJS({
      home: homeReducerState,
    });
    store = mockStore(initialState);
  });

  it('can render empty FlightsList with loader', () => {
    // Test first render and effect
    const history = createBrowserHistory();
    const error = '';
    const loading = true;
    const flights = {};
    act(() => {
      const renderedComponent = mount(
        <Provider store={store}>
          <Router history={history}>
            <FlightsList
              loading={loading}
              flights={flights}
              error={error}
              getFlights={jest.fn()}
            />
          </Router>
        </Provider>,
      );
      expect(renderedComponent.find(List).length).toBe(0);
      expect(renderedComponent.find('.loading-indicator').length).toBe(1);
    });
  });

  it('can render FlightsList', () => {
    // Test first render and effect
    const history = createBrowserHistory();
    const error = false;
    const loading = false;
    act(() => {
      const renderedComponent = mount(
        <Provider store={store}>
          <Router history={history}>
            <FlightsList
              loading={loading}
              flights={mockFlights}
              error={error}
              getFlights={jest.fn()}
            />
          </Router>
        </Provider>,
      );
      expect(renderedComponent.find(List).length).toBe(1);
      expect(renderedComponent.find('.loading-indicator').length).toBe(0);
    });
  });
});
