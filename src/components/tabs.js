import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Tabs component.
 * http://foundation.zurb.com/sites/docs/tabs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Tabs = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs',
    props.className,
    {
      'vertical': props.isVertical
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Tabs.propTypes));

  return <ul {...passProps} className={className}/>;
};

Tabs.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isVertical: PropTypes.bool
};

/**
 * Tab item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TabItem = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-title',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TabItem.propTypes));

  return <li {...passProps} className={className}/>;
};

TabItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Tab panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TabsContent = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-content',
    props.className,
    {
      'vertical': props.isVertical
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TabsContent.propTypes));

  return <div {...passProps} className={className}/>;
};

TabsContent.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool,
  isVertical: PropTypes.bool
};

/**
 * Tab panel item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TabPanel = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-panel',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TabPanel.propTypes));

  return <div {...passProps} className={className}/>;
};

TabPanel.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};
