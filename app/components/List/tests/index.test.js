import React from 'react';
import { mount, configure } from 'enzyme';
import { fromJS } from 'immutable';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { initialState as homeReducerState } from '../../../containers/HomePage/reducer';
import List from '../index';
import items from '../../../tests/flights';

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

  it('can render List, Table and FilterFIeld', () => {
    // Test first render and effect
    act(() => {
      const renderedComponent = mount(
        <Provider store={store}>
          <List items={items} />
        </Provider>,
      );
      expect(renderedComponent.find(TextField).length).toBe(1);
      expect(renderedComponent.find(Table).length).toBe(0);
    });
  });

  it('can render List and click header', () => {
    // Test first render and effect
    const newItems = {
      cheap: items.cheap,
      business: items.business,
      all: items.cheap,
    };
    act(() => {
      const renderedComponent = mount(
        <Provider store={store}>
          <List items={newItems} />
        </Provider>,
      );
      expect(renderedComponent.find(Table).length).toBe(1);
      expect(renderedComponent.find(TableSortLabel).length).toBe(5);
      renderedComponent.find(TableSortLabel).forEach(node => {
        node.simulate('click');
      });
    });
  });
});
