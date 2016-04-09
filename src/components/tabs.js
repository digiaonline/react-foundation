import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames, objectValues } from '../utils';

/**
 * Tabs component.
 * http://foundation.zurb.com/sites/docs/tabs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Tabs = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs',
    props.className,
    {
      'vertical': props.isVertical
    },
    generalClassNames(props)
  );

  return (
    <ul {...props} className={className}/>
  );
};

Tabs.propTypes = {
  ...GeneralPropTypes,
  isVertical: PropTypes.bool
};

/**
 * Tab item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TabItem = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-title',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  return (
    <li {...props} className={className}/>
  );
};

TabItem.propTypes = {
  ...GeneralPropTypes,
  isActive: PropTypes.bool
};

/**
 * Tab panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PanelContainer = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-content',
    props.className,
    {
      'vertical': props.isVertical
    },
    generalClassNames(props)
  );

  return (
    <div {...props} className={className}/>
  );
};

PanelContainer.propTypes = {
  ...GeneralPropTypes,
  isActive: PropTypes.bool,
  isVertical: PropTypes.bool
};

/**
 * Tab panel item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PanelItem = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-panel',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  return (
    <div {...props} className={className}/>
  );
};

PanelItem.propTypes = {
  ...GeneralPropTypes,
  isActive: PropTypes.bool
};
