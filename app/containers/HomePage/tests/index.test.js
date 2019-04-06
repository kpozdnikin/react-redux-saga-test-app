import React from 'react';
import { mount, configure } from 'enzyme';
import { fromJS } from 'immutable';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState as homeReducerState } from '../reducer';
import HomePage from '../HomePage';

configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store;

  beforeAll(() => {
    const initialState = fromJS({
      home: homeReducerState,
    });
    store = mockStore(initialState);
  });
  it('should render the HomePage', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(renderedComponent.find('.home-page').length).toBe(1);
  });
});
