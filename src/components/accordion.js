import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Accordion component.
 * http://foundation.zurb.com/sites/docs/accordion.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Accordion = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Accordion.propTypes));

  return <ul {...passProps} className={className}>{props.children || []}</ul>;
};

Accordion.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  children: PropTypes.any,
};

/**
 * Accordion item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const AccordionItem = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-item',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionItem.propTypes));

  return <li {...passProps} className={className}/>;
};

AccordionItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Accordion panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const AccordionContent = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-content',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionContent.propTypes));

  return <div {...passProps} className={className}/>;
};

AccordionContent.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Accordion panel title component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const AccordionTitle = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-title',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionContent.propTypes));

  return <a {...passProps} className={className}/>;
};

AccordionTitle.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
};
