import React, { memo } from 'react';
import PropTypes from 'prop-types';

function SettingsMenu(props) {
  const clicked = (ev, item) => {
    ev.preventDefault();
    // If this is not a left click
    if (ev.button !== 0) {
      return;
    }
    if (props.onMenuItemClick) {
      props.onMenuItemClick(item);
    }
    props.switchContent(item);
  };

  const menuItems = () =>
    props.items.map((item, i) => {
      const { title, url } = item;
      const itemsClassName =
        props.currentPage === item.url
          ? 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'
          : 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none';

      return (
        <button
          type="button"
          onClick={ev => clicked(ev, item)}
          className={itemsClassName}
        >
          {title}
        </button>
      );
    });

  return <nav className="flex flex-col sm:flex-row">{menuItems()}</nav>;
}

SettingsMenu.propTypes = {
  items: PropTypes.array,
  currentPage: PropTypes.string,
  switchContent: PropTypes.func,
  onMenuItemClick: PropTypes.func,
};

export default memo(SettingsMenu);
