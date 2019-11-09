/**
 *
 * BuilderSidebar
 *
 */

import React, { memo } from 'react';
import './style.css';
import SidebarItem from '../../Sidebar/SidebarItem';
import SidebarItems from './sidebarItems.json';
// import styled from 'styled-components';

function BuilderSidebar() {
  return (
    <div className="builder-sidebar-container my-16">
      {SidebarItems.map(item => (
        <SidebarItem title={item.title} />
      ))}
    </div>
  );
}

BuilderSidebar.propTypes = {};

export default memo(BuilderSidebar);
