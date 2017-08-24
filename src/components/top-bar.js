import React from 'react';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Top bar component.
 * http://foundation.zurb.com/sites/docs/top-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TopBar = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'top-bar',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TopBar.propTypes));

  return <div {...passProps} className={className}/>;
};

TopBar.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Top bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TopBarTitle = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'top-bar-title',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TopBarTitle.propTypes));

  return <div {...passProps} className={className}/>;
};

TopBarTitle.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Top bar left sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TopBarLeft = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'top-bar-left',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TopBarLeft.propTypes));

  return <div {...passProps} className={className}/>;
};

TopBarLeft.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Top bar right sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TopBarRight = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'top-bar-right',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TopBarRight.propTypes));

  return <div {...passProps} className={className}/>;
};

TopBarRight.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};
