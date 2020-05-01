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
        props.currentPage === item.url ? 'menu-item active' : 'menu-item';

      return (
        <li title={title} className={itemsClassName}>
          <a href={url} onClick={ev => clicked(ev, item)}>
            {title}
          </a>
        </li>
      );
    });

  return (
    <div className="settings-left">
      <ul className="settings-menu">
        {props.headline ? <li className="headline">{props.headline}</li> : ''}
        {menuItems()}
      </ul>
    </div>
  );
}

SettingsMenu.propTypes = {
  headline: PropTypes.string.isRequired,
  items: PropTypes.array,
  currentPage: PropTypes.string,
  switchContent: PropTypes.func,
  onMenuItemClick: PropTypes.func,
};

export default memo(SettingsMenu);
