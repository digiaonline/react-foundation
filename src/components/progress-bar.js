import React from 'react';
import PropTypes from 'prop-types';
import { ProgressColors } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Progress = (props) => {
  const { meter: meterProps = {} } = props;

  const className = createClassName(
    props.noDefaultClassName ? null : 'progress',
    props.className,
    props.color,
    generalClassNames(props)
  );

  if (props.value) {
    meterProps.style = meterProps.style || {};
    meterProps.style.width = `${props.value}%`;
  }

  const passProps = removeProps(props, objectKeys(Progress.propTypes));

  return (
    <div {...passProps}
      className={className}
      role="progressbar"
      aria-valuemin={props.min}
      aria-valuemax={props.max}
      aria-valuenow={props.value}
      aria-valuetext={props.valueText}>
      {meterProps.text ? <ProgressMeterWithText {...meterProps} /> : <ProgressMeter {...meterProps} />}
    </div>
  );
};

Progress.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.oneOf(objectValues(ProgressColors))
};

/**
 * Progress meter sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeter = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'progress-meter',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(ProgressMeter.propTypes));

  return <div {...passProps} className={className}/>;
};

ProgressMeter.propTypes = {
  ...GeneralPropTypes
};

/**
 * Progress meter with text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeterWithText = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'progress-meter',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(ProgressMeterWithText.propTypes));

  return (
    <span {...passProps} className={className}>
      <ProgressMeterText>{props.text}</ProgressMeterText>
    </span>
  );
};

ProgressMeterWithText.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  text: PropTypes.string.isRequired
};

/**
 * Progress meter text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeterText = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'progress-meter-text',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(ProgressMeterText.propTypes));

  return <p {...passProps} className={className}/>;
};

ProgressMeterText.propTypes = {
  ...GeneralPropTypes
};

/**
 * Native progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html#native-progress
 *
 * @returns {Object}
 */
export const NativeProgress = (props) => {
  const className = createClassName(
    props.className,
    props.color,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(NativeProgress.propTypes));

  return <progress {...passProps} max={props.max} value={props.value} className={className}/>;
};

NativeProgress.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  max: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.oneOf(objectValues(ProgressColors))
};

// TODO: Consider adding support for native meter.
