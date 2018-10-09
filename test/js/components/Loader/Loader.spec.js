import React from 'react';
import Loader from '../../../../src/js/components/Loader';

describe('COMPONENT - Loader', () => {

  it('Render <Loader /> Component', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('.loader')).to.have.length(1);
  });
});