import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import cx from 'classnames';
import { makeSelectActiveModalType } from '../../../containers/MyContent/selectors';
import './style.scss';

function SidebarItem({ title, id, icon, selectedModal, dispatch, ...rest }) {
  return (
    <div
      className={cx('sidebarItem', { active: id === selectedModal })}
      {...rest}
    >
      {icon && <icon />}
      {title}
    </div>
  );
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  selectedModal: PropTypes.string.isRequired,
  id: PropTypes.string,
  dispatch: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  selectedModal: makeSelectActiveModalType(),
});
const withConnect = connect(
  mapStateToProps,
  null,
);
export default compose(withConnect)(SidebarItem);
