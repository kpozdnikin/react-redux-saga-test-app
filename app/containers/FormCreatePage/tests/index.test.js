import React from 'react';
import { shallow } from 'enzyme';

import FormCreatePage from '../index';

describe('<FormCreatePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<FormCreatePage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<FormCreatePage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
