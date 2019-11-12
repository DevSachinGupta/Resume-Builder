import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function SidebarItem({ title, ...rest }) {
  return (
    <div className="sidebarItem" {...rest}>
      {title}
    </div>
  );
}
SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SidebarItem;
