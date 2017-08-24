import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalAlignments } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Media object component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MediaObject = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'media-object',
    props.className,
    {
      'stack-for-small': props.stackForSmall
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(MediaObject.propTypes));

  return <div {...passProps} className={className}/>;
};

MediaObject.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  stackForSmall: PropTypes.bool
};

/**
 * Media object section component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MediaObjectSection = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'media-object-section',
    props.className,
    {
      'align-self-center': props.alignment === HorizontalAlignments.CENTER,
      'align-self-right': props.alignment === HorizontalAlignments.RIGHT,
      'align-self-justify': props.alignment === HorizontalAlignments.JUSTIFY,
      'align-self-spaced': props.alignment === HorizontalAlignments.SPACED,
      'main-section': props.isMain,
      'middle': props.isMiddle,
      'bottom': props.isBottom
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(MediaObjectSection.propTypes));

  return <div {...passProps} className={className}/>;
};

MediaObjectSection.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  alignment: PropTypes.oneOf(objectValues(HorizontalAlignments)),
  isMain: PropTypes.bool,
  isMiddle: PropTypes.bool,
  isBottom: PropTypes.bool
};
