import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Breakpoints, ExtendedBreakpoints, SpaceControls } from '../src/enums';
import { removeProps, createClassName, generalClassNames, objectValues, flexboxClassNames } from '../src/utils';
import {FlexVideo} from '../src/components/flex-video';

describe('Utilities', () => {

  describe('removeProps', () => {
    const props = {foo: 1, bar: true, baz: '???'};
    const actual = removeProps(props, ['bar']);
    expect(actual).to.have.property('foo');
    expect(actual).to.have.property('baz');
    expect(actual).to.not.have.property('bar');
  });

  describe('createClassName', () => {
    const className = createClassName('foo', {bar: true, baz: 1 === 2, qux: undefined});
    expect(className).to.equal('foo bar');
  });

  describe('generalClassNames', () => {
    const props = {showFor: Breakpoints.MEDIUM, isHidden: true, showForSr: false, float: 'left'};
    const classNames = generalClassNames(props);
    expect(classNames['show-for-medium']).to.equal.true;
    expect(classNames['hide']).to.equal.true;
    expect(classNames['show-for-sr']).to.equal.false;
    expect(classNames['float-left']).to.equal.true;
  });

  describe('objectValues', () => {
    const obj = {FOO: 'foo', BAR: 'bar', BAZ: 'baz', QUX: 'qux'};
    expect(objectValues(obj)).to.include('foo');
    expect(objectValues(obj)).to.include('bar');
    expect(objectValues(obj)).to.include('baz');
    expect(objectValues(obj)).to.include('qux');
  });

  describe('flexboxClassNames', () => {
    const props = {flexDirRow: ExtendedBreakpoints.MEDIUM, flexOrderSmall: 4, flexChild: SpaceControls.GROW};
    const classNames = generalClassNames(props);
    expect(classNames['medium-flex-dir-row']).to.equal.true;
    expect(classNames['small-order-4']).to.equal.true;
    expect(classNames['flex-child-grow']).to.equal.true;
  });

});
