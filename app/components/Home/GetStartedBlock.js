/**
 *
 * GetStartedBlock
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function GetStartedBlock() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto text-center mb-6">
        {/* <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Get Started
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
        </div> */}

        <h3 className="my-4 text-3xl leading-tight">Build Your Resume Now!</h3>

        <button
          type="button"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold my-6 py-4 px-8 shadow-lg"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

GetStartedBlock.propTypes = {};

export default memo(GetStartedBlock);
