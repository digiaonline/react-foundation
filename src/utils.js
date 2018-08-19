import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Breakpoints, FloatTypes, HorizontalAlignments, VerticalAlignments, SpaceControls, ExtendedBreakpoints } from './enums';

/**
 * Property types for general properties.
 *
 * @returns {Object}
 */
export const GeneralPropTypes = {
  showFor: PropTypes.oneOf([Breakpoints.MEDIUM, Breakpoints.LARGE]),
  showOnlyFor: PropTypes.oneOf(objectValues(Breakpoints)),
  hideFor: PropTypes.oneOf([Breakpoints.MEDIUM, Breakpoints.LARGE]),
  hideOnlyFor: PropTypes.oneOf(objectValues(Breakpoints)),
  isHidden: PropTypes.bool,
  isInvisible: PropTypes.bool,
  showForLandscape: PropTypes.bool,
  showForPortrait: PropTypes.bool,
  showForSr: PropTypes.bool,
  showOnFocus: PropTypes.bool,
  isClearfix: PropTypes.bool,
  float: PropTypes.oneOf(objectValues(FloatTypes))
};

/**
 * Creates class names from the given arguments.
 *
 * @param {*} args
 * @returns {string}
 */
export function createClassName(...args) {
  return classNames(...args);
}

/**
 * Parses the general class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */
export function generalClassNames(props) {
  return {
    'show-for-medium': props.showFor === Breakpoints.MEDIUM,
    'show-for-large': props.showFor === Breakpoints.LARGE,
    'show-for-small-only': props.showOnlyFor === Breakpoints.SMALL,
    'show-for-medium-only': props.showOnlyFor === Breakpoints.MEDIUM,
    'show-for-large-only': props.showOnlyFor === Breakpoints.LARGE,
    'hide-for-medium': props.hideFor === Breakpoints.MEDIUM,
    'hide-for-large': props.hideFor === Breakpoints.LARGE,
    'hide-for-small-only': props.hideOnlyFor === Breakpoints.SMALL,
    'hide-for-medium-only': props.hideOnlyFor === Breakpoints.MEDIUM,
    'hide-for-large-only': props.hideOnlyFor === Breakpoints.LARGE,
    'hide': props.isHidden,
    'invisible': props.isInvisible,
    'show-for-landscape': props.showForLandscape,
    'show-for-portrait': props.showForPortrait,
    'show-for-sr': props.showForSr,
    'show-on-focus': props.showOnFocus,
    'clearfix': props.isClearfix,
    'float-left': props.float === FloatTypes.LEFT,
    'float-center': props.float === FloatTypes.CENTER,
    'float-right': props.float === FloatTypes.RIGHT
  };
}

/**
 * Returns the keys for the given object.
 * This method is used for getting the keys for prop types.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectKeys(object) {
  return Object.keys(object);
}

/**
 * Returns the values for the given object.
 * This method is used for getting the values for enumerables.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectValues(object) {
  const values = [];

  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      values.push(object[property]);
    }
  }

  return values;
}

/**
 * Removes properties from the given object.
 * This method is used for removing valid attributes from component props prior to rendering.
 *
 * @param {Object} object
 * @param {Array} remove
 * @returns {Object}
 */
export function removeProps(object, remove) {
  const result = {};

  for (const property in object) {
    if (object.hasOwnProperty(property) && remove.indexOf(property) === -1) {
      result[property] = object[property];
    }
  }

  return result;
}

/**
 * Returns whether or not the given value is defined.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isDefined(value) {
  return typeof value !== 'undefined';
}

/**
 * Adds a breakpoint to a class if breakpoint is specified.
 *
 * @param {String} prop
 * @param {String} size
 * @returns {string}
 */
export function addBreakpoint(prop, size) {
  return size === 'all' ? prop : `${size}-${prop}`;
}

/**
 * Sets direction for grid and gutters (horizontal or vertical).
 *
 * @param {boolean} isVertical
 * @param {String} gutters
 * @returns {string}
 */
export function setDirection(isVertical, gutters = null) {
  if (gutters) {
    return isVertical === true ? `grid-${gutters}-y` : `grid-${gutters}-x`;
  } else {
    return isVertical === true ? 'grid-y' : 'grid-x';
  }
}

// Flexbox Utilities

/**
 * Property types for flexbox utilities.
 *
 * @returns {Object}
 */
export const FlexboxPropTypes = {
  alignX: PropTypes.oneOf(objectValues(HorizontalAlignments)),
  alignY: PropTypes.oneOf(objectValues(VerticalAlignments)),
  selfAlignX: PropTypes.oneOf(objectValues(HorizontalAlignments)),
  selfAlignY: PropTypes.oneOf(objectValues(VerticalAlignments)),
  centerAlign: PropTypes.bool,
  flexContainer: PropTypes.bool,
  flexDirRow: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  flexDirRowRev: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  flexDirCol: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  flexDirColRev: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  flexChild: PropTypes.oneOf(objectValues(SpaceControls)),
  flexOrder: PropTypes.number,
  flexOrderSmall: PropTypes.number,
  flexOrderMedium: PropTypes.number,
  flexOrderLarge: PropTypes.number,
};

/**
 * Parses the flexbox class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */
export function flexboxClassNames(props) {
  return {
    'flex-container': props.flexContainer,
    'align-center-middle': props.centerAlign,
    [`align-${props.alignX}`]: props.alignX,
    [`align-${props.alignY}`]: props.alignY,
    [addBreakpoint('flex-dir-row', props.flexDirRow)]: props.flexDirRow,
    [addBreakpoint('flex-dir-row-reverse', props.flexDirRowRev)]: props.flexDirRowRev,
    [addBreakpoint('flex-dir-column', props.flexDirCol)]: props.flexDirCol,
    [addBreakpoint('flex-dir-column-reverse', props.flexDirColRev)]: props.flexDirColRev,
    [`flex-child-${props.flexChild}`]: props.flexChild,
    [`order-${props.flexOrder}`]: props.flexOrder,
    [`small-order-${props.flexOrder}`]: props.flexOrderSmall,
    [`medium-order-${props.flexOrder}`]: props.flexOrderMedium,
    [`large-order-${props.flexOrder}`]: props.flexOrderLarge
  };
}
