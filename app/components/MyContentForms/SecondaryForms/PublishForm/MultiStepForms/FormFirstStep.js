import React from 'react';
import { Row, Column } from '../../../../Layout';

export const FormFirstStep = () => (
  // const { errors, touched } = formikProps;
  <>
    <Row>
      <div>
        <h3>Powered by Netcv()logo</h3>
        <h4>support@netcv.co.in</h4>
        <h5>Ready to publish your Resume.</h5>

        <div className="lg:flex md:flex text-xl justify-center items-center border-4 border-dashed mx-auto border-orange-500 max-w-2xl py-4 px-4">
          <div className="flex justify-center font-semibold p-2">
            <input
              type="text"
              className="focus:outline-none border rounded px-2 py-1"
              placeholder="username"
            />
            <span className="text-orange-500 mx-1 text-3xl">/</span>
            <span className="text-gray-800 my-auto">site.com</span>
          </div>
          <button className="px-4 py-1 rounded-full focus:outline-none bg-orange-500 text-white shadow ml-2">
            Check
          </button>
        </div>
      </div>
    </Row>
  </>
);
