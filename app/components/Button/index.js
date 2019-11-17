/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Wrapper from './Wrapper';
import { ButtonTypes } from './constants';
import './style.scss';

function Button({ className, circular, type, ...rest }) {
  return (
    <Wrapper>
      {
        <button
          type="button"
          className={cx(className, {
            circularButton: circular,
            primary: type === ButtonTypes.PRIMARY,
            defaultButton: type === ButtonTypes.DEFAULT,
          })}
          {...rest}
        >
          {Children.toArray(rest.children)}
        </button>
      }
    </Wrapper>
  );
}
Button.defaultProps = {
  type: 'default',
};
Button.propTypes = {
  handleRoute: PropTypes.func,
  iconButton: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  circular: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
