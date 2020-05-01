/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { memo, Children } from 'react';
import PropTypes from 'prop-types';

function SettingsContent(props) {
  const renderPage = url => {
    let page = [];

    if (url) {
      page = Children.map(props.children, child => {
        if (child.props.handler && child.props.handler === url) {
          return child;
        }
      });
    }
    // There was no page found, so show a page not defined message
    if (page.length === 0) {
      page = [
        <div key="settingsEmptyMessage" className="empty-message">
          <p>Page not defined</p>
        </div>,
      ];
    }
    return page;
  };

  const page = props.currentPage ? props.currentPage : '';
  let header = '';

  if (props.header) {
    if (props.header === true) {
      const currentItem = props.items.reduce((prev, item) =>
        item.url === page ? item : prev,
      );
      header = (
        <div className="headline">
          <h3>{currentItem.title}</h3>
        </div>
      );
    } else {
      header = props.header;
    }
  }
  return (
    <div>
      {header}
      <div className="settings-page">
        <div className="scroller-wrap">{renderPage(page)}</div>
      </div>
    </div>
  );
}

SettingsContent.propTypes = {
  currentPage: PropTypes.string,
  header: PropTypes.bool,
  items: PropTypes.array,
};

export default memo(SettingsContent);
