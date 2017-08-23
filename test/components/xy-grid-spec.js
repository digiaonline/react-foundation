import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { GutterTypes, ExtendedBreakpoints } from '../../src/enums'
import { GridContainer, Grid, Cell } from '../../src/components/xy-grid';

describe('GridContainer component', () => {

  it('sets tag name', () => {
    const component = render(<GridContainer/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<GridContainer/>);
    expect(component).to.have.className('grid-container');
  });

  it('does not set default class name', () => {
    const component = render(<GridContainer noDefaultClassName/>);
    expect(component).to.not.have.className('grid-container');
  });

  it('sets custom class name', () => {
    const component = render(<GridContainer className="my-row"/>);
    expect(component).to.have.className('my-row');
  });

  it('sets fluid', () => {
    const component = render(<GridContainer fluid/>);
    expect(component).to.have.className('fluid');
  });

  it('sets full', () => {
    const component = render(<GridContainer full/>);
    expect(component).to.have.className('full');
  });

});

describe('Grid component', () => {

  it('sets tag name', () => {
    const component = render(<Grid/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name with horizontal direction', () => {
    const component = render(<Grid/>);
    expect(component).to.have.className('grid-x');
  });

  it('sets direction to vertical', () => {
    const component = render(<Grid vertical/>);
    expect(component).to.have.className('grid-y');
  });

  it('does not set default class name', () => {
    const component = render(<Grid noDefaultClassName/>);
    expect(component).to.not.have.className('grid-x');
  });

  it('sets custom class name', () => {
    const component = render(<Grid className="my-row"/>);
    expect(component).to.have.className('my-row');
  });

  it('sets margin gutters in horizontal direction', () => {
    const component = render(<Grid gutters={GutterTypes.MARGIN}/>);
    expect(component).to.have.className('grid-margin-x');
  });

  it('sets padding gutters in vertical direction', () => {
    const component = render(<Grid vertical gutters={GutterTypes.PADDING}/>);
    expect(component).to.have.className('grid-padding-y');
  });

  it('sets up on small', () => {
    const component = render(<Grid upOnSmall={1}/>);
    expect(component).to.have.className('small-up-1');
    expect(component).to.not.have.attr('up');
  });

  it('sets up on medium', () => {
    const component = render(<Grid upOnMedium={2}/>);
    expect(component).to.have.className('medium-up-2');
    expect(component).to.not.have.attr('up');
  });

  it('sets up on large', () => {
    const component = render(<Grid upOnLarge={3}/>);
    expect(component).to.have.className('large-up-3');
    expect(component).to.not.have.attr('up');
  });

  it('removes padding gutters on small', () => {
    const component = render(<Grid collapseOnSmall={GutterTypes.PADDING}/>);
    expect(component).to.have.className('small-padding-collapse');
    expect(component).to.not.have.attr('collapseOnSmall');
  });

  it('removes margin gutters on medium', () => {
    const component = render(<Grid collapseOnMedium={GutterTypes.MARGIN}/>);
    expect(component).to.have.className('medium-margin-collapse');
    expect(component).to.not.have.attr('collapseOnMedium');
  });

  it('removes padding gutters on large', () => {
    const component = render(<Grid collapseOnLarge={GutterTypes.PADDING}/>);
    expect(component).to.have.className('large-padding-collapse');
    expect(component).to.not.have.attr('collapseOnLarge');
  });

  it('sets grid frame', () => {
    const component = render(<Grid gridFrame={ExtendedBreakpoints.ALL}/>);
    expect(component).to.have.className('grid-frame');
  });

  it('sets grid frame on small', () => {
    const component = render(<Grid gridFrame={ExtendedBreakpoints.SMALL}/>);
    expect(component).to.have.className('small-grid-frame');
  });

  it('sets grid frame on medium', () => {
    const component = render(<Grid gridFrame={ExtendedBreakpoints.MEDIUM}/>);
    expect(component).to.have.className('medium-grid-frame');
  });

  it('sets grid frame on large', () => {
    const component = render(<Grid gridFrame={ExtendedBreakpoints.LARGE}/>);
    expect(component).to.have.className('large-grid-frame');
  });
});

describe('Cell component', () => {

  it('sets tag name', () => {
    const component = render(<Cell/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<Cell/>);
    expect(component).to.have.className('cell');
  });

  it('does not set default class name', () => {
    const component = render(<Cell noDefaultClassName/>);
    expect(component).to.not.have.className('cell');
  });

  it('sets custom class name', () => {
    const component = render(<Cell className="my-column"/>);
    expect(component).to.have.className('my-column');
  });

  it('sets small', () => {
    const component = render(<Cell small={12}/>);
    expect(component).to.have.className('small-12');
    expect(component).to.not.have.attr('small');
  });

  it('sets medium', () => {
    const component = render(<Cell medium={6}/>);
    expect(component).to.have.className('medium-6');
    expect(component).to.not.have.attr('medium');
  });

  it('sets large', () => {
    const component = render(<Cell large={4}/>);
    expect(component).to.have.className('large-4');
    expect(component).to.not.have.attr('large');
  });

  it('sets offset on small', () => {
    const component = render(<Cell offsetOnSmall={1}/>);
    expect(component).to.have.className('small-offset-1');
    expect(component).to.not.have.attr('offsetOnSmall');
  });

  it('sets offset on medium', () => {
    const component = render(<Cell offsetOnMedium={2}/>);
    expect(component).to.have.className('medium-offset-2');
    expect(component).to.not.have.attr('offsetOnMedium');
  });

  it('sets offset on large', () => {
    const component = render(<Cell offsetOnLarge={3}/>);
    expect(component).to.have.className('large-offset-3');
    expect(component).to.not.have.attr('offsetOnLarge');
  });

  it('sets autosizing', () => {
    const component = render(<Cell auto={ExtendedBreakpoints.ALL}/>);
    expect(component).to.have.className('auto');
  });

  it('sets autosizing on small', () => {
    const component = render(<Cell auto={ExtendedBreakpoints.SMALL}/>);
    expect(component).to.have.className('small-auto');
  });

  it('sets autosizing on medium', () => {
    const component = render(<Cell auto={ExtendedBreakpoints.MEDIUM}/>);
    expect(component).to.have.className('medium-auto');
  });

  it('sets autosizing on large', () => {
    const component = render(<Cell auto={ExtendedBreakpoints.LARGE}/>);
    expect(component).to.have.className('large-auto');
  });

  it('sets shrink', () => {
    const component = render(<Cell shrink={ExtendedBreakpoints.ALL}/>);
    expect(component).to.have.className('shrink');
  });

  it('sets shrink on small', () => {
    const component = render(<Cell shrink={ExtendedBreakpoints.SMALL}/>);
    expect(component).to.have.className('small-shrink');
  });

  it('sets shrink on medium', () => {
    const component = render(<Cell shrink={ExtendedBreakpoints.MEDIUM}/>);
    expect(component).to.have.className('medium-shrink');
  });

  it('sets shrink on large', () => {
    const component = render(<Cell shrink={ExtendedBreakpoints.LARGE}/>);
    expect(component).to.have.className('large-shrink');
  });
});
