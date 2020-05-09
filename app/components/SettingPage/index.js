/**
 *
 * SettingPage
 *
 */

import React, { memo } from 'react';
import Header from './Header';
import SettingsMenu from './SettingsMenu';
import SettingsContent from './SettingsContent';
import ProfilePage from './ProfilePage';
import PlansPage from './PlansPage';
import NotificationsPage from './NotificationsPage';
import PaymentsPage from './PaymentsPage';
import SubscriptionPage from './SubscriptionPage';
import Footer from './Footer';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SettingPage() {
  const settingMenu = [
    {
      title: 'Profile',
      url: '/settings/profile',
    },
    {
      title: 'Plans',
      url: '/settings/plans',
    },
    {
      title: 'Notifications',
      url: '/settings/notifications',
    },
    {
      title: 'Payments',
      url: '/settings/payments',
    },
    {
      title: 'Subscription',
      url: '/settings/subscription',
    },
  ];
  const [currentPage, setCurrentPage] = React.useState('/settings/profile');
  const switchContentMenu = menuItem => {
    if (currentPage !== menuItem.url) {
      setCurrentPage(menuItem.url);
    }
  };
  return (
    <div className="bg-white">
      <div>
        <Header />
      </div>
      <div className="flex ">
        <div className="container mx-auto px-8">
          <div className="flex px-10">
            <div className="w-full pl-6 text-2xl">Account Settings</div>
          </div>
          <div className="flex px-10">
            <div className="w-full px-4 mt-2">
              <SettingsMenu
                items={settingMenu}
                currentPage={currentPage}
                switchContent={switchContentMenu}
              />
            </div>
          </div>
          <div className="px-10">
            <div className="px-4 mt-2">
              <SettingsContent currentPage={currentPage}>
                <ProfilePage handler="/settings/profile" />
                <PlansPage handler="/settings/plans" />
                <NotificationsPage handler="/settings/notifications" />
                <PaymentsPage handler="/settings/payments" />
                <SubscriptionPage handler="/settings/subscription" />
              </SettingsContent>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="container mx-auto ">
          <div className="px-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

SettingPage.propTypes = {};

export default memo(SettingPage);
