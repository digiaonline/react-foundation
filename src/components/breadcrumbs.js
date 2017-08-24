import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Breadcrumbs component.
 * http://foundation.zurb.com/sites/docs/breadcrumbs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Breadcrumbs = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'breadcrumbs',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Breadcrumbs.propTypes));

  return <ul {...passProps} className={className}/>;
};

Breadcrumbs.propTypes = {
  ...GeneralPropTypes
};

/**
 * Breadcrumb item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const BreadcrumbItem = (props) => {
  const className = createClassName(
    props.className,
    {
      'disabled': props.isDisabled
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(BreadcrumbItem.propTypes));

  return <li {...passProps} className={className}/>;
};

BreadcrumbItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isDisabled: PropTypes.bool
};
