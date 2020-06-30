import React from 'react';
import './dotsLoadingStyle.scss';

const DotsLoading = ({ loadingText }) => (
  <div className="py-1 px-5 flex items-center flex-col">
    <div className="loader-dots block relative w-20 h-5 mt-1">
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500" />
    </div>
    <div className="text-gray-500 text-xs font-light mt-2 text-center">
      {loadingText || 'Please wait...'}
    </div>
  </div>
);

export default DotsLoading;
