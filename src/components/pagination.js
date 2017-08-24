import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Pagination component.
 * http://foundation.zurb.com/sites/docs/pagination.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Pagination = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'pagination',
    props.className,
    {
      'text-center': props.isCentered
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Pagination.propTypes));

  return <ul {...passProps} className={className} role="navigation"/>;
};

Pagination.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isCentered: PropTypes.bool
};

/**
 * Pagination item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationItem = (props) => {
  const className = createClassName(
    props.className,
    {
      'current': props.isCurrent,
      'disabled': props.isDisabled
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(PaginationItem.propTypes));

  return <li {...passProps} className={className}/>;
};

PaginationItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isCurrent: PropTypes.bool,
  isDisabled: PropTypes.bool
};

/**
 * Pagination previous wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationPrevious = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'pagination-previous',
    props.className,
    generalClassNames(props)
  );

  return <PaginationItem {...props} className={className}/>;
};

/**
 * Pagination next wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationNext = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'pagination-next',
    props.className,
    generalClassNames(props)
  );

  return <PaginationItem {...props} className={className}/>;
};

/**
 * Pagination ellipsis wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationEllipsis = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'ellipsis',
    props.className,
    generalClassNames(props)
  );

  return <PaginationItem {...props} className={className}/>;
};
