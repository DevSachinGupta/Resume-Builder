import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function SidebarItem(props) {
  return <div className="sidebarItem">{props.title}</div>;
}
SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SidebarItem;
