/**
 *
 * StarRating
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import './style.scss';

function StarRating(props) {
  const [currentRating, setCurrentRating] = useState(props.currentRatingValue);
  const ratingRef = useRef(null);

  useEffect(() => {
    setRating();
  }, []);

  const hoverHandler = ev => {
    const stars = ev.target.parentElement.getElementsByClassName('star');
    const hoverValue = ev.target.dataset.value;
    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= star.dataset.value ? 'yellow' : 'gray';
    });
  };

  const setRating = ev => {
    const stars = ratingRef.current.getElementsByClassName('star');
    Array.from(stars).forEach(star => {
      star.style.color =
        currentRating >= star.dataset.value ? 'yellow' : 'gray';
    });
  };

  const starClickHandler = (ev, setFieldValue) => {
    const rating = ev.target.dataset.value;
    setCurrentRating(rating); // set state so the rating stays highlighted
    setFieldValue('rating', rating);
    if (props.onClick) {
      props.onClick(rating); // emit the event up to the parent
    }
  };

  return (
    <Field name="rating" id="rating" type="number">
      {({ form: { setFieldValue } }) => (
        <div>
          <label htmlFor="rating" className="label-color">
            Rating
          </label>
          <div
            className="rating"
            ref={ratingRef}
            data-rating={currentRating}
            onMouseOut={setRating}
          >
            {[...Array(+props.numberOfStars).keys()].map(n => (
              <span
                className="star"
                key={n + 1}
                data-value={n + 1}
                onMouseOver={hoverHandler}
                onClick={e => starClickHandler(e, setFieldValue)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      )}
    </Field>
  );
}

StarRating.propTypes = {
  currentRatingValue: PropTypes.string.isRequired,
  numberOfStars: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(StarRating);
