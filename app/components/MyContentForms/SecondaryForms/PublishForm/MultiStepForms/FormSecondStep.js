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
  // const { errors, touched } = formikProps;
  <>
    <PricingCardContainer pricingDataAll={pricingDataAll} />
  </>
);
