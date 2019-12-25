/**
 *
 * CheerioComponent
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CheerioComponent() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CheerioComponent.propTypes = {};

export default memo(CheerioComponent);
