import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Icon component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Icon = (props) => {
  const className = createClassName(
    props.prefix,
    props.prefix ? `${props.prefix}-${props.name}` : props.name,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Icon.propTypes));

  return <i {...passProps} className={className}/>;
};

Icon.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string
};
