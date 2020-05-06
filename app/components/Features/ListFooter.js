/**
 *
 * ListFooter
 *
 */

import React, { memo } from 'react';
// import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Select from 'react-dropdown-select';
// import styled from 'styled-components';

function ListFooter(props) {
  const options = [
    {id:1, value:'12'},
    {id:2, value:'18'},
    {id:3, value:'24'},
    {id:4, value:'30'},
  ];
  const startItem =
    props.pagesize * (props.pageNumber - 1) === 0
      ? 1
      : props.pagesize * (props.pageNumber - 1);
  const endItem =
    props.pagesize * props.pageNumber > props.filteredItemCount
      ? props.filteredItemCount
      : props.pagesize * props.pageNumber;
  return (
    <div className="flex justify-end items-center listFooterSection">
      <div className="justify-between text-md flex text-right">
        <div className="ml-4 my-auto ">
          <span className="">Items per page:</span>
        </div>
        <div className="ml-2 my-auto featureDropdown">
          <Select
            className="border-0"
            labelField="value"
            searchable={false}
            options={options}
            values={[options[0]]}
            onChange={value => {
              props.updateFilter('pagesize', parseInt(value[0].value));
            }}
          />
        </div>
        <div className="ml-4 my-auto">
          <span className="">{startItem}</span>
          <span className="">-</span>
          <span className="mr-2">{endItem}</span>
          <span className="mr-2">of</span>
          <span className="mr-2">{props.filteredItemCount}</span>
        </div>
        <div className="p-3 rounded-full  hover:bg-gray-100">
          <button
            type="button"
            className="w-5 h-5"
            onClick={e => {
              props.updateFilter('pageChange', '--');
            }}
            disabled={props.pageNumber <= 1}
          >
            &lt;
          </button>
        </div>
        <div className="p-3 rounded-full  hover:bg-gray-100">
          <button
            type="button"
            className="w-5 h-5"
            onClick={e => {
              props.updateFilter('pageChange', '++');
            }}
            disabled={
              !(
                props.pageNumber <=
                parseInt(props.filteredItemCount / props.pagesize)
              )
            }
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

ListFooter.propTypes = {
  updateFilter: PropTypes.func,
  pageNumber: PropTypes.number,
  pagesize: PropTypes.number,
  filteredItemCount: PropTypes.number,
};

export default memo(ListFooter);
