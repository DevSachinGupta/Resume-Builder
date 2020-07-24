import React from 'react';
import Input from '../../../../FormComponents/Input';
import { validationMap } from '../../../EducationForm/validation';
import PricingCardContainer from '../../../../Pricing';

const pricingDataAll = {
  generic: {
    priceDesc: 'some small print',
    ctaText: 'Try Now for 30 Days',
    ctaLinkPrefix: 'http://www.google.com/',
    ctaSecondaryText: 'purchase now',
    ctaSecondaryLinkPrefix: 'http://www.bing.com/',
    description:
      "This is the most basic package but it's also the cheapest. Great for ordinary use.",
  },

  common: {
    one: {
      description:
        "This is the most basic package but it's also the cheapest. Great for ordinary use.",
    },
    two: {
      description:
        'Best selling option. This is well suited for all around general everything.',
    },
    three: {
      description:
        "Enterprise edition. Heavy duty awesomeness that'll handle just about anything you can throw at it, including the kitchen sink.",
    },
  },

  regular: {
    generic: {
      priceOverview: 'Standard Version',
    },

    one: {
      title: 'Basic',
      price: 0.99,
      billingCode: 'basic-regular',
      priceOverview: 'Standard Version',
    },
    two: {
      title: 'Advanced',
      price: 1.99,
      billingCode: 'advanced-regular',
      priceOverview: 'Standard Version',
    },
    three: {
      title: 'Enterprise',
      price: 2.99,
      billingCode: 'enterprise-regular',
      priceOverview: 'Standard Version',
    },
  },

  promo: {
    generic: {
      priceOverview: '',
    },
    one: {
      title: 'Basic with Extra',
      price: 1.45,
      billingCode: 'basic-extra',
      priceOverview: 'Includes all Extra features',
    },
    two: {
      title: 'Advanced with Extra',
      price: 2.45,
      billingCode: 'advanced-extra',
      priceOverview: 'Includes all Extra features',
    },
    three: {
      title: 'Enterprise with Extra',
      price: 3.45,
      billingCode: 'enterprise-extra',
      priceOverview: 'Includes all Extra features',
    },
  },
};

export const FormSecondStep = () => (
  <div className="flex flex-wrap -mx-2 items-center justify-center overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-px">
    
    <div className="flex-col justify-between my-2 px-2 w-full rounded border boder-gray-800 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-2 md:w-1/3 lg:my-px lg:px-2 lg:w-1/4 xl:w-1/4">
      <div className="w-full py-4">
        <h3 className="mx-auto mb-2 text-lg font-semibold text-center underline text-gray-700">
          Starter
        </h3>
        <p className="text-xl font-bold text-center whitespace-no-wrap text-teal-500">
          INR 250
        </p>
        <p className="text-xs text-center uppercase text-teal-500">yearly</p>
      </div>
      <hr className="mx-2 border-t-2" />
      <div className="w-full px-1 my-4 flex-grow ">
        <p className="text-sm pb-3 leading-none text-center text-gray-700">5 Projects</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">15 Updations</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">SEO Optimization</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">Custom Domain</p>
      </div>
      <div className="flex w-full mt-2 my-2 items-center justify-center">
        <button
          type="button"
          className="w-full mx-3 my-1 text-center  bg-teal-500 border border-transparent rounded text-black"
        >
          Select
        </button>
      </div>
    </div>
    <div className="flex-col justify-between my-2 px-2 w-full rounded border boder-gray-800 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-2 md:w-1/3 lg:my-px lg:px-2 lg:w-1/4 xl:w-1/4">
      <div className="w-full py-4">
        <h3 className="mx-auto mb-2 text-lg font-semibold text-center underline text-gray-700">
          Basic
        </h3>
        <p className="text-xl font-bold text-center whitespace-no-wrap text-teal-500">
          INR 250
        </p>
        <p className="text-xs text-center uppercase text-teal-500">yearly</p>
      </div>
      <hr className="mx-2 border-t-2" />
      <div className="w-full px-1 my-4 flex-grow ">
        <p className="text-sm pb-3 leading-none text-center text-gray-700">5 Projects</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">15 Updations</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">SEO Optimization</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">Custom Domain</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">SEO Optimization</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">Custom Domain</p>
      </div>
      <div className="flex w-full mt-2 my-2 items-center justify-center">
        <button
          type="button"
          className="w-full mx-3 my-1 text-center  bg-teal-500 border border-transparent rounded text-black"
        >
          Select
        </button>
      </div>
    </div>
    <div className=" flex-col justify-between my-2 px-2 w-full rounded border boder-gray-800 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-2 md:w-1/3 lg:my-px lg:px-2 lg:w-1/4 xl:w-1/4">
      <div className="w-full py-4">
        <h3 className="mx-auto mb-2 text-lg font-semibold text-center underline text-gray-700">
          Premium
        </h3>
        <p className="text-xl font-bold text-center whitespace-no-wrap text-teal-500">
          INR 250
        </p>
        <p className="text-xs text-center uppercase text-teal-500">yearly</p>
      </div>
      <hr className="mx-2 border-t-2" />
      <div className="w-full px-1 my-4 flex-grow ">
        <p className="text-sm pb-3 leading-none text-center text-gray-700">5 Projects</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">15 Updations</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">SEO Optimization</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">Custom Domain</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">15 Updations</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">SEO Optimization</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">Custom Domain</p>
      </div>
      <div className="flex w-full mt-2 my-2 items-center justify-center">
        <button
          type="button"
          className="w-full mx-3 my-1 text-center  bg-teal-500 border border-transparent rounded text-black"
        >
          Select
        </button>
      </div>
    </div>
    <div className="flex-coljustify-between my-2 px-2 w-full rounded border boder-gray-800 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-2 md:w-1/3 lg:my-px lg:px-2 lg:w-1/4 xl:w-1/4">
      <div className="w-full py-4">
        <h3 className="mx-auto mb-2 text-lg font-semibold text-center underline text-gray-700">
          Advanced
        </h3>
        <p className="text-xl font-bold text-center whitespace-no-wrap text-teal-500">
          INR 250
        </p>
        <p className="text-xs text-center uppercase text-teal-500">yearly</p>
      </div>
      <hr className="mx-2 border-t-2" />
      <div className="w-full px-1 my-4 flex-grow ">
        <p className="text-sm pb-3 leading-none text-center text-gray-700">5 Projects</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">15 Updations</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">SEO Optimization</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">Custom Domain</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">5 Projects</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">15 Updations</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">SEO Optimization</p>
        <p className="text-sm pb-3 leading-none text-center text-gray-700">Custom Domain</p>
      </div>
      <div className="flex w-full mt-2 my-2 items-center justify-center">
        <button
          type="button"
          className="w-full mx-3 my-1 text-center  bg-teal-500 border border-transparent rounded text-black"
        >
          Select
        </button>
      </div>
    </div>

  </div>

  // <>
  //   <PricingCardContainer pricingDataAll={pricingDataAll} />
  // </>
);
