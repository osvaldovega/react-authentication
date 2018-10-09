import React from 'react';
import About from '../../../../src/js/components/About';

describe('COMPONENT - About', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it('Should render About component', () => {
    expect(wrapper.find('.about')).to.have.length(1);
  });

  it('Should render a section tag with about class', () => {
    const expected = 'about';
    expect(wrapper.find('section').props().className).to.equal(expected);
  });

  it('Render text "About Screen"', () => {
    const expectedText = "About Screen";
    expect(wrapper.find('h3').text()).to.equal(expectedText);
  });
});