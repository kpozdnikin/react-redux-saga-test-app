import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
// import { shallow } from 'enzyme';
import Table from '@material-ui/core/Table';
import List from '../index';
import items from '../../../tests/flights';

describe('<List />', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List items={items} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('can render and update a counter', () => {
    // Test first render and effect
    act(() => {
      ReactDOM.render(<List items={items} />, container);
    });
    const table = container.querySelector(Table);
    expect(table.textContent).toBe('123');

    /* const button = container.querySelector('button');
    const label = container.querySelector('p');
    expect(label.textContent).toBe('You clicked 0 times');
    expect(document.title).toBe('You clicked 0 times');

    // Test second render and effect
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(label.textContent).toBe('You clicked 1 times');
    expect(document.title).toBe('You clicked 1 times');
  */
  });

  /* it('should render the component if no items are passed', () => {
    const renderedComponent = shallow(<List items={items} />);
    expect(renderedComponent.find(Table)).toBeDefined();
  }); */

  /* it('should pass all items props to rendered component', () => {
    const items = [{ id: 1, name: 'Hello' }, { id: 2, name: 'World' }];

    const component = ({ item }) => <ListItem>{item.name}</ListItem>; // eslint-disable-line react/prop-types

    const renderedComponent = shallow(
      <List items={items} component={component} />
    );
    expect(renderedComponent.find(component)).toHaveLength(2);
    expect(renderedComponent.find(component).at(0).prop('item')).toBe(items[0]);
    expect(renderedComponent.find(component).at(1).prop('item')).toBe(items[1]);
  }); */
});
