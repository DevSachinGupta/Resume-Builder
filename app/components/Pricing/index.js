/**
 *
 * Pricing
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import PricingCard from './PricingCard';
import './style.scss';
// import styled from 'styled-components';

function PricingCardContainer(props) {
  const [promo, setPromo] = useState(false);

  const togglePromo = () => {
    setPromo(!promo);
    console.log(!promo);
  };

  let pricingDataCurrent = props.pricingDataAll.regular;
  const { common } = props.pricingDataAll;

  promo
    ? (pricingDataCurrent = props.pricingDataAll.promo)
    : (pricingDataCurrent = props.pricingDataAll.regular);

  const { generic } = props.pricingDataAll;
  const { one } = pricingDataCurrent;
  const { two } = pricingDataCurrent;
  const { three } = pricingDataCurrent;

  return (
    <section>
      <div className="toggle-container">
        Include 'Extra' <input type="checkbox" onChange={togglePromo} />
      </div>

      <div className="container">
        <PricingCard pricingData={one} common={common.one} generic={generic} />

        <PricingCard
          pricingData={two}
          common={common.two}
          generic={generic}
          featured
        />

        <PricingCard
          pricingData={three}
          common={common.three}
          generic={generic}
        />
      </div>
    </section>
  );
}

PricingCardContainer.propTypes = {
  pricingDataAll: PropTypes.object,
};

export default memo(PricingCardContainer);
