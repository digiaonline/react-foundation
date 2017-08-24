import React from 'react';
import PropTypes from 'prop-types';
import { BadgeColors } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Badge component.
 * http://foundation.zurb.com/sites/docs/badge.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Badge = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'badge',
    props.className,
    props.color,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Badge.propTypes));

  return <span {...passProps} className={className}/>;
};

Badge.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(BadgeColors))
};
