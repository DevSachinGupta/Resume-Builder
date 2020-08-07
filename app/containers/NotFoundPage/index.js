/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4 mt-5">
            <div className="relative flex flex-col min-w-0 w-full mb-6">
              <div className="text-center text-xl mb-0 px-6 py-3">NetCV.</div>
            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg  bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center ">
                  <h6 className="text-gray-800 text-md font-bold">
                    Page Not Found!!
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                <div className="text-gray-600 text-center mb-3">
                  <small>
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                  </small>
                </div>
                <div className="text-center ">
                  <small>
                    <Link
                      to="/dashboard"
                      className="text-blue-500"
                      style={{ 'padding-top': '0.5rem' }}
                    >
                      Take me back to NetCV.
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
