/**
 *
 * SettingPage
 *
 */

import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
} from '../../containers/App/selectors';
import { updatePublishType } from '../../containers/App/actions';
import DashboardHeader from '../Header/DashboardHeader';
import SettingsMenu from './SettingsMenu';
import SettingsContent from './SettingsContent';
import ProfilePage from './ProfilePage';
import PublishPage from './PublishPage';
import PlansPage from './PlansPage';
import NotificationsPage from './NotificationsPage';
import PaymentsPage from './PaymentsPage';
import SubscriptionPage from './SubscriptionPage';
import Footer from './Footer';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SettingPage({ user, userData, dispatch }) {
  console.log('SettingPage userData', userData);
  console.log('SettingPage user', user);

  dispatch(updatePublishType('Testing01'));

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
      title: 'Publish/SEO',
      url: '/settings/domain',
    },
    {
      title: 'Notifications',
      url: '/settings/notifications',
    },
    {
      title: 'Payments',
      url: '/settings/payments',
    },
    // {
    //   title: 'Subscription',
    //   url: '/settings/subscription',
    // },
  ];
  const [currentPage, setCurrentPage] = React.useState('/settings/profile');
  const switchContentMenu = menuItem => {
    if (currentPage !== menuItem.url) {
      setCurrentPage(menuItem.url);
    }
  };
  return (
    <div className="bg-white flex flex-col h-screen justify-between">
      <div>
        <DashboardHeader user={user} userData={userData} dispatch={dispatch} />
      </div>
      <div className="flex mb-auto">
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
                <ProfilePage
                  userData={userData}
                  dispatch={dispatch}
                  handler="/settings/profile"
                />
                <PublishPage
                  userData={userData}
                  dispatch={dispatch}
                  handler="/settings/domain"
                />
                <PlansPage
                  userData={userData}
                  dispatch={dispatch}
                  handler="/settings/plans"
                />
                <NotificationsPage
                  userData={userData}
                  dispatch={dispatch}
                  handler="/settings/notifications"
                />
                <PaymentsPage
                  userData={userData}
                  dispatch={dispatch}
                  handler="/settings/payments"
                />
                {/* <SubscriptionPage
                  userData={userData}
                  dispatch={dispatch}
                  handler="/settings/subscription"
                /> */}
              </SettingsContent>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-8">
        <Footer />
      </div>
    </div>
  );
}

SettingPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  user: makeSelectGetUserIsAuthenticated(),
  userData: makeSelectGetCurrentUserData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SettingPage);
