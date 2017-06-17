import React from 'react';

import { render } from 'enzyme';
import { expect } from 'chai';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from '../../src/components/accordion';

describe('Accordion component', () => {

  it('sets tag name', () => {
    const component = render(<Accordion/>);
    expect(component).to.have.tagName('ul');
  });

  it('sets default class name', () => {
    const component = render(<Accordion/>);
    expect(component).to.have.className('accordion');
  });

  it('does not set default class name', () => {
    const component = render(<Accordion noDefaultClassName/>);
    expect(component).to.not.have.className('accordion');
  });

  it('sets custom class name', () => {
    const component = render(<Accordion className="my-accordion"/>);
    expect(component).to.have.className('my-accordion');
  });

  it('sets contents', () => {
    const component = render(<Accordion>Text</Accordion>);
    expect(component).to.have.text('Text');
  });

});

describe('AccordionItem component', () => {

  it('sets tag name', () => {
    const component = render(<AccordionItem/>);
    expect(component).to.have.tagName('li');
  });

  it('sets default class name', () => {
    const component = render(<AccordionItem/>);
    expect(component).to.have.className('accordion-item');
  });

  it('does not set default class name', () => {
    const component = render(<AccordionItem noDefaultClassName/>);
    expect(component).to.not.have.className('accordion-content');
  });

  it('sets active', () => {
    const component = render(<AccordionItem isActive/>);
    expect(component).to.have.className('is-active');
    expect(component).to.not.have.attr('isActive');
  });

  it('sets contents', () => {
    const component = render(<AccordionItem>Text</AccordionItem>);
    expect(component).to.have.text('Text');
  });

});

describe('AccordionTitle component', () => {

  it('sets tag name', () => {
    const component = render(<AccordionTitle/>);
    expect(component).to.have.tagName('a');
  });

  it('sets default class name', () => {
    const component = render(<AccordionTitle/>);
    expect(component).to.have.className('accordion-title');
  });

  it('does not set default class name', () => {
    const component = render(<AccordionTitle noDefaultClassName/>);
    expect(component).to.not.have.className('accordion-title');
  });

  it('sets custom class name', () => {
    const component = render(<AccordionTitle className="my-accordion-title"/>);
    expect(component).to.have.className('my-accordion-title');
  });

  it('sets contents', () => {
    const component = render(<AccordionTitle>Text</AccordionTitle>);
    expect(component).to.have.text('Text');
  });

});

describe('AccordionContent component', () => {

  it('sets tag name', () => {
    const component = render(<AccordionContent/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<AccordionContent/>);
    expect(component).to.have.className('accordion-content');
  });

  it('does not set default class name', () => {
    const component = render(<AccordionContent noDefaultClassName/>);
    expect(component).to.not.have.className('accordion-content');
  });

  it('sets custom class name', () => {
    const component = render(<AccordionContent className="my-accordion-container"/>);
    expect(component).to.have.className('my-accordion-container');
  });

  it('sets active', () => {
    const component = render(<AccordionContent isActive/>);
    expect(component).to.have.className('is-active');
    expect(component).to.not.have.attr('isActive');
  });

  it('sets contents', () => {
    const component = render(<AccordionContent>Text</AccordionContent>);
    expect(component).to.have.text('Text');
  });

});