import React from 'react';
import PropTypes from 'prop-types';
import { GutterTypes, ExtendedBreakpoints } from '../enums';
import {
  GeneralPropTypes,
  FlexboxPropTypes,
  createClassName,
  generalClassNames,
  flexboxClassNames,
  removeProps,
  objectKeys,
  isDefined,
  objectValues,
  addBreakpoint,
  setDirection
 } from '../utils';

/**
 * Grid container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const GridContainer = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'grid-container',
    props.className,
    {
      'fluid': props.fluid,
      'full': props.full
    },
    generalClassNames(props),
    flexboxClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(GridContainer.propTypes));

  return <div {...passProps} className={className}/>;
};

GridContainer.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  fluid: PropTypes.bool,
  full: PropTypes.bool
};

/**
 * Grid component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Grid = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : setDirection(props.vertical),
    props.className,
    isDefined(props.gutters) ? setDirection(props.vertical, props.gutters) : null,
    isDefined(props.upOnSmall) ? `small-up-${props.upOnSmall}` : null,
    isDefined(props.upOnMedium) ? `medium-up-${props.upOnMedium}` : null,
    isDefined(props.upOnLarge) ? `large-up-${props.upOnLarge}` : null,
    isDefined(props.collapseOnSmall) ? `small-${props.collapseOnSmall}-collapse` : null,
    isDefined(props.collapseOnMedium) ? `medium-${props.collapseOnMedium}-collapse` : null,
    isDefined(props.collapseOnLarge) ? `large-${props.collapseOnLarge}-collapse` : null,
    isDefined(props.gridFrame) ? addBreakpoint('grid-frame', props.gridFrame) : null,
    generalClassNames(props),
    flexboxClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Grid.propTypes));

  return <div {...passProps} className={className}/>;
};

Grid.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  vertical: PropTypes.bool,
  gutters: PropTypes.oneOf(objectValues(GutterTypes)),
  upOnSmall: PropTypes.number,
  upOnMedium: PropTypes.number,
  upOnLarge: PropTypes.number,
  collapseOnSmall: PropTypes.oneOf(objectValues(GutterTypes)),
  collapseOnMedium: PropTypes.oneOf(objectValues(GutterTypes)),
  collapseOnLarge: PropTypes.oneOf(objectValues(GutterTypes)),
  gridFrame: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
};

/**
 * Cell component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Cell = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'cell',
    props.className,
    props.small ? `small-${props.small}` : null,
    props.medium ? `medium-${props.medium}` : null,
    props.large ? `large-${props.large}` : null,
    isDefined(props.auto) ? addBreakpoint('auto', props.auto) : null,
    isDefined(props.shrink) ? addBreakpoint('shrink', props.shrink) : null,
    isDefined(props.offsetOnSmall) ? `small-offset-${props.offsetOnSmall}` : null,
    isDefined(props.offsetOnMedium) ? `medium-offset-${props.offsetOnMedium}` : null,
    isDefined(props.offsetOnLarge) ? `large-offset-${props.offsetOnLarge}` : null,
    generalClassNames(props),
    flexboxClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Cell.propTypes));

  return <div {...passProps} className={className}/>;
};

Cell.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  auto: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  shrink: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  offsetOnSmall: PropTypes.number,
  offsetOnMedium: PropTypes.number,
  offsetOnLarge: PropTypes.number,
};
