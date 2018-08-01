import React from 'react';
import App from '../../../src/js/components/App';

describe('<App /> Component', () => {

  it('Render <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.main_container')).to.have.length(1);
  });
});