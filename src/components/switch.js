import React from 'react';
import PropTypes from 'prop-types';
import { SwitchSizes, SwitchInputTypes } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

let currentId = 0;

/**
 * Switch component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Switch = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'switch',
    props.className,
    props.size,
    generalClassNames(props)
  );

  const switchId = props.id || `switch${currentId++}`;

  // TODO: Consider refactoring this, the rendering a little bit messy...

  return (
    <div {...removeProps(props, ['id'])} className={className}>
      <SwitchInput {...props.input} id={switchId}/>
      <SwitchPaddle {...props.paddle} htmlFor={switchId}>
        {props.active ? <SwitchActive {...props.active}/> : null}
        {props.inactive ? <SwitchInactive {...props.inactive}/> : null}
      </SwitchPaddle>
    </div>
  );
};

Switch.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  size: PropTypes.oneOf(objectValues(SwitchSizes)),
  id: PropTypes.string
};

/**
 * Switch input sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchInput = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'switch-input',
    props.className,
    generalClassNames(props)
  );

  return (
    <input {...removeProps(props, ['type'])} className={className} type={props.type || SwitchInputTypes.CHECKBOX}/>
  );
};

SwitchInput.propTypes = {
  type: PropTypes.oneOf(objectValues(SwitchInputTypes)),
  ...GeneralPropTypes
};

/**
 * Switch paddle sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchPaddle = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'switch-paddle',
    props.className,
    generalClassNames(props)
  );

  return (
    <label {...props} className={className}/>
  );
};

/**
 * Switch active sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchActive = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'switch-active',
    props.className,
    generalClassNames(props)
  );

  return (
    <span {...props} className={className} aria-hidden="true">{props.text}</span>
  );
};

/**
 * Switch inactive sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchInactive = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'switch-inactive',
    props.className,
    generalClassNames(props)
  );

  return (
    <span {...props} className={className} aria-hidden="true">{props.text}</span>
  );
};
