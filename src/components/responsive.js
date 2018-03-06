import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TopBar } from './top-bar';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';
import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';

// Default pixel value when title bar is displayed and top bar is hidden.
const DEFAULT_BREAKPOINT = 640;

/**
 * Responsive navigation component.
 * http://foundation.zurb.com/sites/docs/responsive-navigation.html
 */
export class ResponsiveNavigation extends Component {
  constructor() {
    super();

    this.state = {
      isTitleBarVisible: true,
      isTopBarVisible: false
    };

    this.update = this.update.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    this.update();
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('resize', this.update);
    }
  }

  componentWillUnmount() {
    if (ExecutionEnvironment.canUseDOM) {
      window.removeEventListener('resize', this.update);
    }
  }

  /**
   * Updates the state of this component.
   * While this might seem like a sub-optimal solution, it is actually the only solution.
   * Using 'hide' and 'show' -classes won't work because they set display with `!important`.
   */
  update() {
    const { breakpoint } = this.props;

    if (ExecutionEnvironment.canUseDOM) {
      this.setState({
        isTitleBarVisible: window.innerWidth < breakpoint,
        isTopBarVisible: window.innerWidth >= breakpoint
      });
    }
  }

  /**
   * Called when the menu icon is clicked.
   */
  toggle() {
    this.setState({
      isTopBarVisible: !this.state.isTopBarVisible
    });
  }

  render() {
    const {
      isTitleBarVisible,
      isTopBarVisible
    } = this.state;

    const {
      titleBar: titleBarProps = {},
      menuIcon: menuIconProps = {},
      titleBarTitle: titleBarTitleProps = {},
      topBar: topBarProps = {},
      children
    } = this.props;

    return (
      <div {...removeProps(this.props, ['breakpoint'])}>
        <TitleBar {...titleBarProps} isHidden={!isTitleBarVisible}>
          <MenuIcon {...menuIconProps} onClick={this.toggle}/>
          <TitleBarTitle {...titleBarTitleProps}/>
        </TitleBar>
        <TopBar {...topBarProps} isHidden={!isTopBarVisible}>
          {children}
        </TopBar>
      </div>
    );
  }
}

ResponsiveNavigation.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  breakpoint: PropTypes.number.isRequired
};

ResponsiveNavigation.defaultProps = {
  breakpoint: DEFAULT_BREAKPOINT
};

/**
 * Title bar sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TitleBar = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'title-bar',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TitleBar.propTypes));
  
  return (
    <div {...passProps} className={className} />
  );
  
};

TitleBar.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Title bar menu icon sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MenuIcon = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'menu-icon',
    props.className,
    generalClassNames(props)
  );
  const passProps = removeProps(props, objectKeys(MenuIcon.propTypes));

  return (
    <button {...passProps} className={className} type="button"/>
  );
};

MenuIcon.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Title bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TitleBarTitle = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'title-bar-title',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TitleBarTitle.propTypes));
  return (
    <div {...passProps} className={className}/>
  );
};

TitleBarTitle.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};
