import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import SettingHeaderLink from './SettingHeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function SettingHeader() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <SettingHeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </SettingHeaderLink>
        <SettingHeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </SettingHeaderLink>
      </NavBar>
    </div>
  );
}

export default SettingHeader;
