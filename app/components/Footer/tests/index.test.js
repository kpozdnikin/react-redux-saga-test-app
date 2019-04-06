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
import Footer from '..';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store;

  beforeAll(() => {
    const initialState = fromJS({
      home: homeReducerState,
    });
    store = mockStore(initialState);
  });

  it('can render Footer', () => {
    // Test first render and effect
    const history = createBrowserHistory();
    act(() => {
      const renderedComponent = mount(
        <Provider store={store}>
          <Router history={history}>
            <Footer />
          </Router>
        </Provider>,
      );
      expect(renderedComponent.find('footer').length).toBe(1);
      expect(renderedComponent.find('a').length).toBe(1);
      expect(renderedComponent.find('a').text()).toBe('Pozdnikin Konstantin');
    });
  });
});
