/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Themes
 *
 */

import React from 'react';
import Row from 'components/Layout/Row';
import Column from 'components/Layout/Column';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Themes() {
  const [filters, setFilters] = React.useState({
    a: '',
  });
  const updateFilters = (key, value) => {
    const data = { ...filters };
    data[key] = value;
    setFilters({ ...data });
  };
  return (
    <div className="">
      <Row className="justify-between w-full">
        <Column>
          <input type="text" />
        </Column>
        <Column className="">
          <button
            type="button"
            className="mr-2"
            onClick={() => {
              updateFilters('a', '');
            }}
          >
            ALL
          </button>
          <button
            type="button"
            className="mr-2"
            onClick={() => {
              updateFilters('a', '');
            }}
          >
            Free
          </button>
          <button
            type="button"
            className="mr-2"
            onClick={() => {
              updateFilters('a', '');
            }}
          >
            Premimum
          </button>
        </Column>
      </Row>
    </div>
  );
}

Themes.propTypes = {};

export default Themes;
