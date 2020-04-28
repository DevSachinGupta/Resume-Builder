/**
 *
 * Pricing
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PricingCard(props) {
  const price = props.pricingData.price.toString().split('.');
  const dollar = price[0];
  const cent = price[1] || '00';

  return (
    <div className={`pricingCard ${props.featured ? 'featured' : ''}`}>
      <div className="title">{props.pricingData.title}</div>

      <div className="card">
        <h2 className="price">
          <span className="price__currency">$</span>
          <span className="price__dollar">{dollar}</span>.
          <span className="price__cent">{cent}</span>
        </h2>

        <p className="price-desc">{props.generic.priceDesc}</p>

        <p className="price-overview">{props.pricingData.priceOverview}</p>

        <p className="description">{props.common.description}</p>
      </div>
      <a
        className={`bttn bttn-${props.btnClass}`}
        href={props.generic.ctaLinkPrefix + props.pricingData.billingCode}
      >
        {props.generic.ctaText}
      </a>
    </div>
  );
}

PricingCard.propTypes = {
  pricingData: PropTypes.object,
  featured: PropTypes.bool,
  generic: PropTypes.object,
  common: PropTypes.object,
  btnClass: PropTypes.string,
};

export default memo(PricingCard);
