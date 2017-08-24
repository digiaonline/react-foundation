import React from 'react';
import { createClassName, generalClassNames, GeneralPropTypes, FlexboxPropTypes, removeProps, objectKeys } from '../utils';

/**
 * Div component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Block = (props) => {
  const passProps = removeProps(props, objectKeys(Block.propTypes));

  return <div {...passProps} className={createClassName(props.className, generalClassNames(props))}/>;
};

Block.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Span component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Inline = (props) => {
  const passProps = removeProps(props, objectKeys(Inline.propTypes));

  return <span {...passProps} className={createClassName(props.className, generalClassNames(props))}/>;
};

Inline.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};
