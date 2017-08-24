import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Row, Column } from '../../src/components/grid';
import { Alignments } from '../../src/enums';

// TODO: Add test cases for invalid enum values

describe('Row component', () => {

  it('sets tag name', () => {
    const component = render(<Row/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<Row/>);
    expect(component).to.have.className('row');
  });

  it('does not set default class name', () => {
    const component = render(<Row noDefaultClassName/>);
    expect(component).to.not.have.className('row');
  });

  it('sets custom class name', () => {
    const component = render(<Row className="my-row"/>);
    expect(component).to.have.className('my-row');
  });

  it('sets up on small', () => {
    const component = render(<Row upOnSmall={1}/>);
    expect(component).to.have.className('small-up-1');
    expect(component).to.not.have.attr('upOnSmall');
  });

  it('sets up on medium', () => {
    const component = render(<Row upOnMedium={2}/>);
    expect(component).to.have.className('medium-up-2');
    expect(component).to.not.have.attr('upOnMedium');
  });

  it('sets up on large', () => {
    const component = render(<Row upOnLarge={3}/>);
    expect(component).to.have.className('large-up-3');
    expect(component).to.not.have.attr('upOnLarge');
  });

  it('sets horizontal alignment', () => {
    const component = render(<Row horizontalAlignment={Alignments.RIGHT}/>);
    expect(component).to.have.className('align-right');
    expect(component).to.not.have.attr('horizontalAlignment');
  });

  it('sets vertical alignment', () => {
    const component = render(<Row verticalAlignment={Alignments.TOP}/>);
    expect(component).to.have.className('align-top');
    expect(component).to.not.have.attr('verticalAlignment');
  });

  it('sets unstack on small', () => {
    const component = render(<Row unstackOnSmall/>);
    expect(component).to.have.className('small-unstack');
    expect(component).to.not.have.attr('unstackOnSmall');
  });

  it('sets unstack on medium', () => {
    const component = render(<Row unstackOnMedium/>);
    expect(component).to.have.className('medium-unstack');
    expect(component).to.not.have.attr('unstackOnMedium');
  });

  it('sets unstack on large', () => {
    const component = render(<Row unstackOnLarge/>);
    expect(component).to.have.className('large-unstack');
    expect(component).to.not.have.attr('unstackOnLarge');
  });

  it('sets collapse on small', () => {
    const component = render(<Row collapseOnSmall/>);
    expect(component).to.have.className('small-collapse');
    expect(component).to.not.have.attr('collapseOnSmall');
  });

  it('sets collapse on medium', () => {
    const component = render(<Row collapseOnMedium/>);
    expect(component).to.have.className('medium-collapse');
    expect(component).to.not.have.attr('collapseOnMedium');
  });

  it('sets collapse on large', () => {
    const component = render(<Row collapseOnLarge/>);
    expect(component).to.have.className('large-collapse');
    expect(component).to.not.have.attr('collapseOnLarge');
  });

  it('sets uncollapse on small', () => {
    const component = render(<Row uncollapseOnSmall/>);
    expect(component).to.have.className('small-uncollapse');
    expect(component).to.not.have.attr('uncollapseOnSmall');
  });

  it('sets uncollapse on medium', () => {
    const component = render(<Row uncollapseOnMedium/>);
    expect(component).to.have.className('medium-uncollapse');
    expect(component).to.not.have.attr('uncollapseOnMedium');
  });

  it('sets uncollapse on large', () => {
    const component = render(<Row uncollapseOnLarge/>);
    expect(component).to.have.className('large-uncollapse');
    expect(component).to.not.have.attr('uncollapseOnLarge');
  });

  it('sets collapse', () => {
    const component = render(<Row isCollapsed/>);
    expect(component).to.have.className('collapse');
    expect(component).to.not.have.attr('isCollapsed');
  });

  it('sets column', () => {
    const component = render(<Row isColumn/>);
    expect(component).to.have.className('column');
    expect(component).to.not.have.attr('isColumn');
  });

  it('sets expanded', () => {
    const component = render(<Row isExpanded/>);
    expect(component).to.have.className('expanded');
    expect(component).to.not.have.attr('isExpanded');
  });

});

describe('Column component', () => {

  it('sets tag name', () => {
    const component = render(<Column/>);
    expect(component).to.have.tagName('div');
  });

  it('sets default class name', () => {
    const component = render(<Column/>);
    expect(component).to.have.className('columns');
  });

  it('does not set default class name', () => {
    const component = render(<Column noDefaultClassName/>);
    expect(component).to.not.have.className('columns');
  });

  it('sets custom class name', () => {
    const component = render(<Column className="my-column"/>);
    expect(component).to.have.className('my-column');
  });

  it('sets small', () => {
    const component = render(<Column small={12}/>);
    expect(component).to.have.className('small-12');
    expect(component).to.not.have.attr('small');
  });

  it('sets medium', () => {
    const component = render(<Column medium={6}/>);
    expect(component).to.have.className('medium-6');
    expect(component).to.not.have.attr('medium');
  });

  it('sets large', () => {
    const component = render(<Column large={4}/>);
    expect(component).to.have.className('large-4');
    expect(component).to.not.have.attr('large');
  });

  it('sets offset on small', () => {
    const component = render(<Column offsetOnSmall={1}/>);
    expect(component).to.have.className('small-offset-1');
    expect(component).to.not.have.attr('offsetOnSmall');
  });

  it('sets offset on medium', () => {
    const component = render(<Column offsetOnMedium={2}/>);
    expect(component).to.have.className('medium-offset-2');
    expect(component).to.not.have.attr('offsetOnMedium');
  });

  it('sets offset on large', () => {
    const component = render(<Column offsetOnLarge={3}/>);
    expect(component).to.have.className('large-offset-3');
    expect(component).to.not.have.attr('offsetOnLarge');
  });

  it('sets push on small', () => {
    const component = render(<Column pushOnSmall={1}/>);
    expect(component).to.have.className('small-push-1');
    expect(component).to.not.have.attr('pushOnSmall');
  });

  it('sets push on medium', () => {
    const component = render(<Column pushOnMedium={2}/>);
    expect(component).to.have.className('medium-push-2');
    expect(component).to.not.have.attr('pushOnMedium');
  });

  it('sets push on large', () => {
    const component = render(<Column pushOnLarge={3}/>);
    expect(component).to.have.className('large-push-3');
    expect(component).to.not.have.attr('pushOnLarge');
  });

  it('sets order on small', () => {
    const component = render(<Column orderOnSmall={1}/>);
    expect(component).to.have.className('small-order-1');
    expect(component).to.not.have.attr('orderOnSmall');
  });

  it('sets order on medium', () => {
    const component = render(<Column orderOnMedium={2}/>);
    expect(component).to.have.className('medium-order-2');
    expect(component).to.not.have.attr('orderOnMedium');
  });

  it('sets order on large', () => {
    const component = render(<Column orderOnLarge={3}/>);
    expect(component).to.have.className('large-order-3');
    expect(component).to.not.have.attr('orderOnLarge');
  });

  it('sets center on small', () => {
    const component = render(<Column centerOnSmall/>);
    expect(component).to.have.className('small-centered');
    expect(component).to.not.have.attr('centerOnSmall');
  });

  it('sets center on medium', () => {
    const component = render(<Column centerOnMedium/>);
    expect(component).to.have.className('medium-centered');
    expect(component).to.not.have.attr('centerOnMedium');
  });

  it('sets center on large', () => {
    const component = render(<Column centerOnLarge/>);
    expect(component).to.have.className('large-centered');
    expect(component).to.not.have.attr('centerOnLarge');
  });

  it('sets uncenter on small', () => {
    const component = render(<Column uncenterOnSmall/>);
    expect(component).to.have.className('small-uncentered');
    expect(component).to.not.have.attr('uncenterOnSmall');
  });

  it('sets uncenter on medium', () => {
    const component = render(<Column uncenterOnMedium/>);
    expect(component).to.have.className('medium-uncentered');
    expect(component).to.not.have.attr('uncenterOnMedium');
  });

  it('sets uncenter on large', () => {
    const component = render(<Column uncenterOnLarge/>);
    expect(component).to.have.className('large-uncentered');
    expect(component).to.not.have.attr('uncenterOnLarge');
  });

  it('sets expand on small', () => {
    const component = render(<Column expandOnSmall/>);
    expect(component).to.have.className('small-expand');
    expect(component).to.not.have.attr('expandOnSmall');
  });

  it('sets expand on medium', () => {
    const component = render(<Column expandOnMedium/>);
    expect(component).to.have.className('medium-expand');
    expect(component).to.not.have.attr('expandOnMedium');
  });

  it('sets expand on large', () => {
    const component = render(<Column expandOnLarge/>);
    expect(component).to.have.className('large-expand');
    expect(component).to.not.have.attr('expandOnLarge');
  });

  it('sets shrink', () => {
    const component = render(<Column isShrunk/>);
    expect(component).to.have.className('shrink');
    expect(component).to.not.have.attr('isShrunk');
  });

  it('sets last', () => {
    const component = render(<Column isLast/>);
    expect(component).to.have.className('end');
    expect(component).to.not.have.attr('isLast');
  });

  it('sets column', () => {
    const component = render(<Column isColumn/>);
    expect(component).to.have.className('column');
    expect(component).to.not.have.className('columns');
  });

});
