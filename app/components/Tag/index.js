import React from 'react';
import Proptypes from 'prop-types';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import './style.scss';
function Tag(props) {
  return (
    <div className="tagItem">
      <div>{props.children}</div>
      <div className="clearIcon">
        <IoMdCloseCircleOutline />
      </div>
    </div>
  );
}
Tag.propTypes = {
  children: Proptypes.node.isRequired,
};
export default Tag;
