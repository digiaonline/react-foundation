import React from 'react';

import { render } from 'enzyme';
import { expect } from 'chai';
import { Tabs, TabItem, PanelContainer, PanelItem } from '../../src/components/tabs';

// TODO: Add test cases for invalid enum values

describe('Tabs component', () => {

  it('sets tag name', () => {
    const component = render(<Tabs/>);
    expect(component).to.have.tagName('ul');
  });

  it('sets default class name', () => {
    const component = render(<Tabs/>);
    expect(component).to.have.className('tabs');
  });

  it('does not set default class name', () => {
    const component = render(<Tabs noDefaultClassName/>);
    expect(component).to.not.have.className('tabs');
  });

  it('sets custom class name', () => {
    const component = render(<Tabs className="my-tabs"/>);
    expect(component).to.have.className('my-tabs');
  });

  it('sets vertical', () => {
    const component = render(<Tabs isVertical/>);
    expect(component).to.have.className('vertical');
    expect(component).to.not.have.attr('isVertical');
  });

});

describe('TabItem component', () => {

  it('sets tag name', () => {
    const component = render(<TabItem/>);
    expect(component).to.have.tagName('li');
  });

  it('does not set default class name', () => {
    const component = render(<TabItem noDefaultClassName/>);
    expect(component).to.not.have.className('tabs-content');
  });

  it('sets active', () => {
    const component = render(<TabItem isActive/>);
    expect(component).to.have.className('is-active');
    expect(component).to.not.have.attr('isActive');
  });

  it('sets contents', () => {
    const component = render(<TabItem>Text</TabItem>);
    expect(component).to.have.text('Text');
  });

});

describe('PanelContainer component', () => {

  it('sets tag name', () => {
    const component = render(<PanelContainer/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<PanelContainer/>);
    expect(component).to.have.className('tabs-content');
  });

  it('does not set default class name', () => {
    const component = render(<PanelContainer noDefaultClassName/>);
    expect(component).to.not.have.className('tabs-content');
  });

  it('sets custom class name', () => {
    const component = render(<PanelContainer className="my-panel-container"/>);
    expect(component).to.have.className('my-panel-container');
  });

  it('sets vertical', () => {
    const component = render(<PanelContainer isVertical/>);
    expect(component).to.have.className('vertical');
    expect(component).to.not.have.attr('isVertical');
  });

});

describe('PanelItem component', () => {

  it('sets tag name', () => {
    const component = render(<PanelItem/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<PanelItem/>);
    expect(component).to.have.className('tabs-panel');
  });

  it('does not set default class name', () => {
    const component = render(<PanelItem noDefaultClassName/>);
    expect(component).to.not.have.className('tabs-panel');
  });

  it('sets custom class name', () => {
    const component = render(<PanelItem className="my-panel-item"/>);
    expect(component).to.have.className('my-panel-item');
  });

  it('sets active', () => {
    const component = render(<PanelItem isActive/>);
    expect(component).to.have.className('is-active');
    expect(component).to.not.have.attr('isActive');
  });

});

