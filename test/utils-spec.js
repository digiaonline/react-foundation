import { expect } from 'chai';
import { Breakpoints, ExtendedBreakpoints, HorizontalAlignments, SpaceControls, VerticalAlignments } from '../src/enums';
import { createClassName, flexboxClassNames, generalClassNames, objectValues, removeProps } from '../src/utils';

describe('Utilities', () => {

  it('removeProps', () => {
    const props = {foo: 1, bar: true, baz: '???'};
    const actual = removeProps(props, ['bar']);
    expect(actual).to.have.property('foo');
    expect(actual).to.have.property('baz');
    expect(actual).to.not.have.property('bar');
  });

  it('createClassName', () => {
    const className = createClassName('foo', {bar: true, baz: 1 === 2, qux: undefined});
    expect(className).to.equal('foo bar');
  });

  it('generalClassNames', () => {
    const props = {showFor: Breakpoints.MEDIUM, isHidden: true, showForSr: false, float: 'left'};
    const classNames = generalClassNames(props);
    expect(classNames['show-for-medium']).to.equal(true);
    expect(classNames['hide']).to.equal(true);
    expect(classNames['show-for-sr']).to.equal(false);
    expect(classNames['float-left']).to.equal(true);
  });

  it('objectValues', () => {
    const obj = {FOO: 'foo', BAR: 'bar', BAZ: 'baz', QUX: 'qux'};
    expect(objectValues(obj)).to.include('foo');
    expect(objectValues(obj)).to.include('bar');
    expect(objectValues(obj)).to.include('baz');
    expect(objectValues(obj)).to.include('qux');
  });

  it('flexboxClassNames', () => {
    const props = {
      flexDirRow: ExtendedBreakpoints.MEDIUM,
      flexOrder: 2,
      flexOrderSmall: 4,
      flexChild: SpaceControls.GROW,
      selfAlignX: HorizontalAlignments.RIGHT,
      selfAlignY: VerticalAlignments.BOTTOM
    };
    const classNames = flexboxClassNames(props);
    expect(classNames['medium-flex-dir-row']).to.equal('medium');
    expect(classNames['small-order-4']).to.equal(4);
    expect(classNames['flex-child-grow']).to.equal('grow');
    expect(classNames['text-right']).to.equal('right');
    expect(classNames['align-self-bottom']).to.equal('bottom');
  });

});
