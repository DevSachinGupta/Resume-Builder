import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function SidebarItem({ title, icon, ...rest }) {
  return (
    <div className="sidebarItem" {...rest}>
      {icon && <icon />}
      {title}
    </div>
  );
}
SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
};
export default SidebarItem;
