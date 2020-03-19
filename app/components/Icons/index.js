/**
 *
 * Icons
 *
 */

import React, { memo } from 'react';
import iconPaths  from './icons';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function getPath(iconName) {
  const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    console.warn(`icon ${iconName} does not exist.`);
    return '';
  }
}

function Icons(props) {
  return (
  <svg width="22" height="22" viewBox="0 0 1024 1024">
    <path d={getPath(props.icon)}></path>
  </svg>
  );
}
// function Icons(props) {
//   return (
//   <svg width="22" height="22" viewBox="0 0 1024 1024">
//     <path d={ICONS[props.icon]}></path>
//   </svg>
//   );
// }

Icons.propTypes = {};

export default memo(Icons);
