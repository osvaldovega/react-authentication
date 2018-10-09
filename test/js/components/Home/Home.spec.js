import React from 'react';
import Home from '../../../../src/js/components/Home';

describe('COMPONENT - Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('Should render Home component', () => {
    expect(wrapper.find('.home')).to.have.length(1);
  });

  it('Should render a section tag with home class', () => {
    const expected = 'home';
    expect(wrapper.find('section').props().className).to.equal(expected);
  });

  it('Render text "Home Screen"', () => {
    const expectedText = "Home Screen";
    expect(wrapper.find('h3').text()).to.equal(expectedText);
  });
});