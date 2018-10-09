import React from 'react';
import NoMatch from '../../../../src/js/components/NoMatch';

describe('COMPONENT - NoMatch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoMatch />);
  });

  it('Should render NoMatch component', () => {
    expect(wrapper.find('.no_match')).to.have.length(1);
  });

  it('Should render a section tag with no_match class', () => {
    const expected = 'no_match';
    expect(wrapper.find('section').props().className).to.equal(expected);
  });

  it('Render text "404"', () => {
    const expectedText = '404';
    expect(wrapper.find('div').text()).to.equal(expectedText);
  });

  it('Render text "Oops no page found"', () => {
    const expectedText = 'Oops no page found';
    expect(wrapper.find('h1').text()).to.equal(expectedText);
  });

  it('Render Link "Go Back"', () => {
    const expectedText = 'Go Back';
    const expectedPath = '/';
    expect(wrapper.find('Link').props().to).to.equal(expectedPath);
    expect(wrapper.find('Link').props().children).to.equal(expectedText);
  });
});