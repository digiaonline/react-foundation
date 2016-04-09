import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Reveal } from '../../src/components/reveal';

// TODO: Add test cases for invalid enum values

describe('Reveal component', () => {

  it('sets tag name', () => {
    const component = render(<Reveal/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<Reveal/>);
    expect(component).to.have.className('reveal');
  });

  it('does not set default class name', () => {
    const component = render(<Reveal noDefaultClassName/>);
    expect(component).to.not.have.className('reveal');
  });

  it('sets custom class name', () => {
    const component = render(<Reveal className="my-reveal"/>);
    expect(component).to.have.className('my-reveal');
  });

  it('sets tiny', () => {
    const component = render(<Reveal isTiny/>);
    expect(component).to.have.className('tiny');
    expect(component).to.not.have.attr('isTiny');
  });

  it('sets small', () => {
    const component = render(<Reveal isSmall/>);
    expect(component).to.have.className('small');
    expect(component).to.not.have.attr('isSmall');
  });

  it('sets large', () => {
    const component = render(<Reveal isLarge/>);
    expect(component).to.have.className('large');
    expect(component).to.not.have.attr('isLarge');
  });

  it('sets full', () => {
    const component = render(<Reveal isFullscreen/>);
    expect(component).to.have.className('full');
    expect(component).to.not.have.attr('isFullscreen');
  });

});
