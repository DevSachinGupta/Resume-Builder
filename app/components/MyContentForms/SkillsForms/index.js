import React from 'react';
import cx from 'classnames';
import './style.scss';
import Button from '../../Button';
import Dropdown from '../../Dropdown';

const options=[
  'ABC',
  'ABC',
  'ABC',
  'ABC',
  'ABC',
  'ABC',
  'ABC',
  'ABC'
];
function SkillsForm() {
  return <React.Fragment>
    <Dropdown options={options} />
    <Button type="primary" fullWidth className={cx('addMoreBtn shadow-md')}>Add Another Skill</Button>
  </React.Fragment>;
}

export default SkillsForm;
