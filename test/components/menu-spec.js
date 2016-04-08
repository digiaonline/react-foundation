import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Menu, MenuItem, MenuText, MenuAlignments } from '../../src/components/menu';
import { Alignments } from '../../src/enums';

// TODO: Add test cases for invalid enum values

describe('Menu component', () => {

  it('sets tag name', () => {
    const component = render(<Menu/>);
    expect(component).to.have.tagName('ul');
  });

  it('sets default class name', () => {
    const component = render(<Menu/>);
    expect(component).to.have.className('menu');
  });

  it('does not set default class name', () => {
    const component = render(<Menu noDefaultClassName/>);
    expect(component).to.not.have.className('menu');
  });

  it('sets custom class name', () => {
    const component = render(<Menu className="my-menu"/>);
    expect(component).to.have.className('my-menu');
  });

  it('sets align right', () => {
    const component = render(<Menu alignment={Alignments.RIGHT}/>);
    expect(component).to.have.className('align-right');
    expect(component).to.not.have.attr('alignment');
  });

  it('sets align center', () => {
    const component = render(<Menu alignment={Alignments.CENTER}/>);
    expect(component).to.have.className('align-center');
    expect(component).to.not.have.attr('alignment');
  });

  it('sets icons on top', () => {
    const component = render(<Menu iconsOnTop/>);
    expect(component).to.have.className('icon-top');
    expect(component).to.not.have.attr('iconsOnTop');
  });

  it('sets expanded', () => {
    const component = render(<Menu isExpanded/>);
    expect(component).to.have.className('expanded');
    expect(component).to.not.have.attr('isExpanded');
  });

  it('sets dropdown', () => {
    const component = render(<Menu isDropdown/>);
    expect(component).to.have.className('dropdown');
    expect(component).to.not.have.attr('isDropdown');
  });

  it('sets vertical', () => {
    const component = render(<Menu isVertical/>);
    expect(component).to.have.className('vertical');
    expect(component).to.not.have.attr('isVertical');
  });

  it('sets simple', () => {
    const component = render(<Menu isSimple/>);
    expect(component).to.have.className('simple');
    expect(component).to.not.have.attr('isSimple');
  });

  it('sets nested', () => {
    const component = render(<Menu isNested/>);
    expect(component).to.have.className('nested');
    expect(component).to.not.have.attr('isNested');
  });

  it('sets horizontal on medium', () => {
    const component = render(<Menu horizontalOnMedium/>);
    expect(component).to.have.className('medium-horizontal');
    expect(component).to.not.have.attr('horizontalOnMedium');
  });

});

describe('MenuItem component', () => {

  it('sets tag name', () => {
    const component = render(<MenuItem/>);
    expect(component).to.have.tagName('li');
  });

  it('sets active', () => {
    const component = render(<MenuItem isActive/>);
    expect(component).to.have.className('active');
    expect(component).to.not.have.attr('isActive');
  });

  it('sets contents', () => {
    const component = render(<MenuItem>Text</MenuItem>);
    expect(component).to.have.text('Text');
  });

});

describe('MenuText component', () => {

  it('sets default class name', () => {
    const component = render(<MenuText/>);
    expect(component).to.have.className('menu-text');
  });

  it('sets custom class name', () => {
    const component = render(<MenuText className="my-menu-text"/>);
    expect(component).to.have.className('my-menu-text');
    expect(component).to.not.have.className('menu-text');
  });

});
