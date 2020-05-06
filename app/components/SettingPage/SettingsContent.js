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
        <div className="flex-items w-full bg-gray-300 shadow-md rounded-md border-b border-gray-500">
          <div className="flex px-5 pt-3">
            <div className="w-full pl-6 text-xl">Page not defined</div>
          </div>
        </div>,
      ];
    }
    return page;
  };

  const page = props.currentPage ? props.currentPage : '';

  return <div>{renderPage(page)}</div>;
}

SettingsContent.propTypes = {
  currentPage: PropTypes.string,
};

export default memo(SettingsContent);
