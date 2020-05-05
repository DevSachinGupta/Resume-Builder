/**
 *
 * ReviewsBlock
 *
 */

import React, { memo } from 'react';
import Carousel from '../Carousel';
import './CarouselReviewStyle.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ReviewsBlock() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="border-b py-4" id="reviewSection">
      <div className="container mx-auto">
        <div className="w-full text-black px-4 md:px-16 p-6">
          <Carousel settings={settings}>
            <div>
              <div className="flex flex-col items-center text-center p-4 border-2 bg-gray-200 shadow-lg mx-4 mb-6 flex-1 md:mb-0 sm:flex-initial">
                <img
                  src="https://images.unsplash.com/photo-1581247227572-360cf3d83e00?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                  className="rounded-full h-20 w-20 "
                  alt=""
                />
                <h1 className="font-bold text-lg mt-2  ">Lorem Ipsum</h1>
                <h1 className="text-blue-500 text-md mb-4">Founder</h1>
                <p className="px-8 mb-4  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias, molestiae ex autem dicta nulla blanditiis
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center text-center p-4 border-2 bg-gray-200 shadow-lg mx-4 mb-6 flex-1 md:mb-0 sm:flex-initial">
                <img
                  src="https://images.unsplash.com/photo-1581247227572-360cf3d83e00?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                  className="rounded-full h-20 w-20 "
                  alt=""
                />
                <h1 className="font-bold text-lg mt-2  ">Lorem Ipsum</h1>
                <h1 className="text-blue-500 text-md mb-4">Founder</h1>
                <p className="px-8 mb-4  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias, molestiae ex autem dicta nulla blanditiis
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center text-center p-4 border-2 bg-gray-200 shadow-lg mx-4 mb-6 flex-1 md:mb-0 sm:flex-initial">
                <img
                  src="https://images.unsplash.com/photo-1581247227572-360cf3d83e00?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                  className="rounded-full h-20 w-20 "
                  alt=""
                />
                <h1 className="font-bold text-lg mt-2  ">Lorem Ipsum</h1>
                <h1 className="text-blue-500 text-md mb-4">Founder</h1>
                <p className="px-8 mb-4  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias, molestiae ex autem dicta nulla blanditiis
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center text-center p-4 border-2 bg-gray-200 shadow-lg mx-4 mb-6 flex-1 md:mb-0 sm:flex-initial">
                <img
                  src="https://images.unsplash.com/photo-1581247227572-360cf3d83e00?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                  className="rounded-full h-20 w-20 "
                  alt=""
                />
                <h1 className="font-bold text-lg mt-2  ">Lorem Ipsum</h1>
                <h1 className="text-blue-500 text-md mb-4">Founder</h1>
                <p className="px-8 mb-4  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias, molestiae ex autem dicta nulla blanditiis
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center text-center p-4 border-2 bg-gray-200 shadow-lg mx-4 mb-6 flex-1 md:mb-0 sm:flex-initial">
                <img
                  src="https://images.unsplash.com/photo-1581247227572-360cf3d83e00?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                  className="rounded-full h-20 w-20 "
                  alt=""
                />
                <h1 className="font-bold text-lg mt-2  ">Lorem Ipsum</h1>
                <h1 className="text-blue-500 text-md mb-4">Founder</h1>
                <p className="px-8 mb-4  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias, molestiae ex autem dicta nulla blanditiis
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center text-center p-4 border-2 bg-gray-200 shadow-lg mx-4 mb-6 flex-1 md:mb-0 sm:flex-initial">
                <img
                  src="https://images.unsplash.com/photo-1581247227572-360cf3d83e00?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                  className="rounded-full h-20 w-20 "
                  alt=""
                />
                <h1 className="font-bold text-lg mt-2  ">Lorem Ipsum</h1>
                <h1 className="text-blue-500 text-md mb-4">Founder</h1>
                <p className="px-8 mb-4  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias, molestiae ex autem dicta nulla blanditiis
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

ReviewsBlock.propTypes = {};

export default memo(ReviewsBlock);
