/* eslint-disable react/button-has-type */
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

function Button({ className, as, circular, type, fullWidth, ...rest }) {
  return (
    <Wrapper>
      {
        <button
          type={as}
          className={cx(
            className,
            {
              circularButton: circular,
              defaultButton: type === ButtonTypes.DEFAULT,
              fullWidth,
            },
            [type],
            'button',
          )}
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
  as: 'button',
};
Button.propTypes = {
  handleRoute: PropTypes.func,
  iconButton: PropTypes.bool,
  as: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  circular: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
