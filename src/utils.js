import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Breakpoints, FloatTypes } from './enums';

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
 * Sets grid and gutters direction (horizontal or vertical).
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
