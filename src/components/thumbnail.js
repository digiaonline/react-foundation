import React from 'react';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Thumbnail component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Thumbnail = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'thumbnail',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Thumbnail.propTypes));

  return <img {...passProps} className={className}/>;
};

Thumbnail.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Thumbnail link component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ThumbnailLink = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'thumbnail',
    props.className,
    generalClassNames(props)
  );

  // TODO: Consider improving how properties are set for both the link and image.

  const passProps = removeProps(props, objectKeys(ThumbnailLink.propTypes));

  return <a className={className}><img {...passProps}/></a>;
};

ThumbnailLink.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};
